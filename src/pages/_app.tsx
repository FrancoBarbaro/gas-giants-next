import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/patua-one/400.css';
import '@fontsource/space-mono/400.css';
import '@fontsource/varela-round/400.css';
import type { AppProps } from 'next/app';
import { Background } from '~/components/layout/background';
import { ContentWrapper } from '~/components/layout/content-wrapper';
import '../styles/globals.css';
import { theme } from '../theme';
// import { SWRConfig } from 'swr';
// import { fetcher } from '~/common/clients/fetcher';

// TODO: add this
// <SWRConfig
// 	value={{
// 		fetcher,
// 		errorRetryCount: 2,
// 	}}
// >

const App = ({ Component, pageProps, router }: AppProps) => (
	<ChakraProvider theme={theme}>
		<ContentWrapper>
			<Component {...pageProps} />
		</ContentWrapper>
		<Background currentPath={router.pathname} />
	</ChakraProvider>
);

export default App;
