"use client";
import { AnimatedShape, Link } from "./styles";

type CustomLinkProps = {
	children: React.ReactNode,
	fontSize?: string | number;
	href?: string;
};

export const AnimatedLink = ({ children, fontSize, href }: CustomLinkProps) => {
	return (
		<Link
			display="flex"
			alignItems="center"
			href={href}
			fontSize={fontSize}
		>
			{children}
			<AnimatedShape />
		</Link>
	)
};

export default AnimatedLink;