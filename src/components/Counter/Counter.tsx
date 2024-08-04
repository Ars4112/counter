import s from "./Counter.module.css";
import { Button } from "../Button/Button";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../state/store";

type CounterPropsType = {
	count: number;
	value: number;
	maxValue: string;
	increaseValue: () => void;
	recetValue: () => void;
	message: string;
	error: boolean;
};

export function Counter(props: CounterPropsType) {
	const { count, increaseValue, recetValue, value, maxValue, message, error } =
		props;

		
		
		
	return (
		<div className={s.container}>
			<div>Max Value: {maxValue}</div>
			<div className={s.counterWrapper}>
				{count && !error ? (
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
					disabled={count === 0 ? true : false}
				/>
			</div>
		</div>
	);
}
