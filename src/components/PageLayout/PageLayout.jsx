import { Box } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import MobileNav from "../MobileNav/MobileNav";
import useResponsive from "../../hooks/useResponsive";
import { links } from "../../app.config";

const PageLayout = ({ children }) => {
	const { isMobile } = useResponsive();
	return (
		<Box sx={{ height: "100vh" }}>
			<NavBar links={links} />
			{children}
			{isMobile && <MobileNav links={links} />}
		</Box>
	);
};

export default PageLayout;
