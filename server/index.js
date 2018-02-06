const express = require("express");

const users = require("./routes/users");
const sessions = require("./routes/sessions");

const app = express();

app.use("/users", users);
app.use("/sessions", sessions);

app.get("/", (req, res) => res.send("Bonjour la biblio"));

module.exports = app;
