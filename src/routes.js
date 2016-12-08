import React from "react";
import { Route } from "react-router";
import AppComponent from "./components/App.component";
import AboutComponent from "./components/About.component";

export default (
	<Route path="/" component={AppComponent}>
		<Route path="/about" component={AboutComponent} />
	</Route>
);
