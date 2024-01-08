import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { putUserFeedback } from '~/server/endpoints/feedback/put-user-feedback';

const StoreFeedbackQuerySchema = z.object({
	likedWebsite: z.union([z.literal('Yes'), z.literal('No'), z.literal('Kind Of')]),
	favoritePages: z.array(
		z.union([z.literal('Home'), z.literal('Jupiter'), z.literal('Saturn'), z.literal('Uranus'), z.literal('Neptune')]),
	),
	additionalFeedback: z.string(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const validatedSchemaResult = StoreFeedbackQuerySchema.safeParse(req.body);

	if (!validatedSchemaResult.success) {
		return res.status(400).json({ message: validatedSchemaResult.error.message });
	}

	const { likedWebsite, favoritePages, additionalFeedback } = validatedSchemaResult.data;
	const authToken = req.headers.authorization?.replace('Bearer ', '');
	const appCheckToken = req.headers['x-firebase-appcheck'];
	const userId = req.headers['x-firebase-uid'];

	if (!authToken) return res.status(401).json({ message: 'Request did not include an auth token!' });
	if (typeof appCheckToken !== 'string')
		return res.status(401).json({ message: 'Request did not include a firebase app check token!' });
	if (typeof userId !== 'string')
		return res.status(401).json({ message: 'Request did not include a firebase user id!' });
	const response = await putUserFeedback(
		likedWebsite,
		favoritePages,
		additionalFeedback,
		authToken,
		appCheckToken,
		userId,
	);

	if (response.error) return res.status(500).json({ message: 'Storing user feedback failed!' });
	return res.status(200).json({ updatedData: response.data });
}
