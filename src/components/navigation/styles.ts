import styled from "@emotion/styled";
import { ListItem } from "@mui/material";

export const MenuList = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	"& > p, & > .MuiButtonBase-root": {
		marginLeft: 40
	}
}));

export const CustomListItem = styled(ListItem)(() => ({
	paddingTop: "15px",
	paddingBottom: "10px"
}))