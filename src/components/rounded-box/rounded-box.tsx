import { Box } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { colors } from '~/theme/colors';

type RoundedBoxProps = {
	children: ReactNode;
	color?: string;
	[x: string]: any;
};

export const RoundedBox: FC<RoundedBoxProps> = ({ children, color, ...rest }) => (
	<Box
		bg={colors.white}
		px={{ xxs: 2, xs: 4, md: 6 }}
		py={{ xxs: 1, xs: 2, md: 3 }}
		borderRadius={{ xxs: 8, xs: 10, sm: 12, md: 15 }}
		w="fit-content"
		color={color}
		{...rest}
	>
		{children}
	</Box>
);
