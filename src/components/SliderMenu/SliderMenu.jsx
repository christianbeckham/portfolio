import { useState } from "react";
import { Link } from "react-router-dom";
import {
	Box,
	SwipeableDrawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

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
