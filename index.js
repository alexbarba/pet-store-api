const express = require("express");
const cors = require("cors");

const petsApiRouter = require("./routes/api/pets");

// app
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/pets", petsApiRouter);

// redirect
app.get("/", function (req, res) {
	res.redirect("/pets");
});

//cors
app.use(cors());

// server
app.listen(8000, function () {
	console.log(`Listening`);
});
