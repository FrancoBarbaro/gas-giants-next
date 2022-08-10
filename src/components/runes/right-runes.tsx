import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import { Link } from '~/components/link';

export const RightRunes: FC = () => (
	<Flex as="aside" flexDir="column" h="50vh" justifyContent="space-between" zIndex={2}>
		<Link href="/uranus" variant="rune">
			&#9954;
		</Link>
		<Link href="/neptune" variant="rune">
			&#9798;
		</Link>
	</Flex>
);
