"use client";
import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import {
	Close,
	Menu as MenuIcon,
	Search as SearchIcon,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
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
						<Typography
							fontSize={17}
							key={it}
							sx={{
								cursor: "pointer",
								display: {
									xs: "none",
									md: "block"
								}
							}}
						>
							{it}
						</Typography>
					))}
					<IconButton
						aria-label="drawer"
						onClick={() => setOpen(true)}
					>
						<MenuIcon color="action"/>
					</IconButton>
				</MenuList>
				<Box
					display="flex"
					justifyContent="flex-end"
					mt="8px"
					sx={{
						display: {
							xs: "none",
							md: "flex"
						}
					}}
				>
					<Input.Search />
				</Box>
			</Box>
			<CustomDrawer
				open={open}
				setOpen={setOpen}
			>
				<Box
					sx={{
						py: {
							xs: "10px",
							md: "44px"
						},
						pr: {
							xs: "10px",
							md: "50px"
						}
					}}
				>
					<MenuList>
						{menuItems.map((it) => (
							<Typography
								fontSize={17}
								key={it}
								sx={{
									cursor: "pointer",
								}}
							>
								{it}
							</Typography>
						))}
						<IconButton
							aria-label="drawer"
							onClick={() => setOpen(false)}
						>
							<Close color="action"/>
						</IconButton>
					</MenuList>
					<Box
						justifyContent="center"
						sx={{
							display: {
								xs: "flex",
								md: "none"
							}
						}}
						mt="8px"
						mb="20px"
					>
						<Link href="#">
							<Image src="/OTF_logo.png" alt="OTF Logo" width={150} height={72.85} priority />
						</Link>
					</Box>
					<Box
						justifyContent="flex-end"
						alignItems="center"
						mt="5px"
						sx={{
							display: {
								xs: "none",
								md: "flex"
							}
						}}
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
					<Box
						justifyContent="center"
						sx={{
							display: {
								xs: "flex",
								md: "none"
							}
						}}
					>
						<Input.Search />
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