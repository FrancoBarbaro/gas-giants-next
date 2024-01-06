import { AspectRatio, VStack } from '@chakra-ui/react';
import type { FC } from 'react';
import { PlanetInfo } from '~/common/types';
import { FlipCard } from '~/components/flip-card/flip-card';
import { RoundedListBox } from '~/components/rounded-box/rounded-list-box';
import { RoundedTextBox } from '~/components/rounded-box/rounded-text-box';

type PlanetPageContentProps = {
	planet: string;
	info: PlanetInfo;
};

const dynamicMarginBottom = { xxs: 0, sm: 1, md: 2 };

// TODO make vertical margins dynamic
export const PlanetPageContent: FC<PlanetPageContentProps> = ({ planet, info }) => {
	const { planetDesc, symbolDesc, funFacts, imageUrl, imageAltText, imageDesc } = info;

	return (
		<>
			<VStack mr={{ xxs: 0, md: 10 }} w={{ xxs: '100%', md: '50%' }} h="100%" justifyContent="space-between">
				<VStack as="section" alignItems="initial" w="100%" mb={6}>
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
			<VStack
				ml={{ xxs: 0, md: 10 }}
				mt={{ xxs: 8, md: 0 }}
				w={{ xxs: '100%', md: '50%' }}
				h="100%"
				justifyContent="space-between"
			>
				<VStack as="section" alignItems="initial" w="100%">
					<RoundedTextBox textType="h2" mt={1} mb={dynamicMarginBottom}>
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
		</>
	);
};
