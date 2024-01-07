import { Box, Flex } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { colors } from '~/theme/colors';

type FooterContainerProps = {
	children: ReactNode;
};

export const FooterContainer: FC<FooterContainerProps> = ({ children }) => (
	<Box
		w={{ xxs: '95%', md: '90%', lg: '85%' }}
		pt={{ xxs: 8, sm: 12, lg: 14 }}
		pb={{ xxs: 5, sm: 6, xxl: 14 }}
		mx="auto"
	>
		<Flex
			as="footer"
			bg={colors.spaceGray}
			border={`2px solid ${colors.darkGray}`}
			borderRadius="full"
			w="100%"
			color={colors.lightGray}
			justifyContent="space-around"
			alignItems="center"
			fontSize={{ xxs: '8px', xs: '10px', sm: 'sm', md: 'md', lg: 'lg', xxl: '2xl' }}
			flexDir={{ xxs: 'column', sm: 'row' }}
		>
			{children}
		</Flex>
	</Box>
);
