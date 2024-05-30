import { Center, Flex, Hide } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { Footer } from '~/components/footer/footer';
import { NavBar } from '~/components/nav/nav';
import { LeftRunes } from '~/components/runes/left-runes';
import { RightRunes } from '~/components/runes/right-runes';

type ContentWrapperProps = {
	children: ReactNode;
};

export const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => (
	<Flex justifyContent="space-between" overflow="auto">
		<Hide breakpoint="(max-width: 75em)">
			<LeftRunes />
		</Hide>
		<Flex h="100dvh" bg="transparent" flexDir="column" pos="relative" zIndex={3} w="100%">
			<NavBar />
			<Center as="main" pos="relative" m="auto" w={{ xxs: '95%', md: '90%', xl: '95%' }}>
				{children}
			</Center>
			<Footer />
		</Flex>
		<Hide breakpoint="(max-width: 75em)">
			<RightRunes />
		</Hide>
	</Flex>
);
