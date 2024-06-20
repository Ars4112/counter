import "./Button.css"

type PropsButton = {
	title: string;
	onClick: () => void;
	disabled: boolean;
};

export function Button(props: PropsButton) {
	const buttonClickHandler = () => props.onClick();
	return (
		<button className="button" onClick={buttonClickHandler} disabled={props.disabled}>
			{props.title}
		</button>
	);
}
