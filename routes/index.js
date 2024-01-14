const router = require("express").Router()

router.get("/", (req, res) => {res.send("Hello Wolrd")})

router.use("/contacts", require("./contacts"))

module.exports = router