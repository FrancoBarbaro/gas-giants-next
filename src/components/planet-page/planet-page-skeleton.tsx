import { Skeleton, VStack } from '@chakra-ui/react';
import type { FC } from 'react';
import { RoundedTextBox } from '~/components/rounded-box/rounded-text-box';

type PlanetPageSkeletonProps = {
	planet: string;
};

export const PlanetPageSkeleton: FC<PlanetPageSkeletonProps> = ({ planet }) => (
	<>
		<VStack mr={10} w="50%">
			<VStack as="section" alignItems="initial" w="100%">
				<RoundedTextBox textType="h1">{`About ${planet}:`}</RoundedTextBox>
				<Skeleton w="100%" h={40} borderRadius={15} />
			</VStack>
			<VStack as="section" alignItems="initial" w="100%">
				<RoundedTextBox textType="h2">Symbol:</RoundedTextBox>
				<Skeleton w="100%" h={40} borderRadius={15} />
			</VStack>
		</VStack>
		<VStack ml={10} w="50%">
			<VStack as="section" alignItems="initial" w="100%">
				<RoundedTextBox textType="h2">Fun Facts:</RoundedTextBox>
				<Skeleton w="100%" h={56} borderRadius={15} />
			</VStack>
			<VStack as="section" alignItems="initial" w="100%">
				<Skeleton w="100%" h={40} borderRadius={15} />
			</VStack>
		</VStack>
	</>
);
