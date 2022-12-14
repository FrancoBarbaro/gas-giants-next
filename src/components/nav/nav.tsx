import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import { NavButton } from './nav-button';

export const NavBar: FC = () => (
	<Flex
		as="nav"
		fontSize={4}
		w={['95%', '95%', '90%', '85%', '75%']}
		maxW="75rem"
		mx="auto"
		my={12}
		justifyContent="space-between"
	>
		<NavButton path="/home">Home</NavButton>
		<NavButton path="/jupiter">Jupiter</NavButton>
		<NavButton path="/saturn">Saturn</NavButton>
		<NavButton path="/uranus">Uranus</NavButton>
		<NavButton path="/neptune">Neptune</NavButton>
	</Flex>
);
