"use client";
import PropTypes from "prop-types";
import { format } from "date-fns";
import {
	Avatar,
	Box,
	Card,
	Checkbox,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TablePagination,
	TableRow,
	Typography,
} from "@mui/material";
import { Scrollbar } from "@/components/Scrollbar";
import { getInitials } from "@/utils/get-initials";

export const EmployeeTable = (props) => {
	const {
		count = 0,
		items = [],
		onDeselectAll,
		onDeselectOne,
		onPageChange = () => {},
		onRowsPerPageChange,
		onSelectAll,
		onSelectOne,
		page = 0,
		rowsPerPage = 0,
		selected = [],
	} = props;

	const selectedSome = selected.length > 0 && selected.length < items.length;
	const selectedAll = items.length > 0 && selected.length === items.length;

	return (
		<Card>
			<Scrollbar>
				<Box sx={{ minWidth: 800 }}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell padding="checkbox">
									<Checkbox
										checked={selectedAll}
										indeterminate={selectedSome}
										onChange={(event) => {
											if (event.target.checked) {
												onSelectAll?.();
											} else {
												onDeselectAll?.();
											}
										}}
									/>
								</TableCell>
								<TableCell>Name</TableCell>
								<TableCell>Email</TableCell>
								<TableCell>Location</TableCell>
								<TableCell>Phone</TableCell>
								<TableCell>Signed Up</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{items.map((employee) => {
								const isSelected = selected.includes(
									employee.id
								);
								const createdAt = format(
									employee.createdAt,
									"dd/MM/yyyy"
								);

								return (
									<TableRow
										hover
										key={employee.id}
										selected={isSelected}
									>
										<TableCell padding="checkbox">
											<Checkbox
												checked={isSelected}
												onChange={(event) => {
													if (event.target.checked) {
														onSelectOne?.(
															employee.id
														);
													} else {
														onDeselectOne?.(
															employee.id
														);
													}
												}}
											/>
										</TableCell>
										<TableCell>
											<Stack
												alignItems="center"
												direction="row"
												spacing={2}
											>
												<Avatar>
													{getInitials(employee.name)}
												</Avatar>
												<Typography variant="subtitle2">
													{employee.name}
												</Typography>
											</Stack>
										</TableCell>
										<TableCell>{employee.email}</TableCell>
										<TableCell>
											{employee.address.city},{" "}
											{employee.address.state},{" "}
											{employee.address.country}
										</TableCell>
										<TableCell>{employee.phone}</TableCell>
										<TableCell>{createdAt}</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Box>
			</Scrollbar>
			<TablePagination
				component="div"
				count={count}
				onPageChange={onPageChange}
				onRowsPerPageChange={onRowsPerPageChange}
				page={page}
				rowsPerPage={rowsPerPage}
				rowsPerPageOptions={[5, 10, 25]}
			/>
		</Card>
	);
};

EmployeeTable.propTypes = {
	count: PropTypes.number,
	items: PropTypes.array,
	onDeselectAll: PropTypes.func,
	onDeselectOne: PropTypes.func,
	onPageChange: PropTypes.func,
	onRowsPerPageChange: PropTypes.func,
	onSelectAll: PropTypes.func,
	onSelectOne: PropTypes.func,
	page: PropTypes.number,
	rowsPerPage: PropTypes.number,
	selected: PropTypes.array,
};
