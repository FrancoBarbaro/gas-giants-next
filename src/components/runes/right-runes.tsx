import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import { PageLink } from '~/components/page-link';

type RightRunesProps = {
	mx: number;
};

export const RightRunes: FC<RightRunesProps> = ({ mx }) => (
	<Flex as="aside" flexDir="column" h="50vh" justifyContent="space-between" my="auto" mx={mx}>
		<PageLink href="/uranus" variant="rune">
			&#9954;
		</PageLink>
		<PageLink href="/neptune" variant="rune">
			&#9798;
		</PageLink>
	</Flex>
);
