import { Box, Flex } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { colors } from '~/common/colors';
import { Footer } from '~/components/layout/footer';
import { NavBar } from '~/components/nav/nav';
import { LeftRunes } from '~/components/runes/left-runes';
import { RightRunes } from '~/components/runes/right-runes';

type ContentWrapperProps = {
	bg: string;
	children: ReactNode;
};

// TODO: have a fallback background color
export const ContentWrapper: FC<ContentWrapperProps> = ({ bg, children }) => (
	<Flex bgColor={colors.spaceBlue} bgImg={bg} h="100vh" bgPos="center" flexDir="column" justifyContent="space-between">
		<NavBar />
		<Flex justifyContent="space-between">
			<LeftRunes />
			<Box as="main">{children}</Box>
			<RightRunes />
		</Flex>
		<Footer />
	</Flex>
);
