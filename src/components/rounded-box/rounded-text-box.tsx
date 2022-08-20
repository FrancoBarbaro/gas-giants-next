import { Heading, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { colors } from '~/common/colors';
import { RoundedBox } from '~/components/rounded-box/rounded-box';

type RoundedTextBoxProps = {
	textType: 'p' | 'h1' | 'h2';
	children: string;
};

export const RoundedTextBox: FC<RoundedTextBoxProps> = ({ textType, children }) => (
	<RoundedBox>
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
