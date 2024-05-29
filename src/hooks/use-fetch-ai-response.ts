import { useContext, useState } from 'react';
import { FirebaseContext } from '~/context/firebase-context';

const initialMessage = `Hi there! I'm the Gas Giants AI. Ask me anything about Jupiter, Saturn, Uranus, Neptune, or any space-related topic. For example, you could ask "What is a gas giant?" or "Tell me about Saturn's rings."`;

export const useFetchAiResponse = () => {
	const [answer, setAnswer] = useState(initialMessage);
	const [isReady, setIsReady] = useState(true);
	const { authToken, appCheckToken } = useContext(FirebaseContext);

	const fetchAiResponse = async (prompt: string | undefined) => {
		if (!prompt || !authToken || !appCheckToken) {
			throw new Error('Request did not include the required credentials!');
		}

		setIsReady(false);

		// call nextjs backend
		const res = await fetch('/api/ai/stream-response', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${authToken}`,
				'X-Firebase-AppCheck': appCheckToken,
			},
			body: JSON.stringify({ prompt }),
		});

		if (!res.ok) {
			setIsReady(true);
			throw new Error(res.statusText);
		}

		// This data is a ReadableStream
		const data = res.body;
		if (!data) {
			setIsReady(true);
			return;
		}

		// read the output stream from the response
		const reader = data.getReader();
		const decoder = new TextDecoder();
		let responseText = '';
		let isDone = false;
		while (!isDone) {
			const { value, done } = await reader.read();
			responseText += decoder.decode(value);
			setAnswer(responseText);
			isDone = done;
		}
		setIsReady(true);
	};

	return { fetchAiResponse, answer, isReady };
};
