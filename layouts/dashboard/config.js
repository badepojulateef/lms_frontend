import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import CogIcon from "@heroicons/react/24/solid/CogIcon";
import LockClosedIcon from "@heroicons/react/24/solid/LockClosedIcon";
import ShoppingBagIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UserPlusIcon from "@heroicons/react/24/solid/UserPlusIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import { SvgIcon } from "@mui/material";

export const items = [
	{
		title: "Dashboard",
		path: "/home",
		icon: (
			<SvgIcon fontSize="small">
				<ChartBarIcon />
			</SvgIcon>
		),
	},
	{
		title: "Employees",
		path: "/Employees",
		icon: (
			<SvgIcon fontSize="small">
				<UsersIcon />
			</SvgIcon>
		),
	},
	{
		title: "Leave",
		path: "/Leave",
		icon: (
			<SvgIcon fontSize="small">
				<ShoppingBagIcon />
			</SvgIcon>
		),
	},
	{
		title: "Profile",
		path: "/Profile",
		icon: (
			<SvgIcon fontSize="small">
				<UserIcon />
			</SvgIcon>
		),
	},
	{
		title: "Settings",
		path: "/Settings",
		icon: (
			<SvgIcon fontSize="small">
				<CogIcon />
			</SvgIcon>
		),
	},
	// {
	// 	title: "Login",
	// 	path: "/auth/login",
	// 	icon: (
	// 		<SvgIcon fontSize="small">
	// 			<LockClosedIcon />
	// 		</SvgIcon>
	// 	),
	// },
	// {
	// 	title: "Register",
	// 	path: "/auth/register",
	// 	icon: (
	// 		<SvgIcon fontSize="small">
	// 			<UserPlusIcon />
	// 		</SvgIcon>
	// 	),
	// },
	// {
	// 	title: "Error",
	// 	path: "/404",
	// 	icon: (
	// 		<SvgIcon fontSize="small">
	// 			<XCircleIcon />
	// 		</SvgIcon>
	// 	),
	// },
	{
		title: "Performance",
		path: "/Performance",
		icon: (
			<SvgIcon fontSize="small">
				<ChartBarIcon />
			</SvgIcon>
		),
	},
	{
		title: "Training",
		path: "/Training",
		icon: (
			<SvgIcon fontSize="small">
				<ChartBarIcon />
			</SvgIcon>
		),
	},
	{
		title: "Promotion",
		path: "/Promotion",
		icon: (
			<SvgIcon fontSize="small">
				<ChartBarIcon />
			</SvgIcon>
		),
	},
	{
		title: "Resignation",
		path: "/Resignation",
		icon: (
			<SvgIcon fontSize="small">
				<ChartBarIcon />
			</SvgIcon>
		),
	},
	{
		title: "Termination",
		path: "/Termination",
		icon: (
			<SvgIcon fontSize="small">
				<UsersIcon />
			</SvgIcon>
		),
	},
	// {
	// 	title: "Leave",
	// 	path: "/leave",
	// 	icon: (
	// 		<SvgIcon fontSize="small">
	// 			<ShoppingBagIcon />
	// 		</SvgIcon>
	// 	),
	// },
	// {
	// 	title: "Profile",
	// 	path: "/profile",
	// 	icon: (
	// 		<SvgIcon fontSize="small">
	// 			<UserIcon />
	// 		</SvgIcon>
	// 	),
	// },
	// {
	// 	title: "Settings",
	// 	path: "/settings",
	// 	icon: (
	// 		<SvgIcon fontSize="small">
	// 			<CogIcon />
	// 		</SvgIcon>
	// 	),
	// },
	// {
	// 	title: "Login",
	// 	path: "/auth/login",
	// 	icon: (
	// 		<SvgIcon fontSize="small">
	// 			<LockClosedIcon />
	// 		</SvgIcon>
	// 	),
	// },
];
