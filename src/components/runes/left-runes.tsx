import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import { Link } from '~/components/link';

export const LeftRunes: FC = () => (
	<Flex as="aside" flexDir="column" h="50vh" justifyContent="space-between">
		<Link href="/jupiter" variant="rune">
			&#9795;
		</Link>
		<Link href="/saturn" variant="rune">
			&#9796;
		</Link>
	</Flex>
);
