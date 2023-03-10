import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { Nightlight, LightMode } from "@mui/icons-material";

import { ThemeContext } from "../../context/ThemeContext";

const ToggleThemeButton = () => {
	const theme = useTheme();
	const { toggleColorMode } = useContext(ThemeContext);

	return (
		<>
			<IconButton onClick={toggleColorMode} color="inherit" size="small">
				{theme.palette.mode === "dark" ? <LightMode fontSize="inherit" /> : <Nightlight fontSize="inherit" />}
			</IconButton>
		</>
	);
};

export default ToggleThemeButton;
