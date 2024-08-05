import s from "./Counter.module.css";
import { Button } from "../Button/Button";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../state/store";
import { incrementCountAC, startCountAC } from "../../state/counterReducer";

type CounterPropsType = {
	
	message: string;
	error: boolean;
};

export function Counter(props: CounterPropsType) {
	const { message, error } = props;

	const count = useSelector<AppRootStateType, number>((state) => state.counter);
	const maxValue = useSelector<AppRootStateType, string>(
		(state) => state.maxValue
	);
	const startValue = useSelector<AppRootStateType, string>(
		(state) => state.startValue
	);
	const dispatch = useDispatch();

	const value = (count * 100) / +maxValue;

	const increaseValue = () => {
		if (count === +maxValue) return;

		dispatch(incrementCountAC(count));
	};
	const recetValue = () => dispatch(startCountAC(+startValue));


	return (
		<div className={s.container}>
			<div>Max Value: {maxValue}</div>
			<div className={s.counterWrapper}>
				{startValue && !error ? (
					<span className={count === +maxValue ? `${s.counter}` : ""}>
						{count}
					</span>
				) : (
					<span className={!error ? `${s.message}` : `${s.errorMessage}`}>
						{message}
					</span>
				)}
			</div>
			<ProgressBar value={value} />
			<div className={s.buttonWrapper}>
				<Button
					title={"inc"}
					onClick={increaseValue}
					disabled={count === +maxValue ? true : false}
				/>
				<Button
					title={"recet"}
					onClick={recetValue}
					disabled={count !== +maxValue}
				/>
			</div>
		</div>
	);
}
