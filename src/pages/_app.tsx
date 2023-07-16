import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/patua-one/400.css';
import '@fontsource/quicksand/600.css';
import '@fontsource/space-mono/400.css';
import '@fontsource/varela-round/400.css';
import { signInAnonymously } from 'firebase/auth';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { auth } from '~/clients/firebase/firebase-app';
import { Background } from '~/components/layout/background';
import { ContentWrapper } from '~/components/layout/content-wrapper';
import { FirebaseAuthContextProvider } from '~/context/firebase-auth-context';
import '../styles/globals.css';
import { theme } from '../theme';

const App = ({ Component, pageProps, router }: AppProps) => {
	useEffect(() => {
		(async () => await signInAnonymously(auth))();
	}, []);

	return (
		<ChakraProvider theme={theme}>
			<ContentWrapper>
				<FirebaseAuthContextProvider>
					<Component {...pageProps} />
				</FirebaseAuthContextProvider>
			</ContentWrapper>
			<Background currentPath={router.pathname} />
		</ChakraProvider>
	);
};

export default App;
