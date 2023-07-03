// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBkB2N4aNMrUGrh5mjMbAxtL3Faqo_ct_I',
	authDomain: 'gas-giants-api-9e3f4.firebaseapp.com',
	databaseURL: 'https://gas-giants-api-9e3f4-default-rtdb.firebaseio.com',
	projectId: 'gas-giants-api-9e3f4',
	storageBucket: 'gas-giants-api-9e3f4.appspot.com',
	messagingSenderId: '914718213413',
	appId: '1:914718213413:web:c37e5061021ab34f4dc6cc',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
	return app;
};
