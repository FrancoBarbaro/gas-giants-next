import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { FC, MouseEvent, ReactNode, TouchEvent } from 'react';

type PageLinkProps = {
	href: string;
	children: ReactNode;
	variant?: string;
	tabIndex?: number;
};

const unfocusButton = (event: TouchEvent<HTMLAnchorElement>) => {
	event.currentTarget.blur();
};

export const PageLink: FC<PageLinkProps> = ({ href, children, variant, tabIndex }) => (
	<NextLink href={href} legacyBehavior passHref>
		<ChakraLink
			variant={variant}
			tabIndex={tabIndex}
			// onClick={unfocusButton}
			// TODO: see if an onTouch blur needs to be added for mobile support
			onTouchEnd={unfocusButton}
			onTouchCancel={unfocusButton}
		>
			{children}
		</ChakraLink>
	</NextLink>
);
