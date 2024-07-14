import { ChangeEvent } from "react";
import s from "./Settings.module.css";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

type SettingsPropsType = {
	inputMaxValue: string;
	setInputMaxValue: (value: string) => void;
	inputStartValue: string;
	setInputStartValue: (value: string) => void;
	setSettings: () => void;
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
	const {
		inputMaxValue,
		setInputMaxValue,
		inputStartValue,
		setInputStartValue,
		setSettings,
		setMessage,
		setError,
		error,
	} = props;

	const getMaxValueHendler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputMaxValue(e.currentTarget.value);
		setMessage("enter values and press 'set'");
	};

	const getStartValueHendler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputStartValue(e.currentTarget.value);
		setMessage("enter values and press 'set'");
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
						<Input key={i.id} label={i.label} value={i.value} func={i.function} setError={setError} setMessage={setMessage} inputMaxValue={inputMaxValue} inputStartValue={inputStartValue}/>
					);
				})}
			</div>
			<Button title={"set"} onClick={setSettings} disabled={error} />
		</div>
	);
}
