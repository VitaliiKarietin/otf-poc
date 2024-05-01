import { Box, styled } from "@mui/material";

export const SectionContainer = styled(Box)(({ theme }) => ({
	paddingTop: 50,
	background: "#144661",
	paddingBottom: 30
}));

export const NewsContainer = styled(Box)(({ theme }) => ({
	margin: "50px auto 0",
	maxWidth: 1000,
	paddingLeft: 20,
	paddingRight: 20,
	[theme.breakpoints.down(1007)]: {
		maxWidth: "100%",
	},
}));

export const NewsTitleContainer = styled(Box)(({ theme }) => ({
	width: "90%",
	margin: "0 auto",
	[theme.breakpoints.down(1007)]: {
		width: "80%",
	},
}));

export const NewsItem = styled(Box)(({ theme }) => ({
	cursor: "pointer",
	"&:hover .news-description": {
		display: "block"
	},
	[theme.breakpoints.down("md")]: {
		width: "360px",
		margin: "0 auto"
	},
}));

export const NewsItemDescritpion = styled(Box)(() => ({
	display: "none",
	position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	background: "rgba(0, 0, 0, .8)",
	padding: 25
}));

export const NewsItemImage = styled("img")(() => ({
	maxWidth: "100%",
}));

export const NewsItemTitle = styled(Box)(() => ({
	background: "#002031",
	padding: 10
}));