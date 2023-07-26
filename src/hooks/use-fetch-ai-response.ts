import { useContext, useState } from 'react';
import { FirebaseContext } from '~/context/firebase-context';

export const useFetchAiResponse = () => {
	const [answer, setAnswer] = useState('');
	const { authToken, appCheckToken } = useContext(FirebaseContext);

	const fetchAiResponse = async (prompt: string | undefined) => {
		if (!prompt || !authToken || !appCheckToken) {
			// TODO: how to handle this error
			// throw new Error('Request did not include the required credentials!');
			return;
		}

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
			// TODO: how to handle this error
			// throw new Error(res.statusText);
			return;
		}

		// This data is a ReadableStream
		const data = res.body;
		if (!data) {
			return;
		}

		// read the output stream from the response
		const reader = data.getReader();
		const decoder = new TextDecoder();
		let finished = false;
		let responseText = '';
		while (!finished) {
			const { value, done } = await reader.read();
			finished = done;
			responseText += decoder.decode(value);
			setAnswer(responseText);
		}
	};

	return { fetchAiResponse, answer };
};
