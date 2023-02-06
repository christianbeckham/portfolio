import { useEffect, useState } from "react";
import { Box, Stack, Typography, Link, Divider, Grow } from "@mui/material";
import { social } from "../../app.config";

const Hero = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<Box
			component={"header"}
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				textAlign: "center",
				justifyContent: "center",
				height: "100%",
			}}
		>
			<Box sx={{ maxWidth: 950, width: "100%", borderStyle: "solid", borderWidth: "1px 0" }}>
				<Grow in={isLoaded} {...{ timeout: 750 }}>
					<Box sx={{ padding: "3rem", overflow: "hidden" }}>
						<Typography variant="h1">Christian Beckham</Typography>
						<Typography variant="h2">Software Engineer</Typography>
					</Box>
				</Grow>
			</Box>
			<Box sx={{ height: 80, display: { xs: "none", sm: "flex" } }}>
				<Divider orientation="vertical" flexItem sx={{ height: "100%" }} />
			</Box>
			<Stack
				component={"nav"}
				direction={"row"}
				divider={<Divider orientation={"vertical"} variant="middle" flexItem />}
				sx={{
					border: "1px solid",
					borderColor: "divider",
					borderRadius: 1,
					mt: { xs: 2, sm: 0 },
				}}
			>
				{social.map((link, index) => (
					<Grow key={link.title} in={isLoaded} {...{ timeout: 1000 + 500 * index }}>
						<Link
							href={link.url}
							target="_blank"
							rel="noopener"
							underline="none"
							sx={{
								py: { xs: 2, md: 3 },
								px: { xs: 4, sm: 5, md: 6 },
								color: "inherit",
							}}
						>
							<Stack alignItems={"center"} justifyContent={"center"} spacing={0.5}>
								{link.icon}
								<Typography sx={{ display: { xs: "none", sm: "flex" } }}>{link.title}</Typography>
							</Stack>
						</Link>
					</Grow>
				))}
			</Stack>
		</Box>
	);
};

export default Hero;
