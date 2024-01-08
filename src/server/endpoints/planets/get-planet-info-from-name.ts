import { firebaseApiFetcher } from '~/clients/firebase/firebase-axios-functions';
import { AxiosReturnType, PlanetInfo } from '~/common/types';

export const getPlanetInfoFromName = async (
	planet: string,
	authToken: string,
	appCheckToken: string,
): Promise<AxiosReturnType<PlanetInfo>> => {
	const firebaseResponse = await firebaseApiFetcher<PlanetInfo>(`/${planet}`, authToken, appCheckToken);
	if (!firebaseResponse.success) return { error: true, message: 'An error occured retrieving planet info!' };
	return { error: false, data: firebaseResponse.data };
};
