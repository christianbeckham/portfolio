import { Link as RouterLink } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, Toolbar, Paper } from "@mui/material";

const MobileNav = ({ links }) => {
	return (
		<>
			<Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1 }} elevation={1}>
				<BottomNavigation showLabels>
					{links.map((link) => (
						<BottomNavigationAction
							key={link.title}
							component={RouterLink}
							to={link.url}
							label={link.title}
							icon={link.icon}
						/>
					))}
				</BottomNavigation>
			</Paper>
			<Toolbar />
		</>
	);
};

export default MobileNav;
