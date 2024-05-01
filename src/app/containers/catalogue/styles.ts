import { styled } from "@mui/material";

export const Image = styled("img")(({ theme }) => ({
	width: 500,
	height: 350,
	objectFit: "cover",
	[theme.breakpoints.down(1007)]: {
		width: 400,
	},
}));