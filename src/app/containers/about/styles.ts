import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
	background: "#144661",
	position: "relative",
	paddingTop: 40,
	paddingBottom: 50,
	"&:before": {
		content: '""',
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: 1,
		backgroundColor: "rgba(0, 0, 0, 0.8)",
		boxShadow: "0px 20px 80px 60px rgba(0,0,0,0.9)",
		zIndex: 1,
	},
}));

export const ActionsContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-around",
	mb: "50px",
	[theme.breakpoints.down(639)]: {
		flexDirection: "column"
	},
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
	margin: "0 auto",
	[theme.breakpoints.down(1007)]: {
		width: "80%",
	},
	[theme.breakpoints.up(1007)]: {
		width: "900px",
	},
}));