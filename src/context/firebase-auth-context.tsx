import { onAuthStateChanged, User } from 'firebase/auth';
import { createContext, FC, ReactNode, useState } from 'react';
import { auth } from '~/clients/firebase/firebase-app';

export type UserState = User | null;

type FirebaseAuthContextProviderProps = {
	children: ReactNode;
};

export const FirebaseAuthContext = createContext<UserState>(null);

export const FirebaseAuthContextProvider: FC<FirebaseAuthContextProviderProps> = ({ children }) => {
	const [user, setUser] = useState<UserState>(null);
	onAuthStateChanged(auth, setUser);
	return <FirebaseAuthContext.Provider value={user}>{children}</FirebaseAuthContext.Provider>;
};
