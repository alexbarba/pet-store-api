const express = require("express");

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

// server
const server = app.listen(8000, function () {
	console.log(`Listening http://localhost:${server.address().port}`);
});

server();
