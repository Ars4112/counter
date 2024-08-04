import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { setMaxValueReducer } from "./setMaxValueReduser";
import { setStartValueReducer } from "./setStartValueReducer";

const rootReducer = combineReducers({
	counter: counterReducer,
	maxValue: setMaxValueReducer,
	startValue: setStartValueReducer
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
