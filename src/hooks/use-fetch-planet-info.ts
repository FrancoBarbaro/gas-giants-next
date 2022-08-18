import useSWR from 'swr';
import { GasGiant, PlanetInfo } from '~/common/types';

export const useFetchPlanetInfo = (planet: GasGiant) => {
	const { data } = useSWR<{ info: PlanetInfo }>(`/api/planets/${planet}`);

	return { data: data?.info };
};
