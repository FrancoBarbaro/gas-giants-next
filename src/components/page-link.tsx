import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { FC, ReactNode } from 'react';

type LinkProps = {
	href: string;
	children: ReactNode;
	variant?: string;
};

// TODO: make this component flexible to more props, especially 'target', maybe just take 'props' and spread it. Chakra probably has a type for its Link component
export const PageLink: FC<LinkProps> = ({ href, children, variant }) => (
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
