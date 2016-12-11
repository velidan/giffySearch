import React from "react";
import { Route, IndexRoute } from "react-router";
import AppComponent from "./components/App.component";
import AboutComponent from "./components/About.component";
import GifSearchModule from "./modules/gifSearchModule";

export default (
	<Route path="/" component={AppComponent}>
        <IndexRoute component={GifSearchModule} />
		<Route path="/about" component={AboutComponent} />
    }
	</Route>
);
