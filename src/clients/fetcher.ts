import axios from 'axios';

// export const fetcher = async (url: string) => {
// 	const res = await axios.get(url);

// 	if (res.status !== 200) {
// 		throw new Error('An error occurred while fetching the data.');
// 	}

// 	return res.data;
// };

export const fetcher = async (url: RequestInfo) => {
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error('An error occurred while fetching the data!');
	}

	return res.json();
};
