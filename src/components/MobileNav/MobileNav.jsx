import { Link } from "react-router-dom";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";

const MobileNav = ({ links }) => {
	return (
		<>
			<Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1 }} elevation={3}>
				<BottomNavigation showLabels>
					{links.map((link) => (
						<BottomNavigationAction
							key={link.title}
							component={Link}
							to={link.url}
							label={link.title}
							icon={link.icon}
						/>
					))}
				</BottomNavigation>
			</Box>
		</>
	);
};

export default MobileNav;
