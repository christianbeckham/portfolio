import { Link as RouterLink } from "react-router-dom";
import { Box, Stack, Typography, Link, Divider } from "@mui/material";

import { StyledHeader } from "./Hero.styled";
import { links } from "../../app.config";

const Hero = () => {
	return (
		<>
			<StyledHeader>
				{/* <Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						border: "1px solid",
						borderRadius: "100%",
					}}
				>
					<Typography sx={{ m: 4 }}>{"{cb}"}</Typography>
				</Box> */}
				{/* <Box sx={{ height: 80 }}>
					<Divider orientation="vertical" flexItem sx={{ height: "100%" }} />
				</Box> */}
				<br />
				<Box sx={{ maxWidth: 950, width: "100%", borderStyle: "solid", borderWidth: "1px 0" }}>
					<Box sx={{ padding: "3rem", overflow: "hidden" }}>
						<Typography variant="h1">Christian Beckham</Typography>
						<Typography variant="h2">Software Engineer</Typography>
					</Box>
				</Box>
				<Box sx={{ height: 80, display: { xs: "none", sm: "flex" } }}>
					<Divider orientation="vertical" flexItem sx={{ height: "100%" }} />
				</Box>
				<Stack
					component={"nav"}
					direction={{ xs: "column", md: "row" }}
					divider={<Divider orientation={{ xs: "horizontal", md: "vertical" }} variant="middle" flexItem />}
					sx={{
						display: { xs: "none", sm: "flex" },
						border: "1px solid",
						borderRadius: 1,
					}}
				>
					{links.slice(1).map((link) => (
						<Link
							key={link.title}
							component={RouterLink}
							to={link.url}
							underline="none"
							sx={{ letterSpacing: 0.2, textTransform: "uppercase", py: 3, px: 6 }}
						>
							{link.title}
						</Link>
					))}
				</Stack>
			</StyledHeader>
		</>
	);
};

export default Hero;
