const router = require("express").Router();
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();

router.post("/", jsonParser, (req, res) => {
  console.log("Trying to add a new user: ", req.body);
  res.end();
});

router.get("/me", (req, res) => res.send("This is my profile"));

router.put("/me", jsonParser, (req, res) => {
  console.log("Updating my profile: ", req.body);
  res.end();
});

module.exports = router;
