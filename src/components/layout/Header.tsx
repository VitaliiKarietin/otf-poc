import Image from "next/image";
import { Box } from "@mui/material";
import HeaderMenu from "../navigation/HeaderMenu";

export const Header = () => {
	return (
		<Box
			py="30px"
			px="50px"
			display="flex"
			justifyContent="space-between"
		>
			<Image src="/OTF_logo.png" alt="OTF Logo" width={150} height={72.85} />
			<Box>
				<HeaderMenu />
			</Box>
		</Box>
	)
};

export default Header;