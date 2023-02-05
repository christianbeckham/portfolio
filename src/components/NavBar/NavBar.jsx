import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Link, Typography, Container, Stack, Divider } from "@mui/material";
import { links } from "../../app.config";

const NavBar = () => {
	return (
		<>
			<AppBar position="static" elevation={0} color={"transparent"}>
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
						<Stack direction={"row"} spacing={3} sx={{ mx: 2 }}>
							{links.slice(1).map((link) => (
								<Link underline="none" component={RouterLink} to={link.url} key={link.title} sx={{ color: "inherit" }}>
									{link.title}
								</Link>
							))}
						</Stack>
						<Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 2 }} />
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
};
export default NavBar;
