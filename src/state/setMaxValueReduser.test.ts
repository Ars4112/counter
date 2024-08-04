import {
	setMaxValueReducer,
	maxValueAC,
	
} from "./setMaxValueReduser";

const startState = "0";

test("max value reduser", () => {
	const action = maxValueAC(startState);
	const endState = setMaxValueReducer(startState, action);

	expect(endState).toBe(startState);
	expect(typeof endState).toBe("string");
});

