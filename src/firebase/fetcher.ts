import axios from 'axios';

type FailedFirebaseResult = {
	success: false;
	error: string;
};

type SuccessFirebaseResult<T> = {
	success: true;
	data: T;
};

type FirebaseResult<T> = SuccessFirebaseResult<T> | FailedFirebaseResult;

const FIREBASE_URL = 'https://gas-giants-api-9e3f4-default-rtdb.firebaseio.com/';

/**
 * Client description
 */
const firebaseAxiosClient = axios.create({
	baseURL: FIREBASE_URL,
	responseType: 'json',
});

// firebaseAxiosClient.interceptors.request.use(async (request) => {
// 	const token = await gandalfBachTokenProvider.getValidToken();

// 	request.headers = {
// 		...(request.headers ?? {}),
// 		Authorization: `Bearer ${token}`,
// 	};

// 	return request;
// });

// export { firebaseAxiosClient };

/**
 * Fetcher description
 */
export const firebaseApiFetcher = async <T = unknown>(url: string): Promise<FirebaseResult<T>> => {
	return firebaseAxiosClient
		.get(`${url}.json`)
		.then((res) => ({ success: true, data: res.data } as SuccessFirebaseResult<T>))
		.catch((error: Error) => ({ success: false, error: error.message } as FailedFirebaseResult));
};
