import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import { NavButton } from './nav-button';

export const NavBar: FC = () => (
	<Flex
		as="nav"
		w={{ xxs: '95%', md: '90%', lg: '85%' }}
		mx="auto"
		mt={{ xxs: 2, sm: 4, md: 8, lg: 10 }}
		mb={{ xxs: 6, sm: 8, md: 12, lg: 14 }}
		justifyContent="space-between"
	>
		<NavButton path="/home">Home</NavButton>
		<NavButton path="/jupiter">Jupiter</NavButton>
		<NavButton path="/saturn">Saturn</NavButton>
		<NavButton path="/uranus">Uranus</NavButton>
		<NavButton path="/neptune">Neptune</NavButton>
	</Flex>
);
