const express = require("express");
const router = express.Router();
const PetsService = require("../../services/pets");
const { check, body, validationResult } = require("express-validator");

const petService = new PetsService();

router.get("/", async function (req, res, next) {
	//List all pets
	const { tags } = req.query;

	try {
		const products = await petService.getPets({ tags });

		res.status(200).json({
			data: products,
			message: "A paged array of pets",
		});
	} catch (err) {
		next(err);
	}
});

router.post(
	"/",
	[
		check("id").exists().isInt(),
		check("name").exists().notEmpty().isString(),
		body("tags").optional().isString(),
	],
	async function (req, res, next) {
		//Create a pet
		const { body: pet } = req;

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const createdPet = await petService.createPet({ pet });

			res.status(201).json({
				data: createdPet,
				message: null,
			});
		} catch (err) {
			next(err);
		}
	}
);

router.get("/:petId", async function (req, res, next) {
	//Info for a specific pet
	const { petId } = req.params;

	try {
		const pet = await petService.getPet({ petId });

		res.status(200).json({
			data: pet,
			message: "Expected response to a valid request",
		});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
