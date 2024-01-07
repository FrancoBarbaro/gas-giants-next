import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import { NavButton } from './nav-button';

export const NavBar: FC = () => (
	<Flex
		as="nav"
		w={{ xxs: '95%', md: '90%', lg: '85%' }}
		mx="auto"
		pt={{ xxs: 4, xs: 5, sm: 6, xxl: 14 }}
		pb={{ xxs: 7, xs: 8, sm: 12, lg: 14 }}
		justifyContent="space-between"
	>
		<NavButton path="/home">Home</NavButton>
		<NavButton path="/jupiter">Jupiter</NavButton>
		<NavButton path="/saturn">Saturn</NavButton>
		<NavButton path="/uranus">Uranus</NavButton>
		<NavButton path="/neptune">Neptune</NavButton>
	</Flex>
);
