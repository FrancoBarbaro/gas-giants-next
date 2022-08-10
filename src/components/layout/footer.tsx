import { Center, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { colors } from '~/common/colors';
import { Link } from '~/components/link';

export const Footer: FC = () => (
	<Center
		as="footer"
		bg={colors.spaceGray}
		border={`2px solid ${colors.darkGray}`}
		borderRadius={15}
		w="75%"
		maxW="60rem"
		mx="auto"
		my={12}
		color={colors.lightGray}
		zIndex={2}
	>
		<Center width="50%">
			<Text as="h3">&copy; Franco Barbaro 2022. All Rights Reserved.</Text>
		</Center>
		<Center width="50%">
			<Link href="/feedback" variant="gradient-underline">
				Feedback
			</Link>
		</Center>
	</Center>
);
