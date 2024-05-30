import { Center, Flex, useMediaQuery } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { Footer } from '~/components/footer/footer';
import { NavBar } from '~/components/nav/nav';
import { LeftRunes } from '~/components/runes/left-runes';
import { RightRunes } from '~/components/runes/right-runes';

type ContentWrapperProps = {
	children: ReactNode;
};

export const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
	const [widthSmallerThan75em] = useMediaQuery('(max-width: 75em)');

	return (
		<Flex justifyContent="space-between" overflow="auto" css={{ WebkitOverflowScrolling: 'touch' }}>
			{!widthSmallerThan75em && <LeftRunes />}
			<Flex h="100vh" bg="transparent" flexDir="column" pos="relative" zIndex={3} w="100%">
				<NavBar />
				<Center as="main" pos="relative" m="auto" w={{ xxs: '95%', md: '90%', xl: '95%' }}>
					{children}
				</Center>
				<Footer />
			</Flex>
			{!widthSmallerThan75em && <RightRunes />}
		</Flex>
	);
};
