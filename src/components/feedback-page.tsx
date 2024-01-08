import {
	Button,
	Checkbox,
	CheckboxGroup,
	FormControl,
	FormLabel,
	HStack,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Radio,
	RadioGroup,
	Stack,
	Textarea,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';
import { ChangeEvent, FC } from 'react';
import { useStoreUserFeedback } from '~/hooks/use-store-user-feedback';
import { colors } from '~/theme/colors';

export const FeedbackPage: FC = () => {
	const { isOpen: alertDialogIsOpen, onToggle: toggleAlertDialog, onClose: closeAlertDialog } = useDisclosure();
	const toast = useToast();
	const {
		likedWebsite,
		favoritePages,
		additionalFeedback,
		setLikedWebsite,
		setFavoritePages,
		setAdditionalFeedback,
		storeUserFeedback,
	} = useStoreUserFeedback();

	const submitHandler = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!likedWebsite || !favoritePages.length || !additionalFeedback) {
			toggleAlertDialog();
			return;
		}

		const feedbackStoredPromise = storeUserFeedback();

		toast.promise(feedbackStoredPromise, {
			success: {
				title: 'Feedback recieved!',
				duration: 2000,
			},
			error: {
				title: 'Something went wrong!',
				description: 'An error occured while submitting your feedback. Please try again.',
				duration: 2000,
			},
			loading: {
				title: 'Submitting feedback...',
			},
		});

		setLikedWebsite('');
		setFavoritePages([]);
		setAdditionalFeedback('');
	};

	return (
		<form id="feedback" onSubmit={submitHandler}>
			<FormControl as="fieldset" color={colors.white} bg={colors.galacticPurple} p={10} borderRadius="lg">
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
						<CheckboxGroup value={favoritePages} onChange={setFavoritePages}>
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
					<Popover
						returnFocusOnClose={false}
						isOpen={alertDialogIsOpen}
						onClose={closeAlertDialog}
						placement="top"
						closeOnBlur={false}
					>
						<PopoverTrigger>
							<Button colorScheme="blue" form="feedback" type="submit">
								Submit Feedback
							</Button>
						</PopoverTrigger>
						<PopoverContent bg={colors.spaceGray}>
							<PopoverHeader fontWeight="semibold">Empty Fields</PopoverHeader>
							<PopoverArrow bg={colors.spaceGray} />
							<PopoverCloseButton />
							<PopoverBody>You must fill out all fields before submitting the feedback form.</PopoverBody>
						</PopoverContent>
					</Popover>
				</Stack>
			</FormControl>
		</form>
	);
};
