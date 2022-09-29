import { Center, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { colors } from '~/common/colors';
import { PageLink } from '~/components/page-link';

export const Footer: FC = () => {
	const breakpoints = {
		sm: '95%',
		md: '90%',
		xl: '85%',
	};

	return (
		<Center
			as="footer"
			bg={colors.spaceGray}
			border={`2px solid ${colors.darkGray}`}
			borderRadius={15}
			w={breakpoints}
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
};
