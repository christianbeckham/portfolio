import { useTheme, useMediaQuery } from "@mui/material";

const useResponsive = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
	const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

	return { isMobile, isTablet, isDesktop };
};

export default useResponsive;
