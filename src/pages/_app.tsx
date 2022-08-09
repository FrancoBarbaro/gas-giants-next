import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/patua-one/400.css';
import '@fontsource/space-mono/400.css';
import '@fontsource/varela-round/400.css';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { theme } from '../theme';
// import { SWRConfig } from 'swr';
// import { fetcher } from '~/common/clients/fetcher';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		// TODO: add this
		// <SWRConfig
		// 	value={{
		// 		fetcher,
		// 		errorRetryCount: 2,
		// 	}}
		// >
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
		// </SWRConfig>
	);
};

export default App;
