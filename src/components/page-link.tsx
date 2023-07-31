import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { FC, ReactNode } from 'react';

type PageLinkProps = {
	href: string;
	children: ReactNode;
	variant?: string;
	tabIndex?: number;
};

export const PageLink: FC<PageLinkProps> = ({ href, children, variant, tabIndex }) => (
	<NextLink href={href} legacyBehavior passHref>
		<ChakraLink variant={variant} tabIndex={tabIndex} onClick={(event) => event.currentTarget.blur()}>
			{children}
		</ChakraLink>
	</NextLink>
);
