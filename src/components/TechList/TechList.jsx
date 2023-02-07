import { Box, Typography, Chip } from "@mui/material";
import { myInfo } from "../../app.config";

const TechList = () => {
	return (
		<>
			<Typography variant="h6">{`💻 Here's a list of technologies I'm working with...`}</Typography>
			<Box sx={{ mt: 2 }}>
				{myInfo.tech_stack.map((tech, index) => (
					<Chip key={index} label={tech} variant="outlined" sx={{ m: 0.5 }} />
				))}
			</Box>
		</>
	);
};

export default TechList;
