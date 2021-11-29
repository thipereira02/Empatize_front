import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import UserContext from "./contexts/UserContext";
import GlobalStyle from "./layouts/GlobalStyles";
import HomePage from "./pages/HomePage";
import Persona from "./pages/Persona";
import EmpathyMap from "./pages/EmpathyMap";
import WhatDoYou from "./pages/WhatDoYou";
import MainComponente from "./components/MainComponent";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

export default function App() {
	const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")));

	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<UserContext.Provider value={{ userData, setUserData }}>
					<MainComponente	 />
					<Switch>
						<Route path="/" exact>
							<HomePage />
						</Route>
						<Route path="/cadastro" exact>
							<SignUp />
						</Route>
						<Route path="/login" exact>
							<Login />
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
				</UserContext.Provider>
			</BrowserRouter>
		</>
	);
}