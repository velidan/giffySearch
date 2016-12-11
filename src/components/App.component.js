import React, { PropTypes } from "react";

export default class AppComponent extends React.Component {

	renderResult() {
		let res;

		if (process.env.NODE_ENV === "production") {
			res =  ( <main><h1>App Component PROD</h1>{ this.props.children }</main> );
		} else {
			res = ( <main><h1>App Component DEV</h1>{ this.props.children }</main> );
		}

		return res;
	}

	render() {
		return this.renderResult();
	}

}

AppComponent.propTypes = {
	children : PropTypes.object
};
