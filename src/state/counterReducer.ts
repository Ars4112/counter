type IncrementActionType = {
	type: "INCREMENT-COUNT";
	count: number;
};

type ResetActionType = {
	type: "RESET-COUNT";
	startCount: number;
};

type ActionType = IncrementActionType | ResetActionType;

const initionalState = 0;

export const counterReducer = (
	state: number = initionalState,
	action: ActionType
): number => {
	switch (action.type) {
		case "INCREMENT-COUNT": {
			return action.count + 1;
		}
		case "RESET-COUNT": {
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
export const resetCountAC = (startCount: number): ResetActionType => ({
	type: "RESET-COUNT",
	startCount,
});
