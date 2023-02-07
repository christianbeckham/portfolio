import { Box, Stack, Typography, Link, Divider, SvgIcon } from "@mui/material";
import LoadAnimation from "../LoadAnimation/LoadAnimation";
import { myInfo, social } from "../../app.config";

const Hero = () => {
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
			<LoadAnimation>
				<Box sx={{ maxWidth: 950, width: "100%", borderStyle: "solid", borderWidth: "1px 0" }}>
					<Box sx={{ padding: "3rem", overflow: "hidden" }}>
						<Typography variant="h1">{`${myInfo.first_name} ${myInfo.last_name}`}</Typography>
						<Typography variant="h2">{`${myInfo.title}`}</Typography>
					</Box>
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
						<LoadAnimation key={link.title} startTime={1500 + 500 * index}>
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
									<SvgIcon fontSize="large">{link.icon}</SvgIcon>
									<Typography sx={{ display: { xs: "none", sm: "flex" } }}>{link.title}</Typography>
								</Stack>
							</Link>
						</LoadAnimation>
					))}
				</Stack>
			</LoadAnimation>
		</Box>
	);
};

export default Hero;
