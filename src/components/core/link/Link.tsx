"use client";
import { Link } from "./styles";

type CustomLinkProps = {
	children: React.ReactNode,
	fontSize?: string | number;
	href?: string;
};

export const CustomLink = ({ children, fontSize, href }: CustomLinkProps) => {
	return (
		<Link
			href={href}
			fontSize={fontSize}
		>
			{children}
		</Link>
	)
};

export default CustomLink;