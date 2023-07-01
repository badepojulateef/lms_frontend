"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import ArrowTopRightOnSquareIcon from "@heroicons/react/24/solid/ArrowTopRightOnSquareIcon";
import ArrowLeftOnRectangleIcon from "@heroicons/react/24/solid/ArrowLeftOnRectangleIcon";
import ChevronUpDownIcon from "@heroicons/react/24/solid/ChevronUpDownIcon";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import Icon from "@mui/material/Icon";
import {
	Box,
	Button,
	Divider,
	Drawer,
	Stack,
	SvgIcon,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { Logo } from "@/components/Logo";
import { Scrollbar } from "@/components/Scrollbar";
import { items } from "./config";
import { LeftNavItem } from "./left-nav-item";
import { setLeftNav, useMaterialUIController } from "@/contexts";

export const LeftNav = (props) => {
	const { onClose } = props;
	const [controller, dispatch] = useMaterialUIController();
	const { leftNav } = controller;
	// console.log("controller", controller);
	const pathname = usePathname();
	const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

	const handleCloseLeftNav = () => setLeftNav(dispatch, false);
	console.log("leftNav", typeof leftNav);
	// console.log("open", typeof open);

	const content = (
		// <Scrollbar
		// 	sx={{
		// 		// height: "40vw",
		// 		maxHeight: "20vw",
		// 		"& .simplebar-content": {
		// 			height: "100%",
		// 			// maxHeight: "100%",
		// 		},
		// 		"& .simplebar-scrollbar:before": {
		// 			background: "neutral.400",
		// 		},
		// 	}}
		// >
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
			}}
		>
			<Box sx={{ p: 3 }}>
				<Box
					display="flex"
					justifyContent="space-between"
					// alignItems="baseline"
				>
					<Box
						component={NextLink}
						href="/"
						sx={{
							display: "inline-flex",
							height: 32,
							width: 32,
						}}
					>
						<Logo />
					</Box>
					{!lgUp && (
						<SvgIcon
							fontSize="medium"
							sx={{ color: "neutral.100" }}
							onClick={handleCloseLeftNav}
						>
							<XMarkIcon />
						</SvgIcon>
					)}
				</Box>
				<Box
					sx={{
						alignItems: "center",
						backgroundColor: "rgba(255, 255, 255, 0.04)",
						borderRadius: 1,
						cursor: "pointer",
						display: "flex",
						justifyContent: "space-between",
						mt: 2,
						p: "12px",
					}}
				>
					<div>
						<Typography color="inherit" variant="h3">
							Adeleke
						</Typography>
						<Typography color="neutral.400" variant="h4">
							Gbolahan
						</Typography>
					</div>
					<SvgIcon fontSize="small" sx={{ color: "neutral.500" }}>
						<ChevronUpDownIcon />
					</SvgIcon>
				</Box>
			</Box>
			<Divider sx={{ borderColor: "neutral.700" }} />
			<Box
				component="nav"
				sx={{
					flexGrow: 1,
					px: 2,
					py: 3,
				}}
			>
				<Stack
					component="ul"
					spacing={0.5}
					sx={{
						listStyle: "none",
						p: 0,
						m: 0,
					}}
				>
					{items.map((item) => {
						const active = item.path
							? pathname === item.path
							: false;
						// console.log("item", item);
						return (
							<LeftNavItem
								active={active}
								disabled={item.disabled}
								external={item.external}
								icon={item.icon}
								key={item.title}
								path={item.path}
								title={item.title}
							/>
						);
					})}
				</Stack>
			</Box>
			<Divider sx={{ borderColor: "neutral.700" }} />
			<Box
				sx={{
					px: 2,
					py: 3,
				}}
			>
				{/* <Typography color="neutral.100" variant="subtitle2">
						Need more features?
					</Typography> */}
				{/* <Typography color="neutral.500" variant="body2">
						Check out our Pro solution template.
					</Typography> */}
				{/* <Box
						sx={{
							display: "flex",
							mt: 2,
							mx: "auto",
							width: "160px",
							"& img": {
								width: "100%",
							},
						}}
					>
						<img alt="Go to pro" src="/assets/devias-kit-pro.png" />
					</Box> */}
				<Button
					component="a"
					endIcon={
						<SvgIcon fontSize="small">
							<ArrowLeftOnRectangleIcon />
						</SvgIcon>
					}
					fullWidth
					// href="https://material-kit-pro-react.devias.io/"
					sx={{ mt: 2 }}
					target="_blank"
					variant="contained"
				>
					Log out
				</Button>
			</Box>
		</Box>
		// </Scrollbar>
	);

	if (lgUp) {
		return (
			<Drawer
				anchor="left"
				// open={leftNav}
				onClose={onClose}
				PaperProps={{
					sx: {
						backgroundColor: "neutral.800",
						color: "common.white",
						width: 280,
					},
				}}
				variant="permanent"
			>
				{content}
			</Drawer>
		);
	}

	return (
		<Drawer
			anchor="left"
			// open={leftNav}
			onClose={onClose}
			PaperProps={{
				sx: {
					backgroundColor: "neutral.800",
					color: "common.white",
					width: 280,
				},
			}}
			sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
			variant="temporary"
		>
			{content}
		</Drawer>
	);
};

LeftNav.propTypes = {
	onClose: PropTypes.func,
	open: PropTypes.bool,
};
