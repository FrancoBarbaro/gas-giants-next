import { Center, Flex, Text } from '@chakra-ui/react';
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
	>
		<Flex width="50%" justifyContent="center">
			<Text as="h3">&copy; Franco Barbaro 2022. All Rights Reserved.</Text>
		</Flex>
		<Flex width="50%" justifyContent="center">
			<Link href="/feedback" variant="gradient-underline">
				Feedback
			</Link>
		</Flex>
	</Center>
);
