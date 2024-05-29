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
			return { xxs: 'md', xs: 'lg', sm: 'xl', md: '2xl', lg: '3xl', xxl: '5xl' };
		case 'h2':
			return { xxs: 'sm', xs: 'md', sm: 'lg', md: 'xl', lg: '2xl', xxl: '4xl' };
		case 'p':
			return { xxs: 10, xs: 'xs', sm: 'sm', md: 'sm', lg: 'md', xxl: '2xl' };
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
							<Text fontSize={dynamicFontSize} color={colors.bluePurple}>
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
