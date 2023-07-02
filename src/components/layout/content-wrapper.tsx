import { Box, Center, Flex, useMediaQuery } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { Footer } from '~/components/footer/footer';
import { NavBar } from '~/components/nav/nav';
import { LeftRunes } from '~/components/runes/left-runes';
import { RightRunes } from '~/components/runes/right-runes';

type ContentWrapperProps = {
	children: ReactNode;
};

export const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
	// these booleans are based off of the viewport's dimensions
	const [widthSmallerThan1200] = useMediaQuery('(max-width: 75em)');
	const [widthSmallerThan300] = useMediaQuery('(max-width: 20em)');
	const [heightSmallerThan725] = useMediaQuery('(max-height: 45em)');

	return (
		<Flex justifyContent="space-between">
			{!widthSmallerThan1200 && <LeftRunes />}
			<Flex
				h="100vh"
				bg="transparent"
				flexDir="column"
				justifyContent="space-between"
				pos="relative"
				zIndex={3}
				w="100%"
			>
				{widthSmallerThan300 || heightSmallerThan725 ? (
					<>
						<NavBar />
						<Box overflow="auto">
							<Center as="main" pos="relative" m="auto" w="95%">
								{children}
							</Center>
							<Footer />
						</Box>
					</>
				) : (
					<>
						<NavBar />
						<Center as="main" pos="relative" m="auto" w={{ xxs: '95%', md: '90%', xl: '95%' }}>
							{children}
						</Center>
						<Footer />
					</>
				)}
			</Flex>
			{!widthSmallerThan1200 && <RightRunes />}
		</Flex>
	);
};
