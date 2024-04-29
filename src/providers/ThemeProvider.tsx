'use client';
import { ThemeProvider, createTheme } from "@mui/material";

const appTheme = createTheme({
	palette: {
		mode: "dark"
	}
});

export const MuiThemeProvider = ({ children }: { children: React.ReactNode}) => {
	return (
		<ThemeProvider theme={appTheme}>
			{children}
		</ThemeProvider>
	);
};