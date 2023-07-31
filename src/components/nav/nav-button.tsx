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
			onClick={(event) => event.currentTarget.blur()}
			onTouchStartCapture={(event) => event.currentTarget.blur()}
		>
			{children}
		</Button>
	</NextLink>
);
