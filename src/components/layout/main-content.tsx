import { Center, Flex, useMediaQuery } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { LeftRunes } from '~/components/runes/left-runes';
import { RightRunes } from '~/components/runes/right-runes';

type MainContentProps = {
	children: ReactNode;
};

export const MainContent: FC<MainContentProps> = ({ children }) => {
	const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
	const [isSmallerThan992] = useMediaQuery('(max-width: 992px)');
	const [isSmallerThan1025] = useMediaQuery('(max-width: 1200px)');

	let width = '75%';
	let justifyContent = 'space-between';
	let runeMarginX = 16;

	if (isSmallerThan768) {
		width = '95%';
		justifyContent = 'center';
	} else if (isSmallerThan992) {
		width = '90%';
		justifyContent = 'center';
	} else if (isSmallerThan1025) {
		runeMarginX = 8;
	}

	return (
		<Flex justifyContent={justifyContent}>
			{!isSmallerThan992 && <LeftRunes mx={runeMarginX} />}
			<Center as="main" w={width} maxW="60rem" pos="relative">
				{children}
			</Center>
			{!isSmallerThan992 && <RightRunes mx={runeMarginX} />}
		</Flex>
	);
};
