export type GasGiant = 'jupiter' | 'saturn' | 'uranus' | 'neptune';

export type PlanetInfo = {
	planetDesc: string;
	symbolDesc: string;
	funFacts: Record<string, string>;
	imageUrl: string;
	imageAltText: string;
	imageDesc: string;
};

export type LikedWebsiteOptions = 'Yes' | 'No' | 'Kind Of';
export type FavoritePageOptions = 'Home' | 'Jupiter' | 'Saturn' | 'Uranus' | 'Neptune';

export type UserFeedback = {
	likedWebsite: LikedWebsiteOptions;
	favoritePages: FavoritePageOptions[];
	additionalFeedback: string;
};

type BaseAxiosReturnType = {
	error: boolean;
};

type SuccessAxiosReturnType<T> = BaseAxiosReturnType & {
	error: false;
	data: T;
};

type FailedAxiosReturnType = BaseAxiosReturnType & {
	error: true;
	message: string;
};

export type AxiosReturnType<T> = SuccessAxiosReturnType<T> | FailedAxiosReturnType;
