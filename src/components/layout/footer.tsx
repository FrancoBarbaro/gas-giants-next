import { Center, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { PageLink } from '~/components/page-link';
import { colors } from '~/theme/colors';

export const Footer: FC = () => (
	<Center
		as="footer"
		bg={colors.spaceGray}
		border={`2px solid ${colors.darkGray}`}
		borderRadius={15}
		w={['95%', '95%', '90%', '85%']}
		maxW="75rem"
		mx="auto"
		my={12}
		color={colors.lightGray}
	>
		<Center width="50%">
			<Text>&copy; Franco Barbaro 2022. All Rights Reserved.</Text>
		</Center>
		<Center width="50%">
			<PageLink href="/feedback" variant="gradient-underline">
				Feedback
			</PageLink>
		</Center>
	</Center>
);
