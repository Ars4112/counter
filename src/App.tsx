import { useState, useEffect } from "react";
import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { Settings } from "./components/Settings/Settings";
import { Select } from "./components/Select/Select";

function App() {
	useEffect(() => {
		const getMaxValue = localStorage.getItem("maxValue");
		const getStartValue = localStorage.getItem("startValue");
		if (getMaxValue && getStartValue) {
			setInputMaxValue(JSON.parse(getMaxValue));
			setInputStartValue(JSON.parse(getStartValue));
			setMaxValue(+JSON.parse(getMaxValue));
			setCount(+JSON.parse(getStartValue));
		}
	}, []);

	const [selectValue, setSelectValue] = useState<string>("");
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const [count, setCount] = useState<number>(0);
	const [maxValue, setMaxValue] = useState<number>(0);

	const [inputMaxValue, setInputMaxValue] = useState<string>("");
	const [inputStartValue, setInputStartValue] = useState<string>("");

	const [message, setMessage] = useState<string>(
		"enter values and press 'set'"
	);
	const [error, setError] = useState<boolean>(false);

	const value = (count * 100) / maxValue;

	const increaseValue = () => {
		if (count === maxValue) return;
		setCount(count + 1);
	};
	const recetValue = () => setCount(+inputStartValue);

	const setLocalStorage = () => {
		localStorage.setItem("maxValue", JSON.stringify(inputMaxValue));
		localStorage.setItem("startValue", JSON.stringify(inputStartValue));
	};

	const setSettings = () => {
		if (+inputMaxValue && +inputStartValue) {
			setMaxValue(+inputMaxValue);
			setCount(+inputStartValue);
			setMessage("");
			setLocalStorage();
		}
	};

	const a = (e: any) => {
		if ((e.target as HTMLElement).id === "item") return;
		if ((e.target as HTMLElement).id === "select") {
			setIsOpen(!isOpen);
			return;
		}

		setIsOpen(false);
	};

	const selectKeyHandler: React.ComponentProps<"div">["onKeyDown"] = (e) => {
		if (e.key === "Enter") {
			a(e);
		}
	};

	return (
		<div className="App" onClick={a} 
		onKeyUp={selectKeyHandler}
		>
			<div className="counterContainer">
				<Settings
					inputMaxValue={inputMaxValue}
					setInputMaxValue={setInputMaxValue}
					inputStartValue={inputStartValue}
					setInputStartValue={setInputStartValue}
					setSettings={setSettings}
					setMessage={setMessage}
					setError={setError}
					error={error}
				/>

				<Counter
					count={count}
					increaseValue={increaseValue}
					recetValue={recetValue}
					value={value ? value : 0}
					maxValue={maxValue}
					message={message}
					error={error}
				/>
			</div>
			<hr />
			<Select
				selectValue={selectValue}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				setSelectValue={setSelectValue}
			/>
		</div>
	);
}

export default App;
