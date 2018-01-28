const express = require("express");

const meRouter = require("./routes/me");

const app = express();

app.use("/me", meRouter);

app.get("/", (req, res) => res.send("Bonjour la biblio"));

module.exports = app;
