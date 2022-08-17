import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import { NavButton } from './nav-button';

// TODO: if the screen width gets small enough, make this have a width of 100% or 100vh
// actually the better way to do the above might be to make the margin dynamic. how do we do that with auto...
// chakra has funcitonality for this dynamic margin concept. pass an array to mx
// do the same exact thing with the footer too
export const NavBar: FC = () => (
	<Flex
		as="nav"
		fontSize={4}
		w={['95%', '95%', '90%', '85%', '75%']}
		maxW="60rem"
		mx="auto"
		py={12}
		justifyContent="space-between"
		zIndex={2}
	>
		<NavButton path="/home">Home</NavButton>
		<NavButton path="/jupiter">Jupiter</NavButton>
		<NavButton path="/saturn">Saturn</NavButton>
		<NavButton path="/uranus">Uranus</NavButton>
		<NavButton path="/neptune">Neptune</NavButton>
	</Flex>
);
