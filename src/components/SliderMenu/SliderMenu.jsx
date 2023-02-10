import { useState } from "react";
import { Link } from "react-router-dom";
import {
	Box,
	Stack,
	SwipeableDrawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";

const SliderMenu = ({ links }) => {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (e) => {
		if (e && e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
			return;
		}
		setOpen(!open);
	};

	return (
		<>
			<IconButton onClick={toggleDrawer} sx={{ color: "inherit" }}>
				<Menu />
			</IconButton>
			<SwipeableDrawer anchor={"left"} open={open} onClose={toggleDrawer} onOpen={toggleDrawer}>
				<Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
					<Stack direction={"row"} sx={{ alignItems: "center", justifyContent: "space-between", p: 2 }}>
						<Typography variant="h6">Menu</Typography>
						<IconButton color="inherit" onClick={toggleDrawer} edge="end" size="small">
							<Close fontSize="inherit" />
						</IconButton>
					</Stack>
					<List>
						{links.map((link) => (
							<ListItem key={link.title} disablePadding>
								<ListItemButton component={Link} to={link.url}>
									<ListItemIcon>{link.icon}</ListItemIcon>
									<ListItemText primary={link.title} sx={{ textTransform: "capitalize" }} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</SwipeableDrawer>
		</>
	);
};

export default SliderMenu;
