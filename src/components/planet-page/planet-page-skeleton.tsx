import { AspectRatio, Skeleton, VStack } from '@chakra-ui/react';
import type { FC } from 'react';
import { RoundedTextBox } from '~/components/rounded-box/rounded-text-box';

type PlanetPageSkeletonProps = {
	planet: string;
};

const dynamicBorderRadius = { xxs: 'lg', xs: 10, sm: 'xl', md: 14, lg: '2xl', xxl: 20 };

// TODO: Apply all dynamic styling from PlanetPageContent to the Skeletons as well
export const PlanetPageSkeleton: FC<PlanetPageSkeletonProps> = ({ planet }) => (
	<>
		<VStack mr={{ xxs: 0, md: 10 }} w={{ xxs: '100%', md: '50%' }} h="100%" justifyContent="space-between">
			<VStack as="section" alignItems="initial" w="100%" mb={6}>
				<RoundedTextBox textType="h1" mb={2}>{`About ${planet}:`}</RoundedTextBox>
				<Skeleton w="100%" h={56} borderRadius={dynamicBorderRadius} />
			</VStack>
			<VStack as="section" alignItems="initial" w="100%">
				<RoundedTextBox textType="h2" mb={2}>
					Symbol:
				</RoundedTextBox>
				<Skeleton w="100%" h={32} borderRadius={dynamicBorderRadius} />
			</VStack>
		</VStack>
		<VStack
			ml={{ xxs: 0, md: 10 }}
			mt={{ xxs: 8, md: 0 }}
			w={{ xxs: '100%', md: '50%' }}
			h="100%"
			justifyContent="space-between"
		>
			<VStack as="section" alignItems="initial" w="100%">
				<RoundedTextBox textType="h2" mt={1} mb={3}>
					Fun Facts:
				</RoundedTextBox>
				<Skeleton w="100%" h={56} borderRadius={dynamicBorderRadius} />
			</VStack>
			<VStack as="section" alignItems="initial" w="100%">
				<AspectRatio ratio={480 / 219} w="100%">
					<Skeleton w="100%" borderRadius={dynamicBorderRadius} />
				</AspectRatio>
			</VStack>
		</VStack>
	</>
);
