import { Typography, styled } from "@mui/material";

export const CustomTypography = styled(Typography)(() => ({
	position: "relative",
	"&::after": {
		content: '""',
		display: "inline-block",
		marginLeft: 10,
		marginBottom: -8,
		width: 20,
		height: 20,
		borderRadius: 50,
		background: "#F7D034",
	}
}));