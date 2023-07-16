import { firebaseApiFetcher } from '~/clients/firebase/firebase-fetcher';
import { PlanetInfo } from '~/common/types';
import { PlanetInfoReturnType } from '~/server/endpoints/planets/types';

export const getPlanetInfoFromName = async (planet: string, token: string): Promise<PlanetInfoReturnType> => {
	
	const firebaseResponse = await firebaseApiFetcher<PlanetInfo>(`/${planet}`, token);
	if (!firebaseResponse.success) return { error: true, message: 'An error occured retrieving planet info!' };

	return { error: false, data: firebaseResponse.data };
};
