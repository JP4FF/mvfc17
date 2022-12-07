import { React } from "react";
import styles from "./App.module.css";

import MainPage from "../pages/MainPage/MainPage";
import FormPage from "../pages/FormPage/FormPage";

import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className={styles.window}>
			<Routes>
				<Route path="/form" element={<FormPage />} />
				<Route path="/" element={<MainPage />} />
			</Routes>
		</div>
	);
}

export default App;
