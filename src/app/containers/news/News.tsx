"use client";
import { Header } from "@/components/core";
import { Grid, Typography } from "@mui/material";
import {
	NewsContainer,
	NewsTitleContainer,
	SectionContainer
} from "./styles";
import { Item } from "./NewsItem";

export const News = () => {
	return (
		<SectionContainer>
			<NewsTitleContainer maxWidth="lg">
				<Grid container justifyContent="center">
					<Grid item>
						<Header
							props={{
								fontSize: "60px",
								textAlign: "center",
								letterSpacing: "-0.5px"
							}}
						>
							news
						</Header>
						<Typography
							textAlign="center"
							fontSize="28px"
							fontFamily="revert"
							fontWeight={300}
						>
							Keep up to date with all you need to know from the Off the Fence Team, the latest news, plus interviews and insights from the world of TV and film.
						</Typography>
					</Grid>
				</Grid>
			</NewsTitleContainer>
			<NewsContainer>
				<Grid
					container
					columnSpacing={3}
					rowSpacing={3}
				>
					<Grid item xs={12} md={4}>
						<Item
							imageSrc="news_image_1.jpeg"
							title="During London Screenings week Stefanie Fischer speaks to TBI on the..."
							description="As buyers flock to the UK for London TV Screenings and BBC Studios Showcase this week, TBI talks to the bosses of more than 25 distribution companies to test the..."
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<Item
							imageSrc="news_image_2.jpeg"
							title="Harder Than You Think Appoints otf as distribution agent for ground..."
							description="Emmy award winning Harder Than You Think (HTYT) and Off The Fence (OTF) have announced today that OTF has been appointed to find partners for the next four projects from..."
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<Item
							imageSrc="news_image_3.jpeg"
							title="otf books first orders for Silverback - String of pre-release deals..."
							description="Factual content specialist Off the Fence (otf) has announced the first sales for its latest feature-length documentary, Silverback, produced by OTF Studios in association..."
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<Item
							imageSrc="news_image_4.jpeg"
							title="otf Partners with Boomsatsuma on Series 2 of Ocean wonders to be shot..."
							description="Off The Fence (OTF) and boomsatsuma, the award-winning specialist in education for the next generation of talent for the creative industries, have entered into a..."
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<Item
							imageSrc="news_image_5.jpeg"
							title="otf's Silverback takes top award at Jackson Wild Media Awards"
							description="THE NEWS IS OUT!! We are over the moon (and beyond!) that otf original ‘Silverback' was a three-time winner at last night's Jackson Wild Media Awards. Most of all..."
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<Item
							imageSrc="news_image_6.jpeg"
							title="‘Diversity is vital to the future of storytelling."
							description="OTF CEO, Bo Stehmeier sat down with C21Media to highlight the importance of diversity within storytelling and the media industry. Since it launched in Amsterdam in 1994,..."
						/>
					</Grid>
				</Grid>
			</NewsContainer>
		</SectionContainer>
	);
};