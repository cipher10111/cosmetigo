import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Auth from "./pages/Auth";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<h1>Home</h1>
				</Route>
				<Route path="/auth" component={Auth} />
			</Switch>
		</Router>
	);
};

export default App;
