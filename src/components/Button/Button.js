import { React } from "react";
import styles from "./Button.module.css";

function Button(props) {
	const className = props.className + " " + styles.button;

	return (
		<button
			className={className}
			type={props.type ? props.type : "button"}
			onClick={props.onClick}>
			{props.children}
		</button>
	);
}

export default Button;
