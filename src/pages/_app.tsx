import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
// import { SWRConfig } from 'swr';
import { theme } from '../theme';
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
