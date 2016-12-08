import React, { PropTypes } from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";

import DevTools from "./DevTools";
import routes from "../routes";


export default class RootContainer extends React.Component {

	render() {
		const { store, history } = this.props;

		return (
			<Provider store={store}>
                <div>
                    <Router history={history} routes={routes} />
                    <DevTools />
                </div>
			</Provider>
		);
	}
}

RootContainer.propTypes = {
	store : PropTypes.object.isRequired,
	history : PropTypes.object.isRequired
};
