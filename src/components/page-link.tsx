import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { FC, ReactNode } from 'react';

type PageLinkProps = {
	href: string;
	children: ReactNode;
	variant?: string;
	tabIndex?: number;
};

// const unfocusButton = (event: TouchEvent<HTMLAnchorElement>) => {
// 	setTimeout(() => {
// 		event.currentTarget.blur();
// 	}, 500);
// };

export const PageLink: FC<PageLinkProps> = ({ href, children, variant, tabIndex }) => (
	<NextLink href={href} legacyBehavior passHref>
		<ChakraLink
			variant={variant}
			tabIndex={tabIndex}
			// onClick={unfocusButton}
			// TODO: see if an onTouch blur needs to be added for mobile support
			onTouchEnd={(event) =>
				setTimeout(() => {
					event.currentTarget.blur();
				}, 500)
			}
			onTouchCancel={(event) => event.currentTarget.blur()}
		>
			{children}
		</ChakraLink>
	</NextLink>
);
