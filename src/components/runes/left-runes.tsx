import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import { PageLink } from '~/components/page-link';

// TODO: find out why the runes are changing height depending on the main div

type LeftRunesProps = {
	mx: number;
};

export const LeftRunes: FC<LeftRunesProps> = ({ mx }) => (
	<Flex as="aside" flexDir="column" h="50vh" justifyContent="space-between" my="auto" mx={mx}>
		<PageLink href="/jupiter" variant="rune">
			&#9795;
		</PageLink>
		<PageLink href="/saturn" variant="rune">
			&#9796;
		</PageLink>
	</Flex>
);
