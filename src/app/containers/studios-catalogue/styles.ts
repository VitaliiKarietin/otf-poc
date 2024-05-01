import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
	background: "#00091c",
}));

export const CarouselContainer = styled(Box)(({ theme }) => ({
	 display: "flex",
	 alignItems: "center",
	 [theme.breakpoints.down(1007)]: {
			flexDirection: "column"
		},
}));

export const CarouselItem = styled(Box)(({ theme }) => ({
	width: "18%",
	height: 234,
	backgroundСolor: "rgba(0, 255, 255, 0.5)",
	backgroundSize: "cover",
	backgroundPosition: "center top",
	backgroundRepeat: "repeat, no-repeat",
	cursor: "pointer",
	"&.active": {
		height: "300px !important",
    width: "28% !important",
		boxShadow: "0 0 10px 10px rgba(255,255,255,0.7)",
		zIndex: 5,
		[theme.breakpoints.down(1007)]: {
			width: "300px !important",
			height: "300px !important"
		},
	},
	[theme.breakpoints.down(1007)]: {
		width: "300px !important",
		height: "300px !important"
	},
}));

export const ItemShadowBox = styled(Box)(() => ({
	backgroundSize: 300,
	height: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-end",
	padding: "0 22px 22px",
}));