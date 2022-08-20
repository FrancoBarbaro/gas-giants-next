import { Box, Link, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';

type FlipCardCaptionProps = {
	imageDesc: string;
};

export const FlipCardCaption: FC<FlipCardCaptionProps> = ({ imageDesc }) => (
	<Box>
		<ReactMarkdown
			components={{
				a: ({ href, children }) => (
					<Link href={href} target="_blank" children={children} variant="gradient-underline" />
				),
				p: ({ children }) => <Text>{children}</Text>,
			}}
			skipHtml
		>
			{imageDesc}
		</ReactMarkdown>
	</Box>
);
