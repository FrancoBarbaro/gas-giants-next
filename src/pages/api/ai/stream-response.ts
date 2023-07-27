import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { getAiResponseStream } from '~/server/endpoints/ai/get-ai-response-stream';

const AiResponseQuerySchema = z.object({
	prompt: z.string(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	// if (typeof EdgeRuntime !== 'string') {
	// 	// dead-code elimination is enabled for the code inside this block
	// }

	const validatedSchemaResult = AiResponseQuerySchema.safeParse(req.body);

	if (!validatedSchemaResult.success) {
		return res.status(400).json({ message: validatedSchemaResult.error.message });
	}

	const { prompt } = validatedSchemaResult.data;
	const authToken = req.headers.authorization?.replace('Bearer ', '');
	const appCheckToken = req.headers['x-firebase-appcheck'];

	if (!authToken) return res.status(401).json({ message: 'Request did not include an auth token!' });
	if (!appCheckToken) return res.status(401).json({ message: 'Request did not include a firebase app check token!' });

	// // set headers to allow for a streaming response
	// res.setHeader('Content-Type', 'text/event-stream;charset=utf-8');
	// res.setHeader('Cache-Control', 'no-cache, no-transform');
	// res.setHeader('X-Accel-Buffering', 'no');
	// res.setHeader('Connection', 'keep-alive');

	let responseStream = new TransformStream();

	// get a stream from calling the OpenAI API and pipe it to our response
	const stream = await getAiResponseStream(prompt);
	stream.pipeTo(responseStream.writable);
	// await stream.pipeTo(
	// 	new WritableStream({
	// 		write(chunk) {
	// 			res.write(chunk);
	// 		},
	// 	}),
	// );

	// signal the end of the response to stop the stream
	// res.end();

	return new Response(responseStream.readable, {
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

// configure this file to use Edge runtime instead of Node
export const config = {
	runtime: 'edge',
};
