import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import { PageLink } from '~/components/page-link';

type LeftRunesProps = {
	mx: number;
};

// TODO: remove this comment after testing
// mx={[16, 16, 16, 8, 4, 0]}

export const LeftRunes: FC<LeftRunesProps> = ({ mx }) => (
	<Flex as="nav" flexDir="column" h="50vh" justifyContent="space-between" my="auto" mx={mx} zIndex={3}>
		<PageLink href="/jupiter" variant="rune">
			&#9795;
		</PageLink>
		<PageLink href="/saturn" variant="rune">
			&#9796;
		</PageLink>
	</Flex>
);
