import { styled } from "@mui/material";

export const StyledHeader = styled("header")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	textAlign: "center",
	justifyContent: "center",
	height: "100%",
	// ...theme.typography.body2,
	// "& > :not(style) + :not(style)": {
	// 	marginTop: theme.spacing(2),
	// },
}));
