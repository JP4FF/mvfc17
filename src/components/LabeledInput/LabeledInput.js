import { React } from "react";
import styles from "./LabeledInput.module.css";

function LabeledInput(props) {
	return (
		<label className={styles.label}>
			<span className={styles.text}>{props.children}</span>
			<input
				style={{ width: props.inputWidth }}
				className={styles.input}
				type={props.type}
				name={props.name}
				required={props.required}
				value={props.value}
				onChange={props.onChange}
				min={props.type.includes("number") ? 0 : undefined}
			/>
		</label>
	);
}

export default LabeledInput;
