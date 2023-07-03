import { PlanetInfo } from '~/common/types';
import { firebaseApiFetcher } from '~/firebase/fetcher';
import { PlanetInfoReturnType } from '~/server/endpoints/planets/types';

export const getPlanetInfoFromName = async (planet: string): Promise<PlanetInfoReturnType> => {
	const firebaseResponse = await firebaseApiFetcher<PlanetInfo>(`/${planet}`);
	if (!firebaseResponse.success) return { error: true, message: 'An error occured retrieving planet info!' };

	return { error: false, data: firebaseResponse.data };
};
