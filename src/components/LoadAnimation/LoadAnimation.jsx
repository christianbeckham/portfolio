import React, { Children, useEffect, useState } from "react";
import { Grow } from "@mui/material";

const LoadAnimation = ({ startTime = 1000, children }) => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<>
			{Children.map(children, (child, index) => (
				<Grow in={isLoaded} {...{ timeout: startTime + 100 * index }}>
					{child}
				</Grow>
			))}
		</>
	);
};

export default LoadAnimation;
