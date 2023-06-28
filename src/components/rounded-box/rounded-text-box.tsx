import { Heading, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { RoundedBox } from '~/components/rounded-box/rounded-box';
import { colors } from '~/theme/colors';

type RoundedTextBoxProps = {
	textType: 'p' | 'h1' | 'h2';
	children: string;
	[x: string]: any;
};

export const RoundedTextBox: FC<RoundedTextBoxProps> = ({ textType, children, ...rest }) => (
	<RoundedBox {...rest}>
		{textType === 'p' ? (
			<ReactMarkdown
				components={{
					p: ({ children }) => <Text color={colors.galacticPurple}>{children}</Text>,
				}}
				skipHtml
			>
				{children}
			</ReactMarkdown>
		) : (
			<Heading color={colors.blueGray} as={textType} fontSize={textType === 'h1' ? 32 : 24} textTransform="capitalize">
				{children}
			</Heading>
		)}
	</RoundedBox>
);
