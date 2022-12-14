import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { FC, ReactNode } from 'react';

type PageLinkProps = {
	href: string;
	children: ReactNode;
	variant?: string;
};

export const PageLink: FC<PageLinkProps> = ({ href, children, variant }) => (
	<NextLink href={href} passHref>
		<ChakraLink
			variant={variant}
			// TODO: none of the blurs seem to be working anymore... windows problem?
			onClick={(event) => {
				event.currentTarget.blur();
			}}
		>
			{children}
		</ChakraLink>
	</NextLink>
);
