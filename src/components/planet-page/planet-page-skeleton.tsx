import { AspectRatio, Skeleton, Stack, VStack } from '@chakra-ui/react';
import type { FC } from 'react';
import { dynamicBorderRadius, dynamicMarginBottom } from '~/common/dynamic-values';
import { RoundedTextBox } from '~/components/rounded-box/rounded-text-box';

type PlanetPageSkeletonProps = {
	planet: string;
};

export const PlanetPageSkeleton: FC<PlanetPageSkeletonProps> = ({ planet }) => (
	<Stack spacing={{ xxs: 6, md: 20 }} direction={{ xxs: 'column', md: 'row' }} w="100%" h="100%">
		<VStack w={{ xxs: '100%', md: '50%' }} h="100%" justifyContent="space-between" spacing={6}>
			<VStack as="section" alignItems="initial" w="100%">
				<RoundedTextBox textType="h1" mb={dynamicMarginBottom}>{`About ${planet}:`}</RoundedTextBox>
				<Skeleton
					w="100%"
					h={{ xxs: 28, xs: 32, sm: 36, md: 64, xl: 60, xxl: 80 }}
					borderRadius={dynamicBorderRadius}
				/>
			</VStack>
			<VStack as="section" alignItems="initial" w="100%">
				<RoundedTextBox textType="h2" mb={dynamicMarginBottom}>
					Symbol:
				</RoundedTextBox>
				<Skeleton w="100%" h={{ xxs: 14, xs: 16, md: 32, xl: 28, xxl: 36 }} borderRadius={dynamicBorderRadius} />
			</VStack>
		</VStack>
		<VStack w={{ xxs: '100%', md: '50%' }} h="100%" justifyContent="space-between" spacing={6}>
			<VStack as="section" alignItems="initial" w="100%">
				<RoundedTextBox textType="h2" mt={{ xxs: 0, md: 0.5, lg: 1, xl: 1.5, xxl: 3 }} mb={dynamicMarginBottom}>
					Fun Facts:
				</RoundedTextBox>
				<Skeleton
					w="100%"
					h={{ xxs: 28, xs: 32, sm: 36, md: 64, xl: 60, xxl: 80 }}
					borderRadius={dynamicBorderRadius}
				/>
			</VStack>
			<VStack as="section" alignItems="initial" w="100%">
				<AspectRatio ratio={480 / 219} w="100%">
					<Skeleton w="100%" borderRadius={dynamicBorderRadius} />
				</AspectRatio>
			</VStack>
		</VStack>
	</Stack>
);
