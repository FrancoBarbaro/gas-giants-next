import { AppCheck, getToken, initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { auth, firebaseApp } from '~/clients/firebase/firebase-app';

type ContextType = {
	authToken: string | null;
	appCheckToken: string | null;
	userId: string | null;
};

type FirebaseContextProviderProps = {
	children: ReactNode;
};

interface WindowWithDebugToken extends Window {
	FIREBASE_APPCHECK_DEBUG_TOKEN: boolean | string | undefined;
}
declare var window: WindowWithDebugToken;

let appCheck: AppCheck | null = null;
if (typeof window !== 'undefined') {
	if (process.env.NODE_ENV === 'development') {
		window.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
	}

	appCheck = initializeAppCheck(firebaseApp, {
		provider: new ReCaptchaV3Provider('6Lfx5TUnAAAAAKmmh38KCTmAyjVwky-pLONOj0ya'),
		isTokenAutoRefreshEnabled: true,
	});
}

export const FirebaseContext = createContext<ContextType>({ authToken: null, appCheckToken: null, userId: null });

export const FirebaseContextProvider: FC<FirebaseContextProviderProps> = ({ children }) => {
	const [userId, setUserId] = useState<string | null>(null);
	const [authToken, setAuthToken] = useState<string | null>(null);
	const [appCheckToken, setAppCheckToken] = useState<string | null>(null);

	onAuthStateChanged(auth, async (user) => {
		const newAuthToken = (await user?.getIdToken()) || null;
		const newUserId = user?.uid || null;
		setAuthToken(newAuthToken);
		setUserId(newUserId);
	});

	useEffect(() => {
		(async () => {
			if (appCheck === null) {
				setAppCheckToken(null);
				return;
			}

			const newAppCheckToken = (await getToken(appCheck)).token;
			setAppCheckToken(newAppCheckToken);

			await signInAnonymously(auth);
		})();
	}, []);

	return <FirebaseContext.Provider value={{ authToken, appCheckToken, userId }}>{children}</FirebaseContext.Provider>;
};
