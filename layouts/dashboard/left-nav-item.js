import Link from "next/link";
import PropTypes from "prop-types";
import { Box, ButtonBase } from "@mui/material";

export const LeftNavItem = (props) => {
	const { active = false, disabled, external, icon, path, title } = props;

	const linkProps = path
		? external
			? {
					LinkComponent: "a",
					href: path,
					target: "_blank",
			  }
			: {
					LinkComponent: Link,
					href: path,
			  }
		: {};

	return (
		<li key={title}>
			<ButtonBase
				disableRipple={true}
				sx={{
					alignItems: "center",
					borderRadius: 1,
					display: "flex",
					justifyContent: "flex-start",
					pl: "16px",
					pr: "16px",
					py: "6px",
					textAlign: "left",
					width: "100%",
					...(active && {
						// backgroundColor: "rgba(255, 255, 255, 0.04)",
						backgroundColor: "rgba(255, 255, 255, 0.04)",
					}),
					"&:hover": {
						backgroundColor: "rgba(255, 255, 255, 0.04)",
					},
				}}
				{...linkProps}
			>
				{icon && (
					<Box
						component="span"
						sx={{
							alignItems: "center",
							color: "neutral.100",
							display: "inline-flex",
							justifyContent: "center",
							mr: 2,
							...(active && {
								color: "#bb4743",
							}),
						}}
					>
						{icon}
					</Box>
				)}
				<Box
					component="span"
					sx={{
						color: "neutral.100",
						flexGrow: 1,
						fontFamily: (theme) => theme.typography.fontFamily,
						fontSize: 18,
						fontWeight: 600,
						lineHeight: "36px",
						whiteSpace: "nowrap",
						...(active && {
							color: "common.white",
						}),
						...(disabled && {
							color: "neutral.500",
						}),
					}}
				>
					{title}
				</Box>
			</ButtonBase>
		</li>
	);
};

LeftNavItem.propTypes = {
	active: PropTypes.bool,
	disabled: PropTypes.bool,
	external: PropTypes.bool,
	icon: PropTypes.node,
	path: PropTypes.string,
	title: PropTypes.string.isRequired,
};
