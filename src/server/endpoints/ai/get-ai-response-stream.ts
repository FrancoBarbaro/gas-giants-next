import { createParser, ParsedEvent, ReconnectInterval } from 'eventsource-parser';

export async function getAiResponseStream(prompt: string) {
	// call the OpenAI chat completions API
	const payload = {
		stream: true,
		model: 'gpt-3.5-turbo',
		messages: [
			{
				role: 'system',
				content:
					'You are a helpful assistant that knows everything about our solar system. You should only answer questions related to our solar system and politely reject any other questions. You should only answer with facts and never ask for follow-up questions.',
			},
			{ role: 'user', content: prompt },
		],
	};

	const res = await fetch('https://api.openai.com/v1/chat/completions', {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ''}`,
		},
		method: 'POST',
		body: JSON.stringify(payload),
	});

	// turn the response into a stream
	const stream = new ReadableStream({
		// this gets called when the stream starts
		async start(controller) {
			let counter = 0;
			const encoder = new TextEncoder();
			const decoder = new TextDecoder();

			// callback to parse each event sent by the OpenAI stream response
			const onParse = (event: ParsedEvent | ReconnectInterval) => {
				if (event.type === 'event') {
					const data = event.data;

					// this is what OpenAI sends when the stream is completed
					if (data === '[DONE]') {
						controller.close();
						return;
					}

					// parse the response and set the text into our stream controller
					try {
						const json = JSON.parse(data);
						const text = json.choices[0].delta?.content || '';

						// skips potential empty lines (i.e., "\n\n") sent at the beginning of the OpenAI stream
						if (counter < 2 && (text.match(/\n/) || []).length) {
							return;
						}

						controller.enqueue(encoder.encode(text));
						counter++;
					} catch (err) {
						// TODO: is this all i have to do, or should i return some sort of error?
						controller.error(err);
					}
				}
			};

			// stream response (SSE) from OpenAI may be fragmented into multiple chunks
			// this ensures we properly read chunks and invoke an event for each SSE event stream
			const parser = createParser(onParse);

			// as we get chunks from the OpenAI API event stream, we add them to our stream
			// https://web.dev/streams/#asynchronous-iteration
			for await (const chunk of res.body as any) {
				parser.feed(decoder.decode(chunk));
			}
		},
	});

	return stream;
}
