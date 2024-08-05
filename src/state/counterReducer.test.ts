import {
	counterReducer,
	incrementCountAC,
	startCountAC,
} from "./counterReducer";

let startState = 2;

test("increment counter-reducer", () => {
	const action = incrementCountAC(startState);
	const endState = counterReducer(startState, action);

	expect(endState).toBe(startState + 1);
});

test("reset counter-reducer", () => {
	const action = startCountAC(startState);
	const endState = counterReducer(startState + 1, action);

    expect(endState).toBe(startState)
});
