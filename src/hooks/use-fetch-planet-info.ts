import useSWR from 'swr';
import { GasGiant, PlanetInfo } from '~/common/types';

type DataType = { info: PlanetInfo };

const fetcher = async (url: RequestInfo, authToken: string | null, appCheckToken: string | null) => {
	if (!authToken || !appCheckToken) {
		throw new Error('Request did not include the required credentials!');
	}

	const res = await fetch(url, {
		headers: { Authorization: `Bearer ${authToken}`, 'X-Firebase-AppCheck': appCheckToken },
	});

	if (!res.ok) {
		throw new Error('An error occurred while fetching the data!');
	}
	return res.json();
};

export const useFetchPlanetInfo = (planet: GasGiant, authToken: string | null, appCheckToken: string | null) => {
	const { data } = useSWR<DataType>([`/api/planets/${planet}`, authToken, appCheckToken], fetcher, {
		errorRetryCount: 2,
	});
	return { data: data?.info };
};
