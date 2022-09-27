import { Center, Flex, useMediaQuery } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { Footer } from '~/components/layout/footer';
import { NavBar } from '~/components/nav/nav';
import { LeftRunes } from '~/components/runes/left-runes';
import { RightRunes } from '~/components/runes/right-runes';

type ContentWrapperProps = {
	children: ReactNode;
};

export const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
	const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)');
	const [isSmallerThan1300] = useMediaQuery('(max-width: 1300px)');
	const [isSmallerThan1400] = useMediaQuery('(max-width: 1400px)');

	let runeMarginX = 16;

	if (isSmallerThan1300) {
		runeMarginX = 8;
	} else if (isSmallerThan1400) {
		runeMarginX = 4;
	}

	return (
		<Flex justifyContent="space-between">
			{!isSmallerThan1200 && <LeftRunes mx={runeMarginX} />}
			<Flex
				h="100vh"
				bg="transparent"
				flexDir="column"
				justifyContent="space-between"
				pos="relative"
				zIndex={3}
				w="full"
			>
				<NavBar />
				<Center as="main" w={['95%', '95%', '90%', '85%', '75%']} maxW="60rem" pos="relative" m="auto">
					{children}
				</Center>
				<Footer />
			</Flex>
			{!isSmallerThan1200 && <RightRunes mx={runeMarginX} />}
		</Flex>
	);
};
