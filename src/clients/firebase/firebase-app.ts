import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBkB2N4aNMrUGrh5mjMbAxtL3Faqo_ct_I',
	authDomain: 'gas-giants-api-9e3f4.firebaseapp.com',
	databaseURL: 'https://gas-giants-api-9e3f4-default-rtdb.firebaseio.com',
	projectId: 'gas-giants-api-9e3f4',
	storageBucket: 'gas-giants-api-9e3f4.appspot.com',
	messagingSenderId: '914718213413',
	appId: '1:914718213413:web:c37e5061021ab34f4dc6cc',
};

// initialize firebase
export const firebaseApp = initializeApp(firebaseConfig);

// initialize and export auth object
export const auth = getAuth(firebaseApp);
