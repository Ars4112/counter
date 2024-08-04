type MaxValueType = {
	type: "MAX-VALUE";
	maxValue: string;
};

type ActionType = MaxValueType;

export const setMaxValueReducer = (
	state: string  = "",
	action: ActionType
): string => {
	switch (action.type) {
		case "MAX-VALUE": {
			return action.maxValue;
		}
		default:
			return state;
	}
};

export const maxValueAC = (maxValue:string): MaxValueType => ({type: "MAX-VALUE", maxValue})

