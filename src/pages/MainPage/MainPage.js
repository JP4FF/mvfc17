import { React } from "react";
import styles from "./MainPage.module.css";

import { Link } from "react-router-dom";

import Button from "../../components/Button/Button";

function MainPage(props) {
	return (
		<div className={styles.main}>
			<h1 className={styles.title}>
				Welcome to form creator! To start please click button below
			</h1>
			<div className={styles.action}>
				<Link to="/form">
					<Button className={styles.button}>Form</Button>
				</Link>
			</div>
		</div>
	);
}

export default MainPage;
