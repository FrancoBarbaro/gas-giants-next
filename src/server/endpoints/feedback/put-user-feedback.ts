import { firebaseApiPutter } from '~/clients/firebase/firebase-axios-functions';
import type { AxiosReturnType, FavoritePageOptions, LikedWebsiteOptions, UserFeedback } from '~/common/types';

export const putUserFeedback = async (
	likedWebsite: LikedWebsiteOptions,
	favoritePages: FavoritePageOptions[],
	additionalFeedback: string,
	authToken: string,
	appCheckToken: string,
	userId: string,
): Promise<AxiosReturnType<UserFeedback>> => {
	const firebaseResponse = await firebaseApiPutter<UserFeedback>(`/feedback/${userId}`, authToken, appCheckToken, {
		likedWebsite,
		favoritePages,
		additionalFeedback,
	});

	if (!firebaseResponse.success) return { error: true, message: 'An error occured while storing user feedback!' };
	return { error: false, data: firebaseResponse.data };
};
