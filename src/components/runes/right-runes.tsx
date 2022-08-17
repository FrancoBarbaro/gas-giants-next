import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import { Link } from '~/components/link';

// TODO: if the device is too small, make these not show so more space is saved for the main content
export const RightRunes: FC = () => (
	<Flex as="aside" flexDir="column" h="50vh" justifyContent="space-between">
		<Link href="/uranus" variant="rune">
			&#9954;
		</Link>
		<Link href="/neptune" variant="rune">
			&#9798;
		</Link>
	</Flex>
);
