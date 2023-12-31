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

const getDynamicFontSize = (textType: 'p' | 'h1' | 'h2') => {
	switch (textType) {
		case 'h1':
			return { xxs: 14, xs: 14, sm: 20, md: 26, lg: 32 };
		case 'h2':
			return { xxs: 12, xs: 12, sm: 16, md: 20, lg: 24 };
		case 'p':
			return { xxs: 8, xs: 10, sm: 12, md: 14, lg: 16 };
		default:
			return;
	}
};

export const RoundedTextBox: FC<RoundedTextBoxProps> = ({ textType, children, ...rest }) => {
	const dynamicFontSize = getDynamicFontSize(textType);

	return (
		<RoundedBox {...rest}>
			{textType === 'p' ? (
				<ReactMarkdown
					components={{
						p: ({ children }) => (
							<Text fontSize={dynamicFontSize} color={colors.galacticPurple}>
								{children}
							</Text>
						),
					}}
					skipHtml
				>
					{children}
				</ReactMarkdown>
			) : (
				<Heading color={colors.blueGray} as={textType} fontSize={dynamicFontSize} textTransform="capitalize">
					{children}
				</Heading>
			)}
		</RoundedBox>
	);
};
