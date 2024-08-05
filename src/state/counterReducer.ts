type IncrementActionType = {
	type: "INCREMENT-COUNT";
	count: number;
};

type ResetActionType = {
	type: "START-COUNT";
	startCount: number;
};

type ActionType = IncrementActionType | ResetActionType;

// const initionalState = 0;

export const counterReducer = (
	state: number = 0,
	action: ActionType
): number => {
	switch (action.type) {
		case "INCREMENT-COUNT": {
			return action.count + 1;
		}
		case "START-COUNT": {
			return action.startCount;
		}
		default:
			return state;
	}
};

export const incrementCountAC = (count: number): IncrementActionType => ({
	type: "INCREMENT-COUNT",
	count,
});
export const startCountAC = (startCount: number): ResetActionType => ({
	type: "START-COUNT",
	startCount,
});
