import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getAiResponseStream } from '~/server/endpoints/ai/get-ai-response-stream';

const AiResponseQuerySchema = z.object({
	prompt: z.string(),
});

export default async function handler(req: NextRequest) {
	const validatedSchemaResult = AiResponseQuerySchema.safeParse(await req.json());

	if (!validatedSchemaResult.success) {
		return new NextResponse(JSON.stringify({ success: false, message: validatedSchemaResult.error.message }), {
			status: 401,
			headers: { 'content-type': 'application/json' },
		});
	}

	const { prompt } = validatedSchemaResult.data;
	const authToken = req.headers.get('authorization')?.replace('Bearer ', '');
	const appCheckToken = req.headers.get('x-firebase-appcheck');

	if (!authToken) {
		return new NextResponse(JSON.stringify({ success: false, message: 'Request did not include an auth token!' }), {
			status: 401,
			headers: { 'content-type': 'application/json' },
		});
	}

	if (!appCheckToken) {
		return new NextResponse(
			JSON.stringify({ success: false, message: 'Request did not include a firebase app check token!' }),
			{
				status: 401,
				headers: { 'content-type': 'application/json' },
			},
		);
	}

	// get a stream from calling the OpenAI API and pipe it to our response
	const stream = await getAiResponseStream(prompt);
	return new NextResponse(stream, {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'text/event-stream; charset=utf-8',
			Connection: 'keep-alive',
			'Cache-Control': 'no-cache, no-transform',
			'X-Accel-Buffering': 'no',
			'Content-Encoding': 'none',
		},
	});
}

export const runtime = 'edge';
