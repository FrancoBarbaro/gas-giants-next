import { Box, keyframes } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { colors } from '~/theme/colors';

type ShootingStarProps = {
	top: string | number;
	right: string | number;
};

const fly = keyframes({
	from: { transform: 'rotate(315deg) translateX(0)' },
	to: { transform: 'rotate(315deg) translateX(-150vh)', opacity: 0 },
});

const baseStyle = {
	w: 1,
	h: 1,
	bg: colors.white,
	borderRadius: '50%',
	boxShadow: `0 0 0 4px rgba(255, 255, 255, 0.1),
		0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 0 6px rgba(255, 255, 255, 1)`,
};

const beforeStyle = {
	content: '""',
	pos: 'absolute',
	top: '50%',
	width: 96,
	height: 0.5,
	background: 'linear-gradient(90deg, white, transparent)',
	transform: 'translateY(-50%)',
};

// returns a randomly generated duration (in seconds) rounded to one decimal place
const generateRandomDuration = (min: number, max: number) => {
	const randomNum = Math.random() * (max - min) + min;
	return Math.round(randomNum * 10) / 10;
};

export const ShootingStar: FC<ShootingStarProps> = ({ top, right }) => {
	const [animation, setAnimation] = useState<string | undefined>(undefined);

	useEffect(() => {
		const duration = generateRandomDuration(1, 5);
		const delay = generateRandomDuration(0, 3);
		setAnimation(`${fly} ${duration}s linear ${delay}s infinite`);
	}, []);

	// the span acts as the star's head, and the "before" pseudo-element acts as the star's tail
	return (
		<Box as="span" pos="absolute" top={top} right={right} animation={animation} {...baseStyle} _before={beforeStyle} />
	);
};
