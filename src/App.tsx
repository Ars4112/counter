import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";
import { Counter } from "./components/Counter/Counter";

function App() {
	const randomValue = Math.floor(Math.random() * (10 - 1) + 1);

	const [count, setCount] = useState<number>(0);
	const [maxValue, setMaxValue] = useState<number>(
		Math.floor(Math.random() * (10 - 1) + 1)
	);

	const value = (count * 100) / maxValue;

	const increaseValue = () => {
		if (count === maxValue) return;
		setCount(count + 1);
	};
	const recetValue = () => {
		setMaxValue(randomValue);
		setCount(0);
	};
	return (
		<div className="App">
			<Counter count={count} increaseValue={increaseValue} recetValue={recetValue} value={value} maxValue={maxValue}/>
		</div>
	);
}

export default App;
