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
		px={{ xxs: 3, xs: 4, md: 6, xxl: 8 }}
		py={{ xxs: 1.5, xs: 2, md: 3, xxl: 4 }}
		borderRadius={{ xxs: 'lg', xs: 10, sm: 'xl', md: 14, lg: '2xl', xxl: 20 }}
		w="fit-content"
		color={color}
		{...rest}
	>
		{children}
	</Box>
);
