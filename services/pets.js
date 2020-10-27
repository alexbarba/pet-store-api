const petsMocks = require("../utils/mocks/pets");

class petsService {
	constructor() {}

	getPets({ tags }) {
		return Promise.resolve(petsMocks);
	}

	getPet({ petId }) {
		return Promise.resolve(
			petsMocks.filter(function (petsMocks) {
				return petsMocks["id"] == petId;
			})[0]
		);
	}

	createPet({ pet }) {
		petsMocks.push(pet);
		return Promise.resolve(pet);
	}
}

module.exports = petsService;
