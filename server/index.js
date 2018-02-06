const express = require("express");

const users = require("./routes/users");

const app = express();

app.use("/users", users);

app.get("/", (req, res) => res.send("Bonjour la biblio"));

module.exports = app;
