import { firebaseApiFetcher } from '~/clients/firebase';
import { PlanetInfo } from '~/common/types';
import { PlanetInfoReturnType } from '~/server/endpoints/planets/types';

export const getPlanetInfoFromName = async (planet: string): Promise<PlanetInfoReturnType> => {
	const firebaseResponse = await firebaseApiFetcher<PlanetInfo>(`/${planet}`);
	if (!firebaseResponse.success) return { error: true, message: 'An error occured retrieving planet info!' };
	
	// TODO: maybe call a transformation function here that makes funFacts an array and parses the markdown
	return { error: false, data: firebaseResponse.data };
};
