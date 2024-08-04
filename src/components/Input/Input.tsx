import { ChangeEvent } from "react";
import s from "./Input.module.css";

type InputPropsType = {
	label: string;
	value: string;
	func: (e: ChangeEvent<HTMLInputElement>) => void;
	setError: (error: boolean) => void;
	setMessage: (value: string) => void;
	inputMaxValue: string;
	inputStartValue: string;
};

export function Input({
	label,
	value,
	func,
	setError,
	setMessage,
	inputMaxValue,
    inputStartValue
}: InputPropsType) {

	let errorInput;
	if ((+inputMaxValue <= +inputStartValue || value === "") || +value < 0) {
		errorInput = true;
		setError(true);
		setMessage("Incorrect value");
	} else {
        setError(false)
    };

	return (
		<label>
			<span>{label}:</span>
			<input
				className={errorInput ? `${s.inputError}` : ""}
				type="number"
				value={value.toString()}
				onChange={func}
			/>
		</label>
	);
}
