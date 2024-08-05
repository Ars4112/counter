import { useState, useEffect } from "react";
import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { Settings } from "./components/Settings/Settings";
import { Select } from "./components/Select/Select";


function App() {
	// useEffect(() => {
	// 	const getMaxValue = localStorage.getItem("maxValue");
	// 	const getStartValue = localStorage.getItem("startValue");
	// 	if (getMaxValue && getStartValue) {
	// 		setInputMaxValue(JSON.parse(getMaxValue));
	// 		setInputStartValue(JSON.parse(getStartValue));
	// 		setMaxValue(+JSON.parse(getMaxValue));
	// 		setCount(+JSON.parse(getStartValue));
	// 	}
	// }, []);

	const [selectValue, setSelectValue] = useState<string>("");
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const [message, setMessage] = useState<string>(
		"enter values and press 'set'"
	);
	const [error, setError] = useState<boolean>(false);
	console.log(error);
	

	// const setLocalStorage = () => {
	// 	localStorage.setItem("maxValue", JSON.stringify(inputMaxValue));
	// 	localStorage.setItem("startValue", JSON.stringify(inputStartValue));
	// };

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
		<div className="App" onClick={a} onKeyUp={selectKeyHandler}>
			<div className="counterContainer">
				<Settings setMessage={setMessage} setError={setError} error={error} />

				<Counter
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
