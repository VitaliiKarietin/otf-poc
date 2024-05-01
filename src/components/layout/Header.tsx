import Image from "next/image";
import { Box } from "@mui/material";
import HeaderMenu from "../navigation/HeaderMenu";
import Link from "next/link";

export const Header = () => {
	return (
		<Box
			display="flex"
			position="absolute"
			width="100%"
			top={0}
			zIndex={10}
			sx={{
				px: {
					xs: "10px",
					md: "50px"
				},
				py: {
					xs: 0,
					md: "30px"
				},
				justifyContent: {
					xs: "flex-end",
					md: "space-between"
				},
				flexDirection: {
					xs: "column",
					md: "row"
				}
			}}
		>
			<Box
				sx={{
					display: {
						xs: "none",
						md: "block"
					}
				}}
			>
				<Link href="#">
					<Image src="/OTF_logo.png" alt="OTF Logo" width={150} height={72.85} />
				</Link>
			</Box>
			<Box>
				<HeaderMenu />
			</Box>
			<Box
				textAlign="center"
				sx={{
					display: {
						xs: "block",
						md: "none"
					}
				}}
			>
				<Link href="#">
					<Image src="/OTF_logo.png" alt="OTF Logo" width={150} height={72.85} />
				</Link>
			</Box>
		</Box>
	)
};

export default Header;