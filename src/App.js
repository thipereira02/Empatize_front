import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "./layouts/GlobalStyles";
import HomePage from "./pages/HomePage";
import Persona from "./pages/Persona";

export default function App() {

	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/persona/:personaId" exact>
						<Persona />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}