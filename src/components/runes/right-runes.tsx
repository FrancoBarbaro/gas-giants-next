import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import { PageLink } from '~/components/page-link';

type RightRunesProps = {
	mx: number;
};

export const RightRunes: FC<RightRunesProps> = ({ mx }) => (
	<Flex as="nav" flexDir="column" h="50vh" justifyContent="space-between" my="auto" mx={mx} zIndex={3}>
		<PageLink href="/uranus" variant="rune" tabIndex={-1}>
			&#9954;
		</PageLink>
		<PageLink href="/neptune" variant="rune" tabIndex={-1}>
			&#9798;
		</PageLink>
	</Flex>
);
