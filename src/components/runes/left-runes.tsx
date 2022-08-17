import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import { Link } from '~/components/link';

// TODO: if the device is too small, make these not show so more space is saved for the main content
export const LeftRunes: FC = () => (
	<Flex as="aside" flexDir="column" h="50vh" justifyContent="space-between" zIndex={2}>
		<Link href="/jupiter" variant="rune">
			&#9795;
		</Link>
		<Link href="/saturn" variant="rune">
			&#9796;
		</Link>
	</Flex>
);
