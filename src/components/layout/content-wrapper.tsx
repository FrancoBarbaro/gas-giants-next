import { Center, Flex, useMediaQuery } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { Footer } from '~/components/layout/footer';
import { NavBar } from '~/components/nav/nav';
import { LeftRunes } from '~/components/runes/left-runes';
import { RightRunes } from '~/components/runes/right-runes';

type ContentWrapperProps = {
	children: ReactNode;
};

export const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
	const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

	return (
		<Flex h="100vh" bg="transparent" flexDir="column" justifyContent="space-between" pos="relative" zIndex={2}>
			<NavBar />
			{isSmallerThan768 ? (
				<Center as="main" w="90%" mx="auto" pos="relative" zIndex={2}>
					{children}
				</Center>
			) : (
				<Flex justifyContent="space-between">
					<LeftRunes />
					<Center as="main" w="75%" maxW="60rem" pos="relative" zIndex={2}>
						{children}
					</Center>
					<RightRunes />
				</Flex>
			)}
			<Footer />
		</Flex>
	);
};
