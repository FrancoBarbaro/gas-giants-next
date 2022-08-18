import { Skeleton, VStack } from '@chakra-ui/react';
import type { FC } from 'react';
import { RoundedTextBox } from '~/components/rounded-box/rounded-text-box';

type PlanetPageSkeletonProps = {
	planet: string;
};

export const PlanetPageSkeleton: FC<PlanetPageSkeletonProps> = ({ planet }) => (
	<>
		<VStack mr={10}>
			{/* TODO: need a ternary here to conditionally display the skeleton */}
			<section>
				<RoundedTextBox textType="h1">{`About ${planet}:`}</RoundedTextBox>
				<Skeleton />
			</section>
			<section>
				<RoundedTextBox textType="h2">Symbol:</RoundedTextBox>
				<Skeleton />
			</section>
		</VStack>
		<VStack ml={10}>
			<section>
				<RoundedTextBox textType="h2">Fun Facts:</RoundedTextBox>
				<Skeleton />
			</section>
		</VStack>
	</>
);
