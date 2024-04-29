import React from "react"
import { Drawer } from "@mui/material"

type CustomDrawerProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
	children: React.ReactNode
};

export const CustomDrawer = ({ open, setOpen, children }: CustomDrawerProps) => {
	return (
		<React.Fragment key="drawer">
			<Drawer
				anchor="right"
				open={open}
				onClose={() => setOpen(false)}
				transitionDuration={0}
				hideBackdrop
				PaperProps={{
					sx: {
						backgroundColor: "rgba(15,42,51,0.9)",
						backgroundImage: "none"
					}
				}}
				sx={{
					position: "absolute",
					"& .MuiPaper-root": {
						width: 630,
						height: "100%",
						position: "absolute"
					},
				}}
			>
				{children}
			</Drawer>
		</React.Fragment>
	)
};

export default CustomDrawer;