import { ChangeEvent, useState } from "react";
import s from "./Input.module.css";

type InputPropsType = {
	label: string;
	value: string;
	func: (e: ChangeEvent<HTMLInputElement>) => void;
	setDisabledButton: (value: boolean) => void;

	error: boolean;
};

export function Input({
	label,
	value,
	func,
	error,
	setDisabledButton,
}: InputPropsType) {
	const [errorInput, setErrorInput] = useState<boolean>(false);

	const a = (e: ChangeEvent<HTMLInputElement>) => {
		func(e);
		if (+e.currentTarget.value < 0 || e.currentTarget.value === "") {
			setErrorInput(true);
			setDisabledButton(true);
		} else {
			setErrorInput(false);
			setDisabledButton(false);
		}
	};

	return (
		<label>
			<span>{label}:</span>
			<input
				className={error || errorInput ? `${s.inputError}` : ""}
				type="number"
				value={value}
				onChange={a}
			/>
		</label>
	);
}
