import Image from "next/image";
import { Box } from "@mui/material";
import HeaderMenu from "../navigation/HeaderMenu";
import Link from "next/link";

export const Header = () => {
	return (
		<Box
			py="30px"
			px="50px"
			display="flex"
			justifyContent="space-between"
			position="absolute"
			width="100%"
			top={0}
			zIndex={10}
		>
			<Link href="#">
				<Image src="/OTF_logo.png" alt="OTF Logo" width={150} height={72.85} />
			</Link>
			<Box>
				<HeaderMenu />
			</Box>
		</Box>
	)
};

export default Header;