"use client";
import { Box, Typography } from "@mui/material";
import { Container, ContentContainer } from "./styles";
import { AnimatedLink } from "@/components/core";
import { OutlinedLink } from "@/components/core/link/styles";

export const About = () => {
	return (
		<Container>
			<ContentContainer>
				<Box
					display="flex"
					justifyContent="space-around"
					mb="50px"
				>
					<OutlinedLink href="#">
						<Typography
							fontSize={26}
							fontFamily="revert-layer"
							fontWeight={500}
							letterSpacing={0}
							textAlign="center"
						>
							OTF STUDIOS
						</Typography>
					</OutlinedLink>
					<OutlinedLink href="#">
						<Typography
							fontSize={26}
							fontFamily="revert-layer"
							fontWeight={500}
							letterSpacing={0}
							textAlign="center"
						>
							OTF ORIGINALS
						</Typography>
					</OutlinedLink>
				</Box>
				<Typography
					fontFamily="revert"
					fontSize={25}
					fontWeight={500}
				>
					Off the Fence is an Academy award winning factual studio.
				</Typography>
				<Box mt="20px">
					<Typography
						fontFamily="revert"
						fontSize={20}
						fontWeight={300}
					>
						Owned by ZDF Studios since 2019, and established in 1994, Off the Fence is a 360° content company. We produce, acquire, localise, and distribute non-fiction programming. We offer a tailored service to rights-owners and from co-financing, co-production and finished programme sales, can play a vital role at any stage of the value chain to maximise revenue and reach on behalf of our clients.
					</Typography>
				</Box>
				<Box mt="20px">
					<Typography
						fontFamily="revert"
						fontSize={20}
						fontWeight={300}
					>
						With offices in Bristol, Amsterdam, London and Toronto, we’re able to tailor our clients needs across many different business models.
					</Typography>
				</Box>
				<Box display="flex" justifyContent="center">
					<AnimatedLink href="#">
						<Typography fontSize="25px" fontFamily="revert-layer">explore</Typography>
					</AnimatedLink>
				</Box>
			</ContentContainer>
		</Container>
	);
};