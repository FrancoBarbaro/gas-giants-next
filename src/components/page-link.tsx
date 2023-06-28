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
	<NextLink href={href} passHref>
		<ChakraLink
			variant={variant}
			// TODO: none of the blurs seem to be working anymore... windows problem?
			// for more context: on mac, blur is working on click, not on drag. check again on windows
			onClick={(event) => {
				event.currentTarget.blur();
			}}
			// TODO: see if an onTouch blur needs to be added for mobile support
			tabIndex={tabIndex}
		>
			{children}
		</ChakraLink>
	</NextLink>
);
