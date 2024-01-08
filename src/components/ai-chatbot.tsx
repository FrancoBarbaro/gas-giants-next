import { Button, FormControl, HStack, Input, Textarea } from '@chakra-ui/react';
import { FC, FormEvent, useState } from 'react';
import { useFetchAiResponse } from '~/hooks/use-fetch-ai-response';
import { colors } from '~/theme/colors';

export const AiChatbot: FC = () => {
	const [prompt, setPrompt] = useState('');
	const { fetchAiResponse, answer, isReady } = useFetchAiResponse();

	const validPrompt = prompt.trim() !== '';

	const submitHandler = (event: FormEvent<HTMLDivElement>) => {
		event.preventDefault();
		if (validPrompt && isReady) {
			fetchAiResponse(prompt);
			setPrompt('');
		}
	};

	return (
		<FormControl as="form" h="100%" color={colors.white} onSubmit={submitHandler}>
			<Textarea h="90%" bg={colors.grayBlack} opacity={0.85} value={answer} resize="none" readOnly />
			<HStack spacing={0} h="10%">
				<Input
					h="100%"
					bg={colors.grayBlack}
					opacity={0.85}
					placeholder="Ask a question"
					type="text"
					value={prompt}
					onChange={(event) => setPrompt(event.target.value)}
				/>
				<Button
					w="15%"
					h="100%"
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
			</HStack>
		</FormControl>
	);
};
