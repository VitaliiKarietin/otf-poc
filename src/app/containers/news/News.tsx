"use client";
import { Header } from "@/components/core";
import { Box, Grid, Typography } from "@mui/material";
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
							imageSrc="news_image_1.jpeg"
							title="During London Screenings week Stefanie Fischer speaks to TBI on the..."
							description="As buyers flock to the UK for London TV Screenings and BBC Studios Showcase this week, TBI talks to the bosses of more than 25 distribution companies to test the..."
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<Item
							imageSrc="news_image_1.jpeg"
							title="During London Screenings week Stefanie Fischer speaks to TBI on the..."
							description="As buyers flock to the UK for London TV Screenings and BBC Studios Showcase this week, TBI talks to the bosses of more than 25 distribution companies to test the..."
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<Item
							imageSrc="news_image_1.jpeg"
							title="During London Screenings week Stefanie Fischer speaks to TBI on the..."
							description="As buyers flock to the UK for London TV Screenings and BBC Studios Showcase this week, TBI talks to the bosses of more than 25 distribution companies to test the..."
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<Item
							imageSrc="news_image_1.jpeg"
							title="During London Screenings week Stefanie Fischer speaks to TBI on the..."
							description="As buyers flock to the UK for London TV Screenings and BBC Studios Showcase this week, TBI talks to the bosses of more than 25 distribution companies to test the..."
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<Item
							imageSrc="news_image_1.jpeg"
							title="During London Screenings week Stefanie Fischer speaks to TBI on the..."
							description="As buyers flock to the UK for London TV Screenings and BBC Studios Showcase this week, TBI talks to the bosses of more than 25 distribution companies to test the..."
						/>
					</Grid>
				</Grid>
			</NewsContainer>
		</SectionContainer>
	);
};