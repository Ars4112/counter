import { useState } from "react";
import s from "./Select.module.css";

type SelectPropsType = {
	selectValue: string;
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
	setSelectValue: (value: string) => void;
};

type ValueType = "ewqewq" | "cxzcxz" | "jhgjhg";

type SelectValueType = {
	id: number;
	title: ValueType;
};

export function Select(props: SelectPropsType) {
	const { selectValue, isOpen, setIsOpen, setSelectValue } = props;

	const selectValueArray: SelectValueType[] = [
		{ id: 1, title: "ewqewq" },
		{ id: 2, title: "cxzcxz" },
		{ id: 3, title: "jhgjhg" },
	];

	const [isActive, setIsActive] = useState<number | null>(null);
	const activeFocusElement = selectValueArray.find((i) => i.id === isActive);

	const setSelectValueHandler = (value: string) => {
		setSelectValue(value);
		setIsOpen(false);
	};

	const setSelectValueKeyHandler = (e: any, value: string) => {
		if (e.key === "ArrowUp" || e.key === "ArrowDown") {
			for (let i = 0; i < selectValueArray.length; i++) {
				if (selectValueArray[i].id === isActive) {
					const activeElement =
						e.key === "ArrowDown"
							? selectValueArray[i + 1]
							: selectValueArray[i - 1];
					if (activeElement) {
						setIsActive(activeElement.id);

						break;
					}
				}
			}
		}

		if (e.key === "Enter") {
			if (activeFocusElement) setSelectValueHandler(activeFocusElement?.title);
		}
	};

	const selectHoverHandler = (id: number) => setIsActive(id);

	return (
		<div className={s.container}>
			<div id={"select"} className={s.showValue} tabIndex={0}>
				{selectValue}
			</div>
			{isOpen && (
				<ul className={s.list}>
					{selectValueArray.map((i, index) => {
						return (
							<li
								id="item"
								className={s.item + (isActive === i.id ? " " + s.active : "")}
								key={index}
								tabIndex={0}
								onClick={() => setSelectValueHandler(i.title)}
								onKeyUp={(e) => setSelectValueKeyHandler(e, i.title)}
								onMouseEnter={() => selectHoverHandler(i.id)}
								onFocus={() => selectHoverHandler(i.id)}
							>
								<span>{i.title}</span>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
