type StartValueType = {
	type: "START-VALUE";
	startValue: string;
};

type ActionType = StartValueType;

export const setStartValueReducer = (
	state: string = "",
	action: ActionType
): string => {
	switch (action.type) {
		case "START-VALUE": {
			return action.startValue;
		}
		default:
			return state;
	}
};

export const startValueAC = (startValue: string): StartValueType => ({
	type: "START-VALUE",
	startValue,
});
