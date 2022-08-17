import { Skeleton, Stack, UnorderedList, VStack } from '@chakra-ui/react';
import type { FC } from 'react';
import { RoundedTextBox } from '~/components/rounded-box/rounded-text-box';

type PlanetPageProps = {
	planet: 'jupiter' | 'saturn' | 'uranus' | 'neptune';
};

const SkeletonLayout: FC = () => (
	<Stack>
		<Skeleton />
	</Stack>
);

// TODO: make an endpoint with Next Connect and request to it with the planet's name
// TODO: have a chakra skeleton display while waiting on the request
export const PlanetPage: FC<PlanetPageProps> = ({ planet }) => (
	<>
		<VStack mr={10}>
			{/* TODO: need a ternary here to conditionally display the skeleton... do this in the ContentWrapper or here? */}
			<section>
				<RoundedTextBox textType="h1">About {planet}:</RoundedTextBox>
				{/* <RoundedTextBox textType="p">{planetDescription}</RoundedTextBox> */}
			</section>
			<section>
				<RoundedTextBox textType="h2">Symbol:</RoundedTextBox>
				{/* <RoundedTextBox textType="p">{symbolDescription}</RoundedTextBox> */}
			</section>
		</VStack>
		<VStack as="section" ml={10}>
			<RoundedTextBox textType="h2">Fun Facts:</RoundedTextBox>
			{/* TODO: consider creating 'RoundedListBox' component */}
			<UnorderedList>
				{/* {funFacts.map((fact, index) => (
						<ListItem key={index}>{fact}</ListItem>
					))} */}
			</UnorderedList>
			{/* TODO: create 'FlipCard' component, the chakra ui 'Image' component will be inside it. */}
			{/* Pass down src and alt as props or pass the whole Image compoenent as a child? */}
			{/* <Image src={imageUrl} alt={imageAltText} /> */}
		</VStack>
	</>
);
