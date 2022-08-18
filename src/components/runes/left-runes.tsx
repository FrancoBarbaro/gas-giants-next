import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import { PageLink } from '~/components/page-link';

export const LeftRunes: FC = () => (
	<Flex as="aside" flexDir="column" h="50vh" justifyContent="space-between">
		<PageLink href="/jupiter" variant="rune">
			&#9795;
		</PageLink>
		<PageLink href="/saturn" variant="rune">
			&#9796;
		</PageLink>
	</Flex>
);
