import "./ProgressBar.css";

type PropsButton = {
	value: number;
};

export function ProgressBar(props: PropsButton) {
	return (
		<div className="progress-wrapper">
			<div className="progress" style={{ width: `${props.value}%` }}></div>
		</div>
	);
}
