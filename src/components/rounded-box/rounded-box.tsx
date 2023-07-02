import { Box } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { colors } from '~/theme/colors';

type RoundedBoxProps = {
	children: ReactNode;
	color?: string;
	[x: string]: any;
};

export const RoundedBox: FC<RoundedBoxProps> = ({ children, color, ...rest }) => (
	<Box bg={colors.white} p={6} py={3} borderRadius={15} w="fit-content" color={color} {...rest}>
		{children}
	</Box>
);
