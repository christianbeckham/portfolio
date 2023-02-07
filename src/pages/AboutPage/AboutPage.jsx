import { Box, Typography } from "@mui/material";
import LoadAnimation from "../../components/LoadAnimation/LoadAnimation";
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
				}}
			>
				<Typography variant={"h3"}>about</Typography>
				<Box sx={{ maxWidth: 950, borderStyle: "solid", borderWidth: "1px 0", p: 4 }}>
					<Typography>{myInfo.about}</Typography>
				</Box>
			</Box>
		</LoadAnimation>
	);
};

export default AboutPage;
