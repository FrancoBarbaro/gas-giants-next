import { Box } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { colors } from '~/common/colors';

type RoundedBoxProps = {
	children: ReactNode;
};

export const RoundedBox: FC<RoundedBoxProps> = ({ children }) => (
	<Box bg={colors.white} p={6} py={3} borderRadius={15}>
		{children}
	</Box>
);
