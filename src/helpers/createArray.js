export const createArray = (obj) => {
	let createdArray = [];

	for (let key in obj) {
		for (let i = 0; i < obj[key]; i++) {
			createdArray.push(key + " " + (i + 1));
		}
	}

	return createdArray;
};
