import { VStack } from '@chakra-ui/react';
import type { FC } from 'react';
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
		<>
			<VStack mr={10} w="50%" h="100%">
				<VStack as="section" alignItems="initial" w="100%">
					<RoundedTextBox textType="h1">{`About ${planet}:`}</RoundedTextBox>
					{/* TODO: find out what's overriding this margin top, what chakra element is the CSS style coming from? */}
					<RoundedTextBox textType="p" mt={8}>
						{planetDesc}
					</RoundedTextBox>
				</VStack>
				<VStack as="section" alignItems="initial" w="100%">
					<RoundedTextBox textType="h2">Symbol:</RoundedTextBox>
					<RoundedTextBox textType="p">{symbolDesc}</RoundedTextBox>
				</VStack>
			</VStack>
			<VStack ml={10} w="50%" h="100%">
				<VStack as="section" alignItems="initial" w="100%">
					<RoundedTextBox textType="h2">Fun Facts:</RoundedTextBox>
					<RoundedListBox list={Object.values(funFacts)} fontSize={15.5} />
				</VStack>
				<VStack as="section" alignItems="initial" w="100%">
					<FlipCard imageUrl={imageUrl} imageDesc={imageDesc} imageAltText={imageAltText} />
				</VStack>
			</VStack>
		</>
	);
};
