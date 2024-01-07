import { firebaseApiFetcher } from '~/clients/firebase/firebase-axios-functions';
import { PlanetInfo } from '~/common/types';
import { PlanetInfoReturnType } from '~/server/endpoints/planets/types';

export const getPlanetInfoFromName = async (
	planet: string,
	authToken: string,
	appCheckToken: string,
): Promise<PlanetInfoReturnType> => {
	const firebaseResponse = await firebaseApiFetcher<PlanetInfo>(`/${planet}`, authToken, appCheckToken);
	if (!firebaseResponse.success) return { error: true, message: 'An error occured retrieving planet info!' };
	return { error: false, data: firebaseResponse.data };
};
