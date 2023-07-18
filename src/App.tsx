import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Error from "./pages/Error";
import LoginFailed from "./pages/LoginFailed";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<Navigation />
						</ProtectedRoute>
					}
				>
					<Route index element={<Home />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/loginfailed" element={<LoginFailed />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
