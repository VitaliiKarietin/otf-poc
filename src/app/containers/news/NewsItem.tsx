import { Box, Typography } from "@mui/material";
import {
	NewsItem,
	NewsItemDescritpion,
	NewsItemImage,
	NewsItemTitle
} from "./styles";

type ItemProps = {
	imageSrc: string;
	title: string;
	description: string;
};

export const Item = ({
	imageSrc,
	title,
	description,
}: ItemProps) => {
	return (
		<NewsItem>
			<Box
				lineHeight={0}
				position="relative"
			>
				<NewsItemImage src={imageSrc}/>
				<NewsItemDescritpion className="news-description">
					<Typography
						fontSize="14px"
						fontFamily="revert"
						fontWeight={300}
					>
						{description}
					</Typography>
				</NewsItemDescritpion>
			</Box>
			<NewsItemTitle>
				<Typography
					fontFamily="revert"
					fontWeight={300}
					letterSpacing="-0.3px"
				>
					{title}
				</Typography>
			</NewsItemTitle>
		</NewsItem>
	);
}; 