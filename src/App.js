import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import MobileNav from "./components/MobileNav/MobileNav";
import useResponsive from "./hooks/useResponsive";
import { links } from "./app.config";

const App = () => {
	const { isMobile } = useResponsive();
	return (
		<Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
			<NavBar links={links} />
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flex: 1,
				}}
			>
				<Outlet />
			</Box>
			{isMobile && <MobileNav links={links} />}
		</Box>
	);
};

export default App;
