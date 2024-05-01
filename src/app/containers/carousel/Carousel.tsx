"use client";
import { Box, Typography } from "@mui/material";
import Swiper from "@/components/core/swiper/swiper";
import {
	SwiperContentContainer,
	SwiperImageContainer,
	SwiperSlideContainer
} from "./styles";
import { AnimatedLink } from "@/components/core";

export const Carousel = () => {
	return (
		<Box width="100%" height="100vh">
			<Swiper>
				<SwiperSlideContainer>
					<SwiperImageContainer
						sx={{
							backgroundImage: "url(/programme_1_photo.jpeg)",
						}}
					>
						<SwiperContentContainer>
							<Typography fontSize="50px" fontFamily="revert-layer">
								revolutions that changed history
							</Typography>
							<Typography fontFamily="revert-layer" fontWeight={300} marginBottom="30px">
								Discover the complex  truth behind the worlds ancient revolutions and revolts.  
							</Typography>
							<AnimatedLink href="#">
								<Typography fontSize="25px" fontFamily="revert-layer">explore</Typography>
							</AnimatedLink>
						</SwiperContentContainer>
					</SwiperImageContainer>
				</SwiperSlideContainer>
				<SwiperSlideContainer>
					<SwiperImageContainer
						sx={{
							backgroundImage: "url(/programme_2_photo.jpeg)",
						}}
					>
						<SwiperContentContainer>
							<Typography fontSize="50px" fontFamily="revert-layer">
								great species of africa
							</Typography>
							<Typography fontFamily="revert-layer" fontWeight={300} marginBottom="30px">
								From the empathetic elephant, lightning-fast cheetah, beautiful yet elusive leopard, misunderstood vulture, awe-inspiring wildebeest, intelligent hyena to the iconic lion, get to know the African Savanna’s star-studded ensemble cast in nature’s symphony of life. 
							</Typography>
							<AnimatedLink href="#">
								<Typography fontSize="25px" fontFamily="revert-layer">explore</Typography>
							</AnimatedLink>
						</SwiperContentContainer>
					</SwiperImageContainer>
				</SwiperSlideContainer>
				<SwiperSlideContainer>
					<SwiperImageContainer
						sx={{
							backgroundImage: "url(/programme_3_photo.jpeg)",
						}}
					>
						<SwiperContentContainer>
							<Typography fontSize="50px" fontFamily="revert-layer">
								paris : a new revolution (w/t)
							</Typography>
							<Typography fontFamily="revert-layer" fontWeight={300} marginBottom="30px">
								Can the Paris Paralympics ignite a global disability revolution the likes the world has never seen before?  
							</Typography>
							<AnimatedLink href="#">
								<Typography fontSize="25px" fontFamily="revert-layer">explore</Typography>
							</AnimatedLink>
						</SwiperContentContainer>
					</SwiperImageContainer>
				</SwiperSlideContainer>
				<SwiperSlideContainer>
					<SwiperImageContainer
						sx={{
							backgroundImage: "url(/programme_4_photo.jpeg)",
						}}
					>
						<SwiperContentContainer>
							<Typography fontSize="50px" fontFamily="revert-layer">
								around the world 300 days
							</Typography>
							<Typography fontFamily="revert-layer" fontWeight={300} marginBottom="30px">
								A epic adventure on the world's most challenging sailing race, known for breaking both boats and sailors - The Golden Globe Race.
							</Typography>
							<AnimatedLink href="#">
								<Typography fontSize="25px" fontFamily="revert-layer">explore</Typography>
							</AnimatedLink>
						</SwiperContentContainer>
					</SwiperImageContainer>
				</SwiperSlideContainer>
				<SwiperSlideContainer>
					<SwiperImageContainer
						sx={{
							backgroundImage: "url(/programme_5_photo.jpeg)",
						}}
					>
						<SwiperContentContainer>
							<Typography fontSize="50px" fontFamily="revert-layer">
								ocean wonders (series 2)
							</Typography>
							<Typography fontFamily="revert-layer" fontWeight={300} marginBottom="30px">
								Heavy metal marine biologist, ‘Blowfish’ Uncovers more amazing Ocean Wonders.
							</Typography>
							<AnimatedLink href="#">
								<Typography fontSize="25px" fontFamily="revert-layer">explore</Typography>
							</AnimatedLink>
						</SwiperContentContainer>
					</SwiperImageContainer>
				</SwiperSlideContainer>
				<SwiperSlideContainer>
					<SwiperImageContainer
						sx={{
							backgroundImage: "url(/programme_6_photo.jpeg)",
						}}
					>
						<SwiperContentContainer>
							<Typography fontSize="50px" fontFamily="revert-layer">
								forging fate: the disappearing art dealer
							</Typography>
							<Typography fontFamily="revert-layer" fontWeight={300} marginBottom="30px">
								This thrilling documentary delves into the exhilarating yet murky world of high-end art, telling the astonishing story of Inigo Philbrick, an enigmatic art prodigy. Philbrick's journey from a revered art dealer to a notorious swindler is as dramatic as it is scandalous.
							</Typography>
							<AnimatedLink href="#">
								<Typography fontSize="25px" fontFamily="revert-layer">explore</Typography>
							</AnimatedLink>
						</SwiperContentContainer>
					</SwiperImageContainer>
				</SwiperSlideContainer>
				<SwiperSlideContainer>
					<SwiperImageContainer
						sx={{
							backgroundImage: "url(/programme_7_photo.jpeg)",
						}}
					>
						<SwiperContentContainer>
							<Typography fontSize="50px" fontFamily="revert-layer">
								female spies: courage and espionage in wwii
							</Typography>
							<Typography fontFamily="revert-layer" fontWeight={300} marginBottom="30px">
								A six part archive-driven series on the heroics and villainy of WWII spies, with women at the centre of high-risk operations.  
							</Typography>
							<AnimatedLink href="#">
								<Typography fontSize="25px" fontFamily="revert-layer">explore</Typography>
							</AnimatedLink>
						</SwiperContentContainer>
					</SwiperImageContainer>
				</SwiperSlideContainer>
			</Swiper>
		</Box>
	)
};