import axios from 'axios';

// type FailedFirebaseResult = {
// 	success: false;
// 	error: string;
// };

// type SuccessFirebaseResult<T> = {
// 	success: true;
// 	data: T;
// };

// type FirebaseResult<T> = SuccessFirebaseResult<T> | FailedFirebaseResult;

// issue firebase token

const FIREBASE_URL = 'https://gas-giants-api-9e3f4-default-rtdb.firebaseio.com/';
// const FIREBASE_URL = process.env.FIREBASE_API_URL ?? 'https://gas-giants-api-9e3f4-default-rtdb.firebaseio.com/';

/**
 * Client description
 */
export const firebaseAxiosClient = axios.create({
	baseURL: FIREBASE_URL,
	responseType: 'json',
});

/**
 * Fetcher description
 */
export const firebaseApiFetcher = () => {};

// TODO: probably don't need this one
// TODO: add todo highlighting for NOTE: and IDEA:

/**
 * Poster description
 */
// export const firebaseApiPoster = () => {};
