import { ChangeEvent, useState } from "react";
import s from "./Settings.module.css";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { useDispatch } from "react-redux";
import { maxValueAC } from "../../state/setMaxValueReduser";
import { startCountAC } from "../../state/counterReducer";
import { startValueAC } from "../../state/setStartValueReducer";

type SettingsPropsType = {
	setMessage: (value: string) => void;
	setError: (error: boolean) => void;
	error: boolean;
};

type InputType = {
	id: number;
	label: string;
	function: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string;
};

export function Settings(props: SettingsPropsType) {
	const { setMessage, setError, error } = props;

	const dispatch = useDispatch();

	const [inputMaxValue, setInputMaxValue] = useState<string>("");
	const [inputStartValue, setInputStartValue] = useState<string>("");
	const [disabledButton, setDisabledButton]= useState<boolean>(true)
	

	const setSettings = () => {
		dispatch(maxValueAC(inputMaxValue));
		dispatch(startCountAC(+inputStartValue));
		dispatch(startValueAC(inputStartValue));
		setMessage("");
		// setLocalStorage();
	};

	const getMaxValueHendler = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setInputMaxValue(e.currentTarget.value);
// debugger
		if (+value <= +inputStartValue) {
			setMessage("Incorrect value");
			setError(true);
			
		} else {
			setError(false);
			setMessage("enter values and press 'set'");
			
		}
		setDisabledButton(error)
	};

	const getStartValueHendler = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setInputStartValue(value);

		if (+value >= +inputMaxValue) {
			setMessage("Incorrect value");
			setError(true);
			
		} else {
			setError(false);
			setMessage("enter values and press 'set'");
			
		}
		setDisabledButton(error)
	};

	const inputArray: InputType[] = [
		{
			id: 1,
			label: "Max value",
			function: getMaxValueHendler,
			value: inputMaxValue,
		},
		{
			id: 2,
			label: "Start value",
			function: getStartValueHendler,
			value: inputStartValue,
		},
	];

	return (
		<div className={s.container}>
			<div className={s.counterWrapper}>
				{inputArray.map((i) => {
					return (
						<Input
							key={i.id}
							label={i.label}
							value={i.value}
							func={i.function}
							setDisabledButton={setDisabledButton}
							
							error={error}
						/>
					);
				})}
			</div>
			<Button title={"set"} onClick={setSettings} disabled={disabledButton || error} />
		</div>
	);
}
