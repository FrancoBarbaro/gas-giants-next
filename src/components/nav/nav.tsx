import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import { NavButton } from './nav-button';

// TODO: if the screen width gets small enough, make this have a width of 100% or 100vh
export const NavBar: FC = () => (
	<Flex as="nav" fontSize={4} w="75%" maxW="60rem" mx="auto" py={12} justifyContent="space-between" zIndex={2}>
		<NavButton path="/home">Home</NavButton>
		<NavButton path="/jupiter">Jupiter</NavButton>
		<NavButton path="/saturn">Saturn</NavButton>
		<NavButton path="/uranus">Uranus</NavButton>
		<NavButton path="/neptune">Neptune</NavButton>
	</Flex>
);
