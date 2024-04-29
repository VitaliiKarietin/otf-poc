"use client";
import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import {
	Close,
	Menu as MenuIcon,
	Search as SearchIcon,
} from "@mui/icons-material";
import { Input } from "../core";
import { MenuList } from "./styles";
import { CustomDrawer } from "../core/drawer";
import { SideMenuList } from "./SideMenuList";

const menuItems = [
	"OTF STUDIOS CATALOGUE",
	"LOGIN",
	"MY AREA"
];

export const HeaderMenu = () => {
	const [open, setOpen] = useState(false);
	return (
		<Box>
			<Box mt="14px">
				<MenuList>
					{menuItems.map((it) => (
						<Typography fontSize={17} key={it}>{it}</Typography>
					))}
					<IconButton
						aria-label="drawer"
						onClick={() => setOpen(true)}
					>
						<MenuIcon color="action"/>
					</IconButton>
				</MenuList>
				<Box display="flex" justifyContent="flex-end" mt="8px">
					<Input.Search />
				</Box>
			</Box>
			<CustomDrawer
				open={open}
				setOpen={setOpen}
			>
				<Box py="44px" px="50px" pl={0}>
					<MenuList>
						{menuItems.map((it) => (
							<Typography fontSize={17} key={it}>{it}</Typography>
						))}
						<IconButton
							aria-label="drawer"
							onClick={() => setOpen(false)}
						>
							<Close color="action"/>
						</IconButton>
					</MenuList>
					<Box
						display="flex"
						justifyContent="flex-end"
						alignItems="center"
						mt="5px"
					>
						<Box mr="68px">
							<IconButton
								aria-label="search"
								onClick={() => undefined}
								onMouseDown={() => undefined}
								edge="end"
							>
								<SearchIcon />
							</IconButton>
						</Box>
						<Input.Search hideIcon />
					</Box>
					<Box p={6}>
						<SideMenuList />
					</Box>
				</Box>
			</CustomDrawer>
		</Box>
	)
};

export default HeaderMenu;