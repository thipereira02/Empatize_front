import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "./layouts/GlobalStyles";
import EmpathyMap from "./pages/EmpathyMap";
import HomePage from "./pages/HomePage";

export default function App() {

	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/empathymap" exact>
						<EmpathyMap />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}