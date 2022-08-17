import { Heading, Text } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { colors } from '~/common/colors';
import { RoundedBox } from '~/components/rounded-box/rounded-box';

type RoundedTextBoxProps = {
	textType: 'p' | 'h1' | 'h2';
	children: ReactNode;
};

export const RoundedTextBox: FC<RoundedTextBoxProps> = ({ textType, children }) => (
	<RoundedBox>
		{textType === 'p' ? (
			<Text color={colors.galacticPurple}>{children}</Text>
		) : (
			<Heading as={textType} color={colors.blueGray} fontSize={textType === 'h1' ? 32 : 24} textTransform="capitalize">
				{children}
			</Heading>
		)}
	</RoundedBox>
);
