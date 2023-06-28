import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { FC, ReactNode } from 'react';

type NavButtonProps = {
	path: string;
	children: ReactNode;
};

export const NavButton: FC<NavButtonProps> = ({ path, children }) => (
	<NextLink href={path}>
		<Button
			variant="nav-button"
			px={{ base: 2, sm: 2, md: 6, lg: 6, xl: 6 }}
			py={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4 }}
			borderRadius={{ base: 7, sm: 9, md: 11, lg: 11, xl: 14 }}
			fontSize={{ base: '8px', xs: '10px', sm: 'sm', md: 'md', lg: 'lg', xl: 'lg' }}
			
			onClick={(event) => {
				event.currentTarget.blur();
			}}
		>
			{children}
		</Button>
	</NextLink>
);
