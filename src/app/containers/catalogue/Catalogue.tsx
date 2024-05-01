"use client";
import { Header } from "@/components/core";
import { Box, Typography } from "@mui/material";
import { Image } from "./styles";

export const Catalogue = () => {
	return (
		<Box
			bgcolor="#002031"
			pt="50px"
			pb="60px"
		>
			<Header
				props={{
					fontSize: "60px",
					textAlign: "center",
				}}
			>
				catalogue
			</Header>
			<Typography
				px="10%"
				textAlign="center"
				fontSize={28}
				fontWeight={300}
				fontFamily="revert"
				mb="50px"
			>
				Keep up to date with our latest catalogues and programmes.
			</Typography>
			<a target="_blank" href="https://online.flipbuilder.com/joow/vmpo/">
				<Box
					display="flex"
					justifyContent="center"
				>
					<Image src="/catalogue_image.png" alt="catalogue" />
				</Box>
			</a>
		</Box>
	);
};