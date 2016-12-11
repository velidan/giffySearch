import React from "react";

export default class AppComponent extends React.Component {

	renderResult() {
		let res;

		if (process.env.NODE_ENV === "production") {
			res =  ( <h1>App Component PROD</h1> );
		} else {
			res = ( <h1>App Component DEV</h1> );
		}

		return res;
	}

	render() {
		return this.renderResult();
	}

}
