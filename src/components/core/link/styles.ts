import { styled, Link as MuiLink, Theme } from "@mui/material";

const linkStyles = (theme?: Theme) => ({
	cursor: "pointer",
	color: theme?.palette.common.white,
	textDecoration: "none",
})

export const Link = styled(MuiLink)(({ theme }) => ({
	...linkStyles(theme)
}));

export const OutlinedLink = styled(MuiLink)(({ theme }) => ({
	...linkStyles(theme),
	display: "inline-block",
	border: "1px solid #F7CE34",
	borderRadius: 50,
	padding: "10px 71px 8px",
	zIndex: 2,
	[theme.breakpoints.down(1007)]: {
		width: 225,
		padding: "15px 10px",
	},
	[theme.breakpoints.down(639)]: {
		width: "100%",
	},
	"& + &": {
		[theme.breakpoints.down(639)]: {
			marginTop: 10
		},
	}
}));

export const AnimatedShape = styled("div")(() => ({
	background: "#F4CE26",
	borderRadius: "50%",
	boxShadow: "0 0 0 0 rgba(0, 0, 0, 1)",
	margin: "10px",
	height: "30px",
	width: "30px",
	transform: "scale(1)",
	animation: "pulse 1s infinite",
	"@keyframes pulse": {
    "0%": {
			transform: "scale(.7)",
			boxShadow: "0 0 0 0 rgba(244, 206, 38, 0.7)",
		},
		"70%": {
			transform: "scale(1)",
			boxShadow: "0 0 0 8px rgba(244, 206, 38, 0.7)",
		},
		"100%": {
			transform: "scale(.7)",
			boxShadow: "0 0 0 0 rgba(244, 206, 38, 0.7)",
		}
  },
}));