import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/patua-one/400.css';
import '@fontsource/quicksand/600.css';
import '@fontsource/space-mono/400.css';
import '@fontsource/varela-round/400.css';
import type { AppProps } from 'next/app';
import { Background } from '~/components/background/background';
import { ContentWrapper } from '~/components/layout/content-wrapper';
import { FirebaseContextProvider } from '~/context/firebase-context';
import '../styles/globals.css';
import { theme } from '../theme';

// TODO: add server side rendering
const App = ({ Component, pageProps }: AppProps) => (
	<ChakraProvider theme={theme}>
		<ContentWrapper>
			<FirebaseContextProvider>
				<Component {...pageProps} />
			</FirebaseContextProvider>
		</ContentWrapper>
		<Background />
	</ChakraProvider>
);

export default App;
