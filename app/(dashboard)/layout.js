import "../../globals.css";
import { Inter } from "next/font/google";
// import { styled } from "@mui/material/styles";

import {
	MaterialUIControllerProvider,
	setLeftNav,
	useMaterialUIController,
} from "@/contexts";
// import App from "./App";
import AppLayer from "./App";
// import { useNProgress } from "@/hooks/use-progress";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Employee Portal",
	description: "Generated by create next app",
};

export default function DashboardRootLayout({ children }) {
	// useNProgress();
	return (
		<html lang="en">
			<head />
			<body className={inter.className}>
				<MaterialUIControllerProvider>
					<AppLayer>{children}</AppLayer>
				</MaterialUIControllerProvider>
			</body>
		</html>
	);
}
