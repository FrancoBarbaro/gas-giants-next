import type { FC } from 'react';
import { ShootingStar } from '~/components/background/shooting-star';

export const ShootingStars: FC = () => (
	<>
		<ShootingStar top="10vh" right={-5} />
		<ShootingStar top="40vh" right={-5} />
		<ShootingStar top={-5} right="10vw" />
		<ShootingStar top={-5} right="30vw" />
		<ShootingStar top={-5} right="50vw" />
		<ShootingStar top={-5} right="65vw" />
		<ShootingStar top={-5} right="85vw" />
	</>
);
