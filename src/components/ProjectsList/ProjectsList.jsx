import { Grid, Card, CardContent, CardActions, IconButton, Typography, Chip } from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { projects } from "../../app.config";

const ProjectsList = () => {
	return (
		<>
			<Grid container direction="row" spacing={2}>
				{projects.map((project, index) => (
					<Grid key={index} item xs={12} sm={6} md={4}>
						<Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
							<CardContent sx={{ flexGrow: 1 }}>
								<Typography variant="h5" component="div">
									{project.title}
								</Typography>
								<Typography sx={{ pb: 1.5 }} color="text.secondary">
									{project.description}
								</Typography>
								<Typography variant="body2">
									{project.tech_stack.map((tech, index) => (
										<Chip key={index} label={tech} variant="outlined" size="small" sx={{ mr: 0.5, mb: 0.5 }} />
									))}
								</Typography>
							</CardContent>
							<CardActions>
								{project.github_url && (
									<IconButton size="small">
										<GitHub />
									</IconButton>
								)}
								{project.app_url && (
									<IconButton size="small">
										<Launch />
									</IconButton>
								)}
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default ProjectsList;
