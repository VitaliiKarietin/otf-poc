"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';

type SwiperProps = {
	children: React.ReactNode[] | React.ReactNode
};

export const SwiperComponent = ({ children }: SwiperProps) => {
	return (
		<Swiper
			allowTouchMove={false}
			spaceBetween={0}
			preventInteractionOnTransition
			effect={"fade"}
			speed={2500}
			observer
			centeredSlides={true}
			fadeEffect={{
				crossFade: true
			}}
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
			}}
			modules={[Autoplay, EffectFade]}
			className="mySwiper"
			style={{
				height: "100vh"
			}}
		>
			{
				Array.isArray(children) ? (
					children.map((it, key) => (
						<SwiperSlide key={`${key}-${it}`}>{it}</SwiperSlide>
					))
				) : (
					<SwiperSlide>{children}</SwiperSlide>
				)
			}
		</Swiper>
	)
};

export default SwiperComponent;