"use client";
import { createTheme } from "../../theme";
import "../globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { LeftNav } from "@/layouts/dashboard/left-nav";
import { TopNav } from "@/layouts/dashboard/top-nav";
import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

const SIDE_NAV_WIDTH = 300;

export const metadata = {
	title: "Employee Portal",
	description: "Generated by create next app",
};

const LayoutRoot = styled("div")(({ theme }) => ({
	display: "flex",
	flex: "1 1 auto",
	maxWidth: "100%",
	height: "100%",
	// [theme.breakpoints.up("lg")]: {
	// 	paddingLeft: SIDE_NAV_WIDTH,
	// },
}));

const LayoutContainer = styled("div")({
	display: "flex",
	flex: "1 1 auto",
	flexDirection: "column",
	width: "100%",
});

const theme = createTheme();

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />
			<body className={inter.className}>
				<ThemeProvider theme={theme}>
					{/* <TopNav />
					<LeftNav /> */}
					<LayoutRoot>
						<LayoutContainer>aaaaa</LayoutContainer>
						<LayoutContainer>
							<Grid
								xs={12}
								lg={6}
								// height="100%"
								// maxHeight="100vw"
								// minHeight="50vw"
								sx={{
									alignItems: "center",
									background:
										"radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
									color: "white",
									display: "flex",
									justifyContent: "center",
									"& img": {
										maxWidth: "100%",
									},
									height: "100% !important",
									maxHeight: "100vw",
								}}
							>
								<Box sx={{ p: 3 }}>
									<Typography
										align="center"
										color="inherit"
										sx={{
											fontSize: "48px",
											lineHeight: "32px",
											mb: 5,
										}}
										variant="h1"
									>
										Welcome to{" "}
										<Box
											component="a"
											sx={{ color: "#15B79E" }}
											target="_blank"
										>
											Durban Airways
										</Box>
									</Typography>
									<Typography
										align="center"
										sx={{ mb: 3 }}
										variant="subtitle1"
									>
										A professional Airways that keeps your
										dreams anytime, anywhere.
									</Typography>
									<img
										alt=""
										src="/assets/auth-illustration.svg"
									/>
								</Box>
							</Grid>
						</LayoutContainer>
					</LayoutRoot>
					{/* <Box
						component="main"
						sx={{
							display: "flex",
							flex: "1 1 auto",
						}}
					>
						<Grid container sx={{ flex: "1 1 auto" }}>
							<Grid
								xs={12}
								lg={6}
								sx={{
									backgroundColor: "background.paper",
									display: "flex",
									flexDirection: "column",
									position: "relative",
								}}
							>
								ddddd
							</Grid>
							<p>gggggg</p>
						</Grid>
					</Box> */}
				</ThemeProvider>
			</body>
		</html>
	);
}