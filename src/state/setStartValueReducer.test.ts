import { setStartValueReducer, startValueAC } from "./setStartValueReducer";

const startState = "0";

test("start value reduser", () => {
	const action = startValueAC(startState);
	const endState = setStartValueReducer(startState, action);

	expect(endState).toBe(startState);
	expect(typeof endState).toBe("string");
});
