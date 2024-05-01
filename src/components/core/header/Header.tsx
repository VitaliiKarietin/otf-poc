"use client";
import { TypographyProps } from "@mui/material";
import { CustomTypography } from "./styles";

type HeaderProps = {
	children: React.ReactNode;
	props?: TypographyProps;
};

export const Header = ({ children, props }: HeaderProps) => {
	return (
		<CustomTypography {...props} >{children}</CustomTypography>
	)
}

export default Header;