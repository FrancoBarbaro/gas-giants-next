import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/patua-one/400.css';
import '@fontsource/quicksand/600.css';
import '@fontsource/space-mono/400.css';
import '@fontsource/varela-round/400.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { Background } from '~/components/layout/background';
import { ContentWrapper } from '~/components/layout/content-wrapper';
import { fetcher } from '~/firebase/fetcher';
import '../styles/globals.css';
import { theme } from '../theme';

const App = ({ Component, pageProps, router }: AppProps) => (
	<SWRConfig
		value={{
			fetcher,
			errorRetryCount: 2,
		}}
	>
		<ChakraProvider theme={theme}>
			<ContentWrapper>
				<Component {...pageProps} />
			</ContentWrapper>
			<Background currentPath={router.pathname} />
		</ChakraProvider>
	</SWRConfig>
);

export default App;
