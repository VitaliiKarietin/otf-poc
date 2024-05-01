"use client";
import { Box, Typography } from "@mui/material";
import { CarouselContainer, CarouselItem, ItemShadowBox } from "./styles";
import { useState } from "react";
import { AnimatedLink } from "@/components/core";

export const StudiosCatalogue = () => {
	const [hovered, setHovered] = useState(3);
	const toggleHover = (value: number) => {
		setHovered(value)
	};
	return (
		<Box pt={22} pb={6}>
			<CarouselContainer>
				<CarouselItem
					sx={{
						backgroundImage: "url(catalogue_1_image.jpeg)"
					}}
					className={hovered === 1 ? "active" : ""}
					onMouseEnter={() => toggleHover(1)}
				>
					<ItemShadowBox
						sx={{
							backgroundImage: "url(carousel-lowlight.png)"
						}}
					>
						<Typography
							fontSize={hovered === 1 ? "28px" : "20px"}
							fontFamily="revert"
							fontWeight={500}
						>
							Cursed Histories (Series 2)
						</Typography>
						<Typography
							mt="15px"
							fontSize={hovered === 1 ? "14px" : "11px"}
							fontFamily="revert"
							fontWeight={200}
							color="#e34c31"
						>
							HISTORY &nbsp;&nbsp;&nbsp; 6 x 60'
						</Typography>
					</ItemShadowBox>
				</CarouselItem>
				<CarouselItem
					sx={{
						backgroundImage: "url(catalogue_2_image.jpeg)"
					}}
					className={hovered === 2 ? "active" : ""}
					onMouseEnter={() => toggleHover(2)}
				>
					<ItemShadowBox
						sx={{
							backgroundImage: "url(carousel-lowlight.png)"
						}}
					>
						<Typography
							fontSize={hovered === 2 ? "28px" : "20px"}
							fontFamily="revert"
							fontWeight={500}
						>
							Flying Knights
						</Typography>
						<Typography
							mt="15px"
							fontSize={hovered === 2 ? "14px" : "11px"}
							fontFamily="revert"
							fontWeight={200}
							color="#a1afb0"
						>
							SCIENCE &nbsp;&nbsp;&nbsp; 4 x 60'
						</Typography>
					</ItemShadowBox>
				</CarouselItem>
				<CarouselItem
					sx={{
						backgroundImage: "url(catalogue_3_image.jpeg)"
					}}
					className={hovered === 3 ? "active" : ""}
					onMouseEnter={() => toggleHover(3)}
				>
					<ItemShadowBox
						sx={{
							backgroundImage: "url(carousel-lowlight.png)"
						}}
					>
						<Typography
							fontSize={hovered === 3 ? "28px" : "20px"}
							fontFamily="revert"
							fontWeight={500}
						>
							Road to Tokyo
						</Typography>
						<Typography
							mt="15px"
							fontSize={hovered === 3 ? "14px" : "11px"}
							fontFamily="revert"
							fontWeight={200}
							color="#eda52f"
						>
							PEOPLE & CULTURE &nbsp;&nbsp;&nbsp; 3 x 60'
						</Typography>
					</ItemShadowBox>
				</CarouselItem>
				<CarouselItem
					sx={{
						backgroundImage: "url(catalogue_4_image.jpeg)"
					}}
					className={hovered === 4 ? "active" : ""}
					onMouseEnter={() => toggleHover(4)}
				>
					<ItemShadowBox
						sx={{
							backgroundImage: "url(carousel-lowlight.png)"
						}}
					>
						<Typography
							fontSize={hovered === 4 ? "28px" : "20px"}
							fontFamily="revert"
							fontWeight={500}
						>
							Game of Leopard Thrones, A
						</Typography>
						<Typography
							mt="15px"
							fontSize={hovered === 4 ? "14px" : "11px"}
							fontFamily="revert"
							fontWeight={200}
							color="#48a346"
						>
							NATURE & WILDLIFE &nbsp;&nbsp;&nbsp; 3 x 60'
						</Typography>
					</ItemShadowBox>
				</CarouselItem>
				<CarouselItem
					sx={{
						backgroundImage: "url(catalogue_5_image.jpeg)"
					}}
					className={hovered === 5 ? "active" : ""}
					onMouseEnter={() => toggleHover(5)}
				>
					<ItemShadowBox
						sx={{
							backgroundImage: "url(carousel-lowlight.png)"
						}}
					>
						<Typography
							fontSize={hovered === 5 ? "28px" : "20px"}
							fontFamily="revert"
							fontWeight={500}
						>
							Pharaohs: Rise and Fall
						</Typography>
						<Typography
							mt="15px"
							fontSize={hovered === 5 ? "14px" : "11px"}
							fontFamily="revert"
							fontWeight={200}
							color="#e34c31"
						>
							HISTORY &nbsp;&nbsp;&nbsp; 4 x 60'
						</Typography>
					</ItemShadowBox>
				</CarouselItem>
			</CarouselContainer>
			<Box display="flex" justifyContent="center" mt="60px">
				<AnimatedLink href="#">
					<Typography fontSize="25px" fontFamily="revert-layer">
						OTF STUDIOS CATALOGUE
					</Typography>
				</AnimatedLink>
			</Box>
		</Box>
	);
};