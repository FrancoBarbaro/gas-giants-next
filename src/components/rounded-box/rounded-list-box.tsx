import { ListItem, UnorderedList } from '@chakra-ui/react';
import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { RoundedBox } from '~/components/rounded-box/rounded-box';
import { colors } from '~/theme/colors';

type RoundedListBoxProps = {
	list: string[];
	fontSize: number | string;
};

export const RoundedListBox: FC<RoundedListBoxProps> = ({ list, fontSize }) => (
	<RoundedBox fontSize={fontSize}>
		<UnorderedList color={colors.galacticPurple}>
			{list.map((item, index) => (
				<ListItem key={index}>
					<ReactMarkdown
						components={{
							p: ({ children }) => <>{children}</>,
						}}
						skipHtml
					>
						{item}
					</ReactMarkdown>
				</ListItem>
			))}
		</UnorderedList>
	</RoundedBox>
);
