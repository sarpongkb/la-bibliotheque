const router = require("express").Router();

router.get("/", (req, res) => res.send("This is my profile"));

module.exports = router;
