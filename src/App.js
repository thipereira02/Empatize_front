import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "./layouts/GlobalStyles";
import HomePage from "./pages/HomePage";
import Persona from "./pages/Persona";
import EmpathyMap from "./pages/EmpathyMap";
import WhatDoYou from "./pages/WhatDoYou";
import MainComponente from "./components/MainComponent";
import SignUp from "./pages/SignUp";

export default function App() {
	

	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<MainComponente	 />
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/cadastro" exact>
						<SignUp />
					</Route>
					<Route path="/persona/:personaId" exact>
						<Persona />
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