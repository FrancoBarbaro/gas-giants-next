import { Flex } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { colors } from '~/theme/colors';

type FooterContainerProps = {
	children: ReactNode;
};

export const FooterContainer: FC<FooterContainerProps> = ({ children }) => (
	<Flex
		as="footer"
		bg={colors.spaceGray}
		border={`2px solid ${colors.darkGray}`}
		borderRadius={15}
		w={{ xxs: '95%', md: '90%', lg: '85%' }}
		mx="auto"
		mt={{ xxs: 6, sm: 8, md: 12, lg: 14 }}
		mb={{ xxs: 2, sm: 4, md: 8, lg: 10 }}
		color={colors.lightGray}
		justifyContent="space-around"
		alignItems="center"
		fontSize={{ xxs: '8px', xs: '10px', sm: 'sm', md: 'md', lg: 'lg', xl: 'lg' }}
		flexDir={{ xxs: 'column', sm: 'row' }}
	>
		{children}
	</Flex>
);
