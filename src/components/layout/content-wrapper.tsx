import { Flex } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { Footer } from '~/components/layout/footer';
import { MainContent } from '~/components/layout/main-content';
import { NavBar } from '~/components/nav/nav';

type ContentWrapperProps = {
	children: ReactNode;
};

export const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => (
	<Flex h="100vh" bg="transparent" flexDir="column" justifyContent="space-between" pos="relative" zIndex={3}>
		<NavBar />
		<MainContent>{children}</MainContent>
		<Footer />
	</Flex>
);
