import { Box, Typography } from "@mui/material";
import LoadAnimation from "../../components/LoadAnimation/LoadAnimation";
import TechList from "../../components/TechList/TechList";
import { myInfo } from "../../app.config";

const AboutPage = () => {
	return (
		<LoadAnimation>
			<Box
				component="main"
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					py: { xs: 4, md: 0 },
				}}
			>
				<Typography variant={"h3"} sx={{ textTransform: "capitalize" }}>
					about me
				</Typography>
				<Box sx={{ maxWidth: 950, borderStyle: "solid", borderWidth: "1px 0", my: 1, p: 4 }}>
					<Typography variant="h5">{`Hello, I'm ${myInfo.first_name}! 👋`}</Typography>
					<br />
					<Typography sx={{ my: 2 }}>{myInfo.about}</Typography>
					<br />
					<TechList />
				</Box>
			</Box>
		</LoadAnimation>
	);
};

export default AboutPage;
