import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import Analytics from "./components/analytics/Analytics";
import "./styles/styling.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

function App() {
	return (
		<Router>
			<AppProvider>
				<div className="app flex h-screen">
					<Sidebar />
					<div className="flex-1 flex place-content-center py-3 overflow-hidden">
						<div className="content shadow-lg bg-white rounded-2xl p-4">
							<Routes>
								<Route path="/" exact element={<Home />} />
								<Route
									path="/analytics"
									element={<Analytics />}
								/>
								<Route path="*" element={<Home />} />
							</Routes>
						</div>
					</div>
				</div>
			</AppProvider>
		</Router>
	);
}

export default App;