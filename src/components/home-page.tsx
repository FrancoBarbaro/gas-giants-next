import { Button, Flex, FormControl, FormHelperText, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { FC, FormEvent, useState } from 'react';
import { useFetchAiResponse } from '~/hooks/use-fetch-ai-response';
import { colors } from '~/theme/colors';

// TODO: add og image (image that shows up when url is sent, tweeted, etc.)
// TODO: make the user not be able to ask another question while the ai is still responding
export const HomePage: FC = () => {
	const [prompt, setPrompt] = useState('');
	const { fetchAiResponse, answer, isReady } = useFetchAiResponse();

	const validPrompt = prompt.trim() !== '';

	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (validPrompt && isReady) {
			fetchAiResponse(prompt);
			setPrompt('');
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<FormControl color={colors.white}>
				<FormLabel fontSize={24}>AI Helper</FormLabel>
				<Textarea h={60} bg={colors.grayBlack} opacity={0.85} value={answer} resize="none" readOnly />
				<Flex flexDir="row">
					<Input
						bg={colors.grayBlack}
						opacity={0.85}
						placeholder="Ask a question"
						type="text"
						value={prompt}
						onChange={(event) => setPrompt(event.target.value)}
					/>
					<Button
						type="submit"
						disabled={!validPrompt || !isReady}
						bg={colors.white}
						color={colors.galacticPurple}
						_disabled={{
							opacity: 0.4,
							cursor: 'not-allowed',
							_hover: { bg: colors.white, color: colors.galacticPurple },
						}}
						_hover={{ bg: colors.galacticPurple, color: colors.white }}
					>
						Ask
					</Button>
				</Flex>
				<FormHelperText color={colors.neonPink}>
					Ask our knowledgable AI helper any questions that you have about the Gas Giants
				</FormHelperText>
			</FormControl>
		</form>
	);
};
