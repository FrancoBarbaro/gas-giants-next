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
	<RoundedBox fontSize={fontSize} w="100%">
		<UnorderedList color={colors.galacticPurple}>
			{list.map((item, index) => (
				<ListItem key={index} fontSize={{ xxs: 10, xs: 'xs', sm: 'sm', md: 'sm', lg: 'md', xxl: '2xl' }}>
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
