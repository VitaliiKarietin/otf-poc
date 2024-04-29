import {
	Box,
	Grid,
	IconButton,
	Typography,
	Link
} from "@mui/material";
import {
	Twitter,
	Instagram,
	LinkedIn,
} from "@mui/icons-material";
import Image from "next/image";
import { CustomLink } from "../core";

export const Footer = () => {
	return (
		<>
			<Box
				p="50px"
				sx={{
					backgroundColor: "#193354",
				}}
				minHeight={360}
			>
				<Grid container spacing={2} columns={16}>
					<Grid item xs={3}>
						<Box maxWidth={200}>
							<Image
								src="/footer_logo_1.png"
								alt="OTF Logo"
								style={{
									width: '100%',
									height: 'auto',
								}}
								width={200}
      					height={27.48}
							/>
						</Box>
						<Box maxWidth={75} mt="30px">
							<Image
								src="/footer_logo_2.png"
								alt="OTF Logo"
								style={{
									width: '100%',
									height: 'auto',
								}}
								width={200}
								height={27.48}
							/>
						</Box>
					</Grid>
					<Grid item xs={9} display="flex">
						<Box display="flex" flex={1} pl={4}>
							<Box flex={1}>
								<Typography fontWeight={700}>amsterdam</Typography>
								<Typography mb="8px" mt="10px" fontWeight={100} fontFamily="revert">
									Herengracht 105-107<br/>
									1015 BE Amsterdam<br/>
									The Netherlands<br/>
								</Typography>
								<Typography fontSize={10}>Tel: +31 20 5200 222</Typography>
							</Box>
							<Box flex={1}>
								<Typography fontWeight={700}>london</Typography>
								<Typography mb="5px" mt="10px" fontWeight={100} fontFamily="revert">
									1st Floor<br/>
									3 Orchard Place<br/>
									London<br/>
									SW1H 0BF<br/>
								</Typography>
								<CustomLink fontSize={10}>info@offthefence.com</CustomLink>
							</Box>
							<Box flex={1}>
								<Typography fontWeight={700}>bristol</Typography>
								<Typography mb="8px" mt="10px" fontWeight={100} fontFamily="revert">
									20 Elmdale Road<br/>
									Tyndalls Park<br/>
									Bristol<br/>
									BS8 1SG<br/>
								</Typography>
								<Typography fontSize={10}>Tel: +44 117 909 7560</Typography>
							</Box>
							<Box flex={1}>
								<Typography fontWeight={700}>toronto</Typography>
								<Typography mb="5px" mt="10px" fontWeight={100} fontFamily="revert">
									15 Wellesley Street W<br/>
									Unit 201<br/>
									Toronto<br/>
									ON M4Y 0G7<br/>
								</Typography>
								<CustomLink fontSize={10}>info@offthefence.com</CustomLink>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={4}>
						<Box display="flex" flex={1} justifyContent="flex-end">
							<Link href="https://twitter.com/offthefence">
								<Twitter sx={{ fontSize: 42 }} color="action"/>
							</Link>
							<Link href="https://www.linkedin.com/company/off-the-fence/">
								<LinkedIn sx={{ fontSize: 42 }} color="action"/>
							</Link>
							<Link href="https://www.instagram.com/offthefencebv/?hl=en">
								<Instagram sx={{ fontSize: 42 }} color="action" />
							</Link>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box
				py="10px"
				sx={{
					backgroundColor: "#002031"
				}}
			>
				<Typography align="center">
					<CustomLink href="https://www.mindcorp.co.uk/mindcorp-relaunches-off-the-fence/">
						Website Designed & Powered by mindcorp and OTV Systems
					</CustomLink>
					{" - "}
					<CustomLink href="https://www.offthefence.com/PrivacyPolicy">Privacy Policy</CustomLink>
				</Typography>
			</Box>
		</>
	)
};

export default Footer;