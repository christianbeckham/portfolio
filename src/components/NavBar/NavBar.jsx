import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Link, Typography, Container, Box, Stack, Divider } from "@mui/material";
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";
import SliderMenu from "../SliderMenu/SliderMenu";
import useResponsive from "../../hooks/useResponsive";
import { myInfo } from "../../app.config";

const NavBar = ({ links }) => {
	const { isTablet } = useResponsive();
	return (
		<>
			<AppBar position="fixed" elevation={0} sx={{ bgcolor: "grey.900" }}>
				<Container maxWidth="xl">
					<Toolbar component={"header"} disableGutters>
						{isTablet && <SliderMenu links={links} />}
						<Typography
							variant="h6"
							noWrap
							component={RouterLink}
							to="/"
							sx={{
								ml: 1,
								color: "inherit",
								textDecoration: "none",
							}}
						>
							{`{${myInfo.first_name.charAt(0).toLowerCase()}${myInfo.last_name.charAt(0).toLowerCase()}}`}
						</Typography>
						<Box sx={{ flexGrow: 1 }} />
						<Stack direction={"row"} spacing={3} sx={{ mx: 2, display: { xs: "none", lg: "flex" } }}>
							{links.slice(1).map((link) => (
								<Link
									underline="none"
									component={RouterLink}
									to={link.url}
									key={link.title}
									sx={{ color: "inherit", textTransform: "capitalize" }}
								>
									{link.title}
								</Link>
							))}
						</Stack>
						<Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 2 }} />
						<ToggleThemeButton />
					</Toolbar>
				</Container>
			</AppBar>
			<Toolbar />
		</>
	);
};
export default NavBar;
