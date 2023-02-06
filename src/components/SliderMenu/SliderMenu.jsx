import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/icons-material/Menu";

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
