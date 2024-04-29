import {
	Box,
	List,
	ListItem,
	Typography,
	Divider
} from "@mui/material";
import { CustomListItem } from "./styles";

const items = [
	"HOME",
	"ABOUT US",
	"OTF STUDIOS CATALOGUE",
	"OTF ORIGINALS",
	"OTF STUDIOS",
	"NEWS",
	"OUR TEAM",
	"CONTACT",
];

export const SideMenuList = () => {
	return (
		<Box>
			<List>
				{items.map((it) => (
					<>
						<CustomListItem disableGutters>
							<Typography variant="h6" fontWeight={300} lineHeight="24.5px">
								{it}
							</Typography>
						</CustomListItem>
						<Divider sx={{ borderColor: "white" }} />
					</>
				))}
			</List>
		</Box>
	)
};