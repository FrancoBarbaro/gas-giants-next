import { Link, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { colors } from '~/theme/colors';

type FlipCardCaptionProps = {
	imageDesc: string;
};

export const FlipCardCaption: FC<FlipCardCaptionProps> = ({ imageDesc }) => (
	<ReactMarkdown
		components={{
			a: ({ href, children }) => (
				<Link href={href} target="_blank" variant="gradient-underline" color={colors.neonPink}>
					{children}
				</Link>
			),
			p: ({ children }) => <Text w="80%">{children}</Text>,
		}}
		skipHtml
	>
		{imageDesc}
	</ReactMarkdown>
);
