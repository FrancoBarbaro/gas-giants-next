import {
	Button,
	Checkbox,
	CheckboxGroup,
	FormControl,
	FormLabel,
	HStack,
	Radio,
	RadioGroup,
	Stack,
	Textarea,
	useCheckboxGroup,
	useRadioGroup,
} from '@chakra-ui/react';
import { ChangeEvent, FC, useState } from 'react';
import { colors } from '~/theme/colors';

export const FeedbackPage: FC = () => {
	const { value: likedWebsite, setValue: setLikedWebsite } = useRadioGroup({ defaultValue: '' });
	const { value: favoritePage, setValue: setFavoritePage } = useCheckboxGroup({ defaultValue: [] });
	const [additionalFeedback, setAdditionalFeedback] = useState('');

	const submitHandler = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		// TODO: add validation to make sure empty data is not sent
		// send state data to firebase
		setLikedWebsite('');
		setFavoritePage([]);
		setAdditionalFeedback('');
		// TODO: use a toast to notify the user that their feedback was submitted
	};

	return (
		<form id="feedback" onSubmit={submitHandler}>
			<FormControl as="fieldset" color={colors.white} background={colors.galacticPurple} p={10} borderRadius="lg">
				<Stack spacing={7}>
					<Stack spacing={0.5}>
						<FormLabel as="legend">Did you like this website?</FormLabel>
						<RadioGroup value={likedWebsite} onChange={setLikedWebsite}>
							<HStack spacing={6}>
								<Radio value="Yes">Yes</Radio>
								<Radio value="No">No</Radio>
								<Radio value="Kind Of">Kind Of</Radio>
							</HStack>
						</RadioGroup>
					</Stack>
					<Stack spacing={0.5}>
						<FormLabel as="legend">Which page was your favorite?</FormLabel>
						<CheckboxGroup value={favoritePage} onChange={setFavoritePage}>
							<HStack spacing={6}>
								<Checkbox value="Home">Home</Checkbox>
								<Checkbox value="Jupiter">Jupiter</Checkbox>
								<Checkbox value="Saturn">Saturn</Checkbox>
								<Checkbox value="Uranus">Uranus</Checkbox>
								<Checkbox value="Neptune">Neptune</Checkbox>
							</HStack>
						</CheckboxGroup>
					</Stack>
					<Stack spacing={0.5}>
						<FormLabel as="legend">Additional Feedback:</FormLabel>
						<Textarea
							h={48}
							resize="none"
							placeholder="Tell us more about what you liked about the website or suggest a way that the site may be improved."
							value={additionalFeedback}
							onChange={(event) => setAdditionalFeedback(event.target.value)}
						/>
					</Stack>
					<Button colorScheme="blue" mr={3} form="feedback" type="submit">
						Submit Feedback
					</Button>
				</Stack>
			</FormControl>
		</form>
	);
};
