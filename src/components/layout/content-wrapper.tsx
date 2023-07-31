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
	// TODO: change this to make the nav be a hamburger as the screen gets very small
	const [widthSmallerThan75] = useMediaQuery('(max-width: 75em)');

	return (
		<Flex justifyContent="space-between" overflow="auto">
			{!widthSmallerThan75 && <LeftRunes />}
			<Flex
				h="100vh"
				bg="transparent"
				flexDir="column"
				justifyContent="space-between"
				pos="relative"
				zIndex={3}
				w="100%"
			>
				<NavBar />
				<Center
					as="main"
					pos="relative"
					m="auto"
					w={{ xxs: '95%', md: '90%', xl: '95%' }}
					flexDir={{ xxs: 'column', md: 'row' }}
				>
					{children}
				</Center>
				<Footer />
			</Flex>
			{!widthSmallerThan75 && <RightRunes />}
		</Flex>
	);
};
