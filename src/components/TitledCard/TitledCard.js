import { React } from "react";
import styles from "./TitledCard.module.css";

function TitledCard(props) {
	const style = props.className + " " + styles.container;

	return (
		<div className={style}>
			<h2 className={styles.title}>{props.title}</h2>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
}

export default TitledCard;
