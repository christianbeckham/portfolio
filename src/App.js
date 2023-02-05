import { Outlet } from "react-router-dom";
import PageLayout from "./components/PageLayout/PageLayout";

const App = () => {
	return (
		<PageLayout>
			<Outlet />
		</PageLayout>
	);
};

export default App;
