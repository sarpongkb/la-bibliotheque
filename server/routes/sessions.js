const router = require("express").Router();
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();

router.post("/", jsonParser, (req, res) => {
  console.log("Creating a new session for: ", req.body);
  res.send("This should be your session id");
});

router.delete("/", (req, res) => {
  console.log("Deleting a session");
  res.send("You are now logged out");
});

module.exports = router;
