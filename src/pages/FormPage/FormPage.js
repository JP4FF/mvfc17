import { React, useState } from "react";
import styles from "./FormPage.module.css";

import TitledCard from "../../components/TitledCard/TitledCard";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import LabeledTextarea from "../../components/LabeledTextarea/LabeledTextarea";
import Button from "../../components/Button/Button";

import { createArray } from "../../helpers/createArray";

function FormPage() {
	const [formValues, setFormValues] = useState({
		input: 0,
		checkbox: 0,
		textarea: 0,
	});
	const [isValidForm, setValidForm] = useState(true);
	const [errorText, setErrorText] = useState("");
	const [isShowCreatedForm, setShowCreatedForm] = useState(false);
	const [createdFormArray, setCreatedFormArray] = useState([]);

	let styleCreatedForm = isShowCreatedForm
		? styles.card__2
		: `${styles.card__2} ${styles.hide}`;

	const handleInputsValue = (e) => {
		if (e.target.value < 0) {
			setErrorText("Don't enter negative values!");
			setValidForm(false);
		} else {
			setFormValues({
				...formValues,
				[e.target.name]: e.target.value,
			});
			setErrorText("");
			setValidForm(true);
		}
	};

	const formHandler = (e) => {
		e.preventDefault();

		if (!isValidForm) {
			setErrorText("Form filled wrong!");
			return;
		} else {
			setCreatedFormArray(createArray(formValues));

			console.log(createdFormArray);
			setShowCreatedForm(true);
		}
	};

	return (
		<div className={styles.content}>
			<TitledCard
				className={styles.card__1}
				title="Please fill fields below">
				<form className={styles.form__fill} onSubmit={formHandler}>
					<LabeledInput
						type="number"
						name="input"
						inputWidth="100px"
						required={true}
						value={formValues.input}
						onChange={handleInputsValue}>
						Input fields:
					</LabeledInput>
					<LabeledInput
						type="number"
						name="checkbox"
						inputWidth="100px"
						required={true}
						value={formValues.checkbox}
						onChange={handleInputsValue}>
						Checkbox fields:
					</LabeledInput>
					<LabeledInput
						type="number"
						name="textarea"
						inputWidth="100px"
						required={true}
						value={formValues.textarea}
						onChange={handleInputsValue}>
						Textarea fields:
					</LabeledInput>
					{!isValidForm && (
						<p className={styles.error}>{errorText}</p>
					)}
					<div className={styles.actions}>
						<Button className={styles.button} type="submit">
							Build
						</Button>
					</div>
				</form>
			</TitledCard>

			<TitledCard className={styleCreatedForm} title="Created form">
				<form
					className={styles.form__created}
					onSubmit={(e) => {
						e.preventDefault();
					}}>
					{createdFormArray.map((element, i) => {
						if (element.includes("input")) {
							return (
								<LabeledInput
									key={i}
									type="text"
									name={element}
									inputWidth="auto"
									required={false}>
									{element}:
								</LabeledInput>
							);
						}
						if (element.includes("checkbox")) {
							return (
								<LabeledInput
									key={i}
									type="checkbox"
									name={element}
									inputWidth="auto"
									required={false}>
									{element}:
								</LabeledInput>
							);
						}
						if (element.includes("textarea")) {
							return (
								<LabeledTextarea
									key={i}
									name={element}
									textareaWidth="100%"
									required={false}>
									{element}:
								</LabeledTextarea>
							);
						}
					})}

					<div className={styles.actions}>
						<Button className={styles.button} type="submit">
							Send
						</Button>
					</div>
				</form>
			</TitledCard>
		</div>
	);
}

export default FormPage;
