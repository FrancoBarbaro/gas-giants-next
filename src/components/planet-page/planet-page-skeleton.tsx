import { AspectRatio, Skeleton, VStack } from '@chakra-ui/react';
import type { FC } from 'react';
import { RoundedTextBox } from '~/components/rounded-box/rounded-text-box';

type PlanetPageSkeletonProps = {
	planet: string;
};

export const PlanetPageSkeleton: FC<PlanetPageSkeletonProps> = ({ planet }) => (
	<>
		<VStack mr={10} w="50%" h="100%" justifyContent="space-between">
			<VStack as="section" alignItems="initial" w="100%" mb={6}>
				<RoundedTextBox textType="h1" mb={2}>{`About ${planet}:`}</RoundedTextBox>
				<Skeleton w="100%" h={56} borderRadius={15} />
			</VStack>
			<VStack as="section" alignItems="initial" w="100%">
				<RoundedTextBox textType="h2" mb={2}>
					Symbol:
				</RoundedTextBox>
				<Skeleton w="100%" h={40} borderRadius={15} />
			</VStack>
		</VStack>
		<VStack ml={10} w="50%" h="100%" justifyContent="space-between">
			<VStack as="section" alignItems="initial" w="100%">
				<RoundedTextBox textType="h2" mt={1} mb={3}>
					Fun Facts:
				</RoundedTextBox>
				<Skeleton w="100%" h={56} borderRadius={15} />
			</VStack>
			<VStack as="section" alignItems="initial" w="100%">
				{/* it might be a good idea to make the site scrollable if the width is under a ceratin number */}
				<AspectRatio ratio={480 / 219} w="100%">
					<Skeleton w="100%" borderRadius={15} />
				</AspectRatio>
			</VStack>
		</VStack>
	</>
);
