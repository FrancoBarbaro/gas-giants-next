import { PlanetInfo } from "~/common/types";

type BasePlanetInfoReturnType = {
	error: boolean;
};

type SuccessPlanetInfoReturnType = BasePlanetInfoReturnType & {
	error: false;
	data: PlanetInfo;
};

type FailedPlanetInfoReturnType = BasePlanetInfoReturnType & {
	error: true;
	message: string;
};

export type PlanetInfoReturnType = SuccessPlanetInfoReturnType | FailedPlanetInfoReturnType;
