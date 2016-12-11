import React, { PropTypes } from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";

import routes from "../routes";

export default class RootContainer extends React.Component {

	render() {
		const { store, history } = this.props;

		return (
			<Provider store={store}>
				<Router history={history} routes={routes} />
			</Provider>
		);
	}
}

RootContainer.propTypes = {
	store : PropTypes.object.isRequired,
	history : PropTypes.object.isRequired
};
