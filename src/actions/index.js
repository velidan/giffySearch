import * as types from "./types";

export function testAction(param) {
	return {
		type : types.TEST_TYPE,
		param
	}
}