import { VStack } from '@chakra-ui/react';
import type { FC } from 'react';
import { PlanetInfo } from '~/common/types';
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
			<VStack mr={10}>
				{/* TODO: need a ternary here to conditionally display the skeleton */}
				<section>
					<RoundedTextBox textType="h1">{`About ${planet}:`}</RoundedTextBox>
					<RoundedTextBox textType="p">{planetDesc}</RoundedTextBox>
				</section>
				<section>
					<RoundedTextBox textType="h2">Symbol:</RoundedTextBox>
					<RoundedTextBox textType="p">{symbolDesc}</RoundedTextBox>
				</section>
			</VStack>
			<VStack as="section" ml={10}>
				<section>
					<RoundedTextBox textType="h2">Fun Facts:</RoundedTextBox>
					<RoundedListBox list={Object.values(funFacts)} />
					{/* TODO: create 'FlipCard' component, the chakra ui 'Image' component will be inside it. */}
					{/* Pass down src and alt as props or pass the whole Image compoenent as a child? */}
					{/* <Image src={imageUrl} alt={imageAltText} /> */}
				</section>
			</VStack>
		</>
	);
};
