import { ListItem, UnorderedList } from '@chakra-ui/react';
import type { FC } from 'react';
import { colors } from '~/common/colors';
import { RoundedBox } from '~/components/rounded-box/rounded-box';

type RoundedListBoxProps = {
	list: string[];
};

export const RoundedListBox: FC<RoundedListBoxProps> = ({ list }) => (
	<RoundedBox>
		<UnorderedList color={colors.galacticPurple}>
			{list.map((item, index) => (
				<ListItem key={index}>{item}</ListItem>
			))}
		</UnorderedList>
	</RoundedBox>
);
