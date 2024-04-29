import { styled, Link as MuiLink } from "@mui/material";

export const Link = styled(MuiLink)(({ theme }) => ({
	cursor: "pointer",
	color: theme.palette.common.white,
	textDecoration: "none"
}));