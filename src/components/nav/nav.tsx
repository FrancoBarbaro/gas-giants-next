import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import { NavButton } from './nav-button';

export const NavBar: FC = () => (
	<Flex as="nav" fontSize={4} w="75%" maxW="60rem" mx="auto" py={12} justifyContent="space-between">
		<NavButton path="/">Home</NavButton>
		<NavButton path="/jupiter">Jupiter</NavButton>
		<NavButton path="/saturn">Saturn</NavButton>
		<NavButton path="/uranus">Uranus</NavButton>
		<NavButton path="/neptune">Neptune</NavButton>
	</Flex>
);