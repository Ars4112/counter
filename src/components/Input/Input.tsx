import { ChangeEvent, useState } from "react";
import s from "./Input.module.css";

type InputPropsType = {
	label: string;
	value: string;
	func: (e: ChangeEvent<HTMLInputElement>) => void;
	error: boolean;
};

export function Input({
	label,
	value,
	func,
	error
}: InputPropsType) {

	const a = (e: ChangeEvent<HTMLInputElement>) => {
		func(e);
	};

	return (
		<label>
			<span>{label}:</span>
			<input
				className={error ? `${s.inputError}` : ""}
				type="number"
				value={value}
				onChange={a}
			/>
		</label>
	);
}
