import { AspectRatio, Stack, VStack } from '@chakra-ui/react';
import type { FC } from 'react';
import { dynamicMarginBottom } from '~/common/dynamic-values';
import { PlanetInfo } from '~/common/types';
import { FlipCard } from '~/components/flip-card/flip-card';
import { RoundedListBox } from '~/components/rounded-box/rounded-list-box';
import { RoundedTextBox } from '~/components/rounded-box/rounded-text-box';

type PlanetPageContentProps = {
	planet: string;
	info: PlanetInfo;
};

export const PlanetPageContent: FC<PlanetPageContentProps> = ({ planet, info }) => {
	const { planetDesc, symbolDesc, funFacts, imageUrl, imageAltText, imageDesc } = info;

	return (
		<Stack spacing={{ base: 6, md: 20 }} direction={{ base: 'column', md: 'row' }} w="100%" h="100%">
			<VStack w={{ base: '100%', md: '50%' }} h="100%" justifyContent="space-between" spacing={6}>
				<VStack as="section" alignItems="initial" w="100%">
					<RoundedTextBox textType="h1" mb={dynamicMarginBottom}>{`About ${planet}:`}</RoundedTextBox>
					<RoundedTextBox textType="p">{planetDesc}</RoundedTextBox>
				</VStack>
				<VStack as="section" alignItems="initial" w="100%">
					<RoundedTextBox textType="h2" mb={dynamicMarginBottom}>
						Symbol:
					</RoundedTextBox>
					<RoundedTextBox textType="p">{symbolDesc}</RoundedTextBox>
				</VStack>
			</VStack>
			<VStack w={{ base: '100%', md: '50%' }} h="100%" justifyContent="space-between" spacing={6}>
				<VStack as="section" alignItems="initial" w="100%">
					<RoundedTextBox textType="h2" mt={{ base: 0, md: 0.5, lg: 1, xl: 1.5, xxl: 3 }} mb={dynamicMarginBottom}>
						Fun Facts:
					</RoundedTextBox>
					<RoundedListBox list={Object.values(funFacts)} fontSize={15.5} />
				</VStack>
				<VStack as="section" alignItems="initial" w="100%">
					<AspectRatio ratio={480 / 219} w="100%">
						<FlipCard imageUrl={imageUrl} imageDesc={imageDesc} imageAltText={imageAltText} />
					</AspectRatio>
				</VStack>
			</VStack>
		</Stack>
	);
};
