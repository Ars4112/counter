import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { Settings } from "./components/Settings/Settings";

function App() {
	const [count, setCount] = useState<number>(0);
	const [maxValue, setMaxValue] = useState<number>(0);

	const [inputMaxValue, setInputMaxValue] = useState<string>("");
	const [inputStartValue, setInputStartValue] = useState<string>("");

	const [message, setMessage] = useState<string>("enter values and press 'set'")
	const [error, setError] = useState<boolean>(false)

	const value = (count * 100) / maxValue;

	const increaseValue = () => {
		if (count === maxValue) return;
		setCount(count + 1);
	};
	const recetValue = () => setCount(+inputStartValue);

	const setSettings = () => {
		setMaxValue(+inputMaxValue);
		setCount(+inputStartValue);
		setMessage("")
	};

	return (
		<div className="App">
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
				value={value}
				maxValue={maxValue}
				message={message}
				error={error}
			/>
		</div>
	);
}

export default App;
