import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC, ReactNode } from 'react';

type NavButtonProps = {
	path: string;
	children: ReactNode;
};

export const NavButton: FC<NavButtonProps> = ({ path, children }) => {
	// const [disaibledState, setDisaibledState] = useState(false);
	// TODO: make the button not disaibled if the hover state is false

	// TODO: maybe instead of disaibling the button, manage the active button with state and

	return (
		<NextLink href={path}>
			<Button
				variant="nav-button"
				onClick={(event) => {
					event.currentTarget.blur();
					// setDisaibledState(true);
				}}
				// disabled={disaibledState}
			>
				{children}
			</Button>
		</NextLink>
	);
};
