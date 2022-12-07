import { React } from "react";
import styles from "./LabeledTextarea.module.css";

function LabeledTextarea(props) {
	return (
		<label className={styles.label}>
			<span className={styles.text}>{props.children}</span>
			<textarea
				style={{ width: props.textareaWidth }}
				className={styles.textarea}
				name={props.name}
				required={props.required}
				value={props.value}
				onChange={props.onChange}
			/>
		</label>
	);
}

export default LabeledTextarea;
