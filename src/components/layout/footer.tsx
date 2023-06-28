import { Flex, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { PageLink } from '~/components/page-link';
import { colors } from '~/theme/colors';

export const Footer: FC = () => (
	<Flex
		as="footer"
		bg={colors.spaceGray}
		border={`2px solid ${colors.darkGray}`}
		borderRadius={15}
		w={{ base: '95%', md: '90%', lg: '85%' }}
		mx="auto"
		my={12}
		color={colors.lightGray}
		justifyContent="space-around"
		alignItems="center"
		fontSize={{ base: '8px', xs: '10px', sm: 'sm', md: 'md', lg: 'lg', xl: 'lg' }}
		flexDir={{ base: 'column', sm: 'row' }}
	>
		<Text textAlign="center">&copy; Franco Barbaro 2022. All Rights Reserved.</Text>
		<PageLink href="/feedback" variant="gradient-underline">
			Feedback
		</PageLink>
	</Flex>
);
