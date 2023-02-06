import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Link, Typography, Container, Stack, Divider } from "@mui/material";
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";

const NavBar = ({ links }) => {
	return (
		<>
			<AppBar position="fixed" elevation={0} color={"transparent"}>
				<Container maxWidth="xl">
					<Toolbar component={"header"} disableGutters>
						<Typography
							variant="h6"
							noWrap
							component={RouterLink}
							to="/"
							sx={{
								mr: 2,
								flexGrow: 1,
								color: "inherit",
								textDecoration: "none",
							}}
						>
							{"{cb}"}
						</Typography>
						<Stack direction={"row"} spacing={3} sx={{ mx: 2, display: { xs: "none", md: "flex" } }}>
							{links.slice(1).map((link) => (
								<Link underline="none" component={RouterLink} to={link.url} key={link.title} sx={{ color: "inherit" }}>
									{link.title}
								</Link>
							))}
						</Stack>
						<Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 2 }} />
						<ToggleThemeButton />
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
};
export default NavBar;
