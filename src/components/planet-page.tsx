import { Heading, Skeleton, Stack, UnorderedList, VStack } from '@chakra-ui/react';
import type { FC } from 'react';

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
				<Heading as="h1" textTransform="capitalize">
					About {planet}:
				</Heading>
				{/* <Text>{planetDescription}</Text> */}
			</section>
			<section>
				<Heading>Symbol:</Heading>
				{/* <Text>{symbolDescription}</Text> */}
			</section>
		</VStack>
		<VStack as="section" ml={10}>
			<Heading>Fun Facts:</Heading>
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
