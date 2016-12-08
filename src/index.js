import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { AppContainer as RHTLContainer} from "react-hot-loader";
import configureStore from "./store/configureStore";
import RootContainer from "./containers/Root.container";

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
	<RHTLContainer>
		<RootContainer store={store} history={history} />
	</RHTLContainer>,
	document.getElementById("root")
);

if (module.hot) {
	module.hot.accept("./containers/Root.container", () => {
		const NewRootContainer = require("./containers/Root.container").default;

		console.warn("NewRootContainer -> ", NewRootContainer);

		render(
			<RHTLContainer>
				<NewRootContainer store={store} history={history} />
			</RHTLContainer>,
			document.getElementById("root")
		);
	});
}
