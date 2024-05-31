import { useBreakpointValue } from '@chakra-ui/react';
import type { FC } from 'react';
import { RingLoader } from 'react-spinners';
import { colors } from '~/theme/colors';

export const AiChatbotSpinner: FC = () => {
	const size = useBreakpointValue(
		{ base: 18, xs: 20, sm: 22, md: 23, lg: 24, xl: 25, xxl: 30 },
		{ ssr: false, fallback: 'lg' },
	);

	return <RingLoader size={size} color={colors.bluePurple} speedMultiplier={1.5} />;
};
