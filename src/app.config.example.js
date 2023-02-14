import { Apps, Email, Home, Person, GitHub, LinkedIn } from "@mui/icons-material";

export const myInfo = {
	first_name: "First Name",
	last_name: "Last name",
	email: "email@email.com",
	title: "Software Engineer",
	about: "About you...",
	tech_stack: ["Python", "Java", "JavaScript", "MySQL", "MongoDB", "Docker", "AWS"],
};

export const links = [
	{ title: "home", url: "/", icon: <Home /> },
	{ title: "about", url: "/about", icon: <Person /> },
	{ title: "projects", url: "/projects", icon: <Apps /> },
];

export const social = [
	{
		title: "GitHub",
		url: "",
		icon: <GitHub />,
	},
	{
		title: "LinkedIn",
		url: "",
		icon: <LinkedIn />,
	},
	{
		title: "Email",
		url: `mailto:${myInfo.email}`,
		icon: <Email />,
	},
];

export const projects = [
	{
		title: "Application #1",
		description: "description for app",
		tech_stack: ["React.js", "Django", "MySQL"],
		github_url: "",
		app_url: "",
		video_url: "",
	},
	{
		title: "Application #2",
		description: "description for app",
		tech_stack: ["React.js", "Spring Boot", "MongoDB"],
		github_url: "",
		app_url: "",
		video_url: "",
	},
	{
		title: "Application #3",
		description: "description for app",
		tech_stack: ["React.js", "Material UI"],
		github_url: "",
		app_url: "",
		video_url: "",
	},
	{
		title: "Application #4",
		description: "description for app",
		tech_stack: ["React.js", "Material UI", "MySQL"],
		github_url: "",
		app_url: "",
		video_url: "",
	},
];
