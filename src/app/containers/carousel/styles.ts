import { Box, styled } from "@mui/material";

export const SwiperImageContainer = styled("div")(() => ({
	width: "100%",
	height: "100%",
	position: "fixed",
	backgroundPosition: "bottom center",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundColor: "#051542",
	display: "flex",
	justifyContent: "center",
	flexDirection: "column",
	zIndex: 1,
	"&:before": {
		content: '""',
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		background: "rgba(0, 0, 0, .35)"
	}
}));

export const SwiperSlideContainer = styled(Box)(() => ({
	width: "100%",
	height: "100%",
}));

export const SwiperContentContainer = styled(Box)(({ theme }) => ({
	width: "80%",
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	paddingTop: "6%",
	zIndex: 2,
	[theme.breakpoints.down("md")]: {
		width: "80%",
		marginLeft: "10%"
	},
	[theme.breakpoints.up("md")]: {
		width: "800px",
		marginLeft: 140
	},
}));
