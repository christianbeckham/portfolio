import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ThemeModeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeModeProvider>
			<RouterProvider router={router} />
		</ThemeModeProvider>
	</React.StrictMode>
);
