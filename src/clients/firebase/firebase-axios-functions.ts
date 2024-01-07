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

/**
 * Fetcher description
 */
export const firebaseApiFetcher = async <T = unknown>(
	url: string,
	authToken: string,
	appCheckToken: string,
): Promise<FirebaseResult<T>> => {
	return firebaseAxiosClient
		.get(`${url}.json?auth=${authToken}`, { headers: { 'X-Firebase-AppCheck': appCheckToken } })
		.then((res) => ({ success: true, data: res.data } as SuccessFirebaseResult<T>))
		.catch((error: Error) => ({ success: false, error: error.message } as FailedFirebaseResult));
};
