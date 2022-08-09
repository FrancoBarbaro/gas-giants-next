import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { FC, ReactNode } from 'react';

type LinkProps = {
	href: string;
	children: ReactNode;
	variant?: string;
};

export const Link: FC<LinkProps> = ({ href, children, variant }) => (
	<NextLink href={href} passHref>
		<ChakraLink variant={variant}>{children}</ChakraLink>
	</NextLink>
);
