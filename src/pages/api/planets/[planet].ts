import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { z } from 'zod';
import { getPlanetInfoFromName } from '~/server/endpoints/planets/get-planet-info-from-name';

const PlanetInfoQuerySchema = z.object({
	planet: z.union([z.literal('jupiter'), z.literal('saturn'), z.literal('uranus'), z.literal('neptune')]),
});

const handler = nc().get(async (req: NextApiRequest, res: NextApiResponse) => {
	const validatedSchemaResult = PlanetInfoQuerySchema.safeParse(req.query);

	if (!validatedSchemaResult.success) {
		return res.status(400).json({ message: validatedSchemaResult.error.message });
	}

	const { planet } = validatedSchemaResult.data;
	const authToken = req.headers.authorization?.replace('Bearer ', '');
	const appCheckToken = req.headers['x-firebase-appcheck'];

	if (!authToken) return res.status(401).json({ message: 'Request did not include an auth token!' });
	if (typeof appCheckToken !== 'string')
		return res.status(401).json({ message: 'Request did not include a firebase app check token!' });
	const response = await getPlanetInfoFromName(planet, authToken, appCheckToken);

	if (response.error) return res.status(500).json({ message: 'Fetching planet info by name failed!' });
	return res.status(200).json({ info: response.data });
});

export default handler;
