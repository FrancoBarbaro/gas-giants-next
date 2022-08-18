import { Heading } from '@chakra-ui/react';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { colors } from '~/common/colors';
import { RoundedBox } from '~/components/rounded-box/rounded-box';

type RoundedTextBoxProps = {
	textType: 'p' | 'h1' | 'h2';
	children: string;
};

export const RoundedTextBox: FC<RoundedTextBoxProps> = ({ textType, children }) => (
	<RoundedBox color={textType === 'p' ? colors.galacticPurple : colors.blueGray}>
		{textType === 'p' ? (
			<ReactMarkdown skipHtml>{children}</ReactMarkdown>
		) : (
			<Heading as={textType} fontSize={textType === 'h1' ? 32 : 24} textTransform="capitalize">
				{children}
			</Heading>
		)}
	</RoundedBox>
);
