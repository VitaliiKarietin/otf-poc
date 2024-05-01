"use client";
import { OutlinedLink as Link } from "./styles";

type CustomLinkProps = {
	children: React.ReactNode,
	fontSize?: string | number;
	href?: string;
};

export const OutlinedLink = ({ children, fontSize, href }: CustomLinkProps) => {
	return (
		<Link
			href={href}
			fontSize={fontSize}
		>
			{children}
		</Link>
	)
};

export default OutlinedLink;