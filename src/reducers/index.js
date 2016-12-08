import { routerReducer as routing } from "react-router-redux";
import { combineReducers } from "redux";
import * as types from "../actions/types";

const testReducer = (state = "", action) => {
	switch (action.type) {
	case types.FILTER:
		return action.filter;
	default:
		return state;
	}
};

const rootReducer = combineReducers({
	testReducer,
	routing
});

export default rootReducer;
