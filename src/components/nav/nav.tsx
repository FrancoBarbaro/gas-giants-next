import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import { NavButton } from './nav-button';

export const NavBar: FC = () => {
	const breakpoints = {
		sm: '95%',
		md: '90%',
		xl: '85%',
	};

	return (
		<Flex as="nav" fontSize={4} w={breakpoints} maxW="75rem" mx="auto" my={12} justifyContent="space-between">
			<NavButton path="/home">Home</NavButton>
			<NavButton path="/jupiter">Jupiter</NavButton>
			<NavButton path="/saturn">Saturn</NavButton>
			<NavButton path="/uranus">Uranus</NavButton>
			<NavButton path="/neptune">Neptune</NavButton>
		</Flex>
	);
};
