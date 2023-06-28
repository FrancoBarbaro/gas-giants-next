import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import { PageLink } from '~/components/page-link';

export const LeftRunes: FC = () => (
	<Flex
		flexDir="column"
		h="50vh"
		justifyContent="space-between"
		my="auto"
		mx={{ base: 4, lg: 8, xl: 16, xxl: 28 }}
		zIndex={3}
	>
		<PageLink href="/jupiter" variant="rune" tabIndex={-1}>
			&#9795;
		</PageLink>
		<PageLink href="/saturn" variant="rune" tabIndex={-1}>
			&#9796;
		</PageLink>
	</Flex>
);
