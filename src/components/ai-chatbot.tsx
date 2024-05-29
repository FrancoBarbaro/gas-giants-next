import { Button, FormControl, HStack, Input, Textarea } from '@chakra-ui/react';
import { FC, FormEvent, useState } from 'react';
import { dynamicBorderRadius, dynamicFontSize } from '~/common/dynamic-values';
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
		<FormControl
			as="form"
			h="100%"
			// TODO: maybe add more breakpoints here
			minH={{ xxs: 56, md: 96 }}
			color={colors.white}
			borderRadius={dynamicBorderRadius}
			border={`1px solid ${colors.whiteTranslucent}`}
			overflow="hidden"
			onSubmit={submitHandler}
		>
			<Textarea
				// TODO: add more breakpoints here
				h={{ xxs: '85%', md: '90%' }}
				minH={{ xxs: '85%', md: '90%' }}
				px={3}
				py={1.5}
				bg={colors.bluePurpleTranslucent}
				value={answer}
				resize="none"
				variant="unstyled"
				fontSize={dynamicFontSize}
				borderRadius="none"
				borderBottom={`1px solid ${colors.whiteTranslucent}`}
				readOnly
			/>
			{/* TODO: add more breakpoints here */}
			<HStack spacing={0} h={{ xxs: '15%', md: '10%' }} minH={{ xxs: '15%', md: '10%' }}>
				<Input
					h="100%"
					minH="100%"
					px={3}
					py={1.5}
					bg={colors.bluePurpleTranslucent}
					variant="unstyled"
					placeholder="Ask a question"
					fontSize={dynamicFontSize}
					borderRadius="none"
					type="text"
					value={prompt}
					onChange={(event) => setPrompt(event.target.value)}
					_placeholder={{ color: colors.whiteTranslucent }}
				/>
				<Button
					w="15%"
					h="100%"
					type="submit"
					fontSize={dynamicFontSize}
					borderRadius="none"
					disabled={!validPrompt || !isReady}
					bg={colors.white}
					color={colors.bluePurple}
					borderLeft={`1px solid ${colors.whiteTranslucent}`}
					_disabled={{
						bg: colors.whiteTranslucent,
						cursor: 'not-allowed',
						_active: { bg: colors.whiteTranslucent, color: colors.bluePurple },
					}}
					_hover={{ bg: colors.whiteTranslucent, color: colors.bluePurple }}
				>
					Ask
				</Button>
			</HStack>
		</FormControl>
	);
};
