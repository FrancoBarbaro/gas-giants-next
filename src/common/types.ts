export type GasGiant = 'jupiter' | 'saturn' | 'uranus' | 'neptune';

export type PlanetInfo = {
	planetDesc: string;
	symbolDesc: string;
	funFacts: Record<string, string>;
	imageUrl: string;
	imageAltText: string;
	imageDesc: string;
};
