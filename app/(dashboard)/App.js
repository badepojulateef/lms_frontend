"use client";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { setLeftNav, useMaterialUIController } from "@/contexts";

import { LeftNav } from "@/layouts/dashboard/left-nav";
import { TopNav } from "@/layouts/dashboard/top-nav";

import { createTheme } from "../../theme";

const SIDE_NAV_WIDTH = 300;

const LayoutRoot = styled("div")(({ theme }) => ({
	display: "flex",
	flex: "1 1 auto",
	maxWidth: "100%",
	[theme.breakpoints.up("lg")]: {
		paddingLeft: SIDE_NAV_WIDTH,
	},
}));

const LayoutContainer = styled("div")({
	display: "flex",
	flex: "1 1 auto",
	flexDirection: "column",
	width: "100%",
});

const theme = createTheme();

const AppLayer = ({ children }) => {
	const [controller, dispatch] = useMaterialUIController();
	const { leftNav } = controller;
	const handleCloseLeftNav = () => setLeftNav(dispatch, false);
	const pathname = usePathname();

	const handlePathnameChange = useCallback(() => {
		if (leftNav) {
			// setLeftNav(false);
			setLeftNav(dispatch, false);
		}
	}, [leftNav]);

	useEffect(
		() => {
			handlePathnameChange();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[pathname]
	);
	return (
		<ThemeProvider theme={theme}>
			<TopNav onLeftNavOpen={() => setLeftNav(true)} />
			<LeftNav onClose={handleCloseLeftNav} open={LeftNav} />
			<LayoutRoot>
				<LayoutContainer>{children}</LayoutContainer>
			</LayoutRoot>
		</ThemeProvider>
	);
};

export default AppLayer;
