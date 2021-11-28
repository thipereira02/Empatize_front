import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "./layouts/GlobalStyles";
import HomePage from "./pages/HomePage";
import EmpathyMap from "./pages/EmpathyMap";
import WhatDoYou from "./pages/WhatDoYou";

export default function App() {

	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/empathymap/:personaId" exact>
						<EmpathyMap />
					</Route>
					<Route path="/whatdoyou" exact>
						<WhatDoYou />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}