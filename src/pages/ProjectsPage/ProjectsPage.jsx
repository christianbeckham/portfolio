import { Box, Typography } from "@mui/material";
import LoadAnimation from "../../components/LoadAnimation/LoadAnimation";
import ProjectsList from "../../components/ProjectsList/ProjectsList";

const ProjectsPage = () => {
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
				<Typography variant={"h3"}>projects</Typography>
				<Box sx={{ maxWidth: 950, borderStyle: "solid", borderWidth: "1px 0", my: 1, p: 2 }}>
					<ProjectsList />
				</Box>
			</Box>
		</LoadAnimation>
	);
};

export default ProjectsPage;
