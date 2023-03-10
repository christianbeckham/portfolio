import { Link as RouterLink } from "react-router-dom";
import { Container, Box, Typography, Button } from "@mui/material";
import LoadAnimation from "../../components/LoadAnimation/LoadAnimation";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import { social } from "../../app.config";

const ProjectsPage = () => {
	const githubLink = social.filter((item) => item.title.toLowerCase() === "github").map(({ url }) => url)[0];
	return (
		<LoadAnimation>
			<Container
				component="main"
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					py: { xs: 4, md: 0 },
				}}
			>
				<Typography variant={"h3"} sx={{ textTransform: "capitalize" }}>
					projects
				</Typography>
				<Box sx={{ maxWidth: 950, borderStyle: "solid", borderWidth: "1px 0", my: 1, p: 2 }}>
					<ProjectsList />
				</Box>
				<Button
					variant="contained"
					component={RouterLink}
					to={`${githubLink}?tab=repositories`}
					target="_blank"
					rel="noopener noreferrer"
					sx={{ my: 1 }}
				>
					view all
				</Button>
			</Container>
		</LoadAnimation>
	);
};

export default ProjectsPage;
