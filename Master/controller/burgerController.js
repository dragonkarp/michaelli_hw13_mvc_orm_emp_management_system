const burgers = require("../models/burger.js")
const router = require("express").Router()

router.get("/", (req, res) => {
    burgers.selectAll((results) => {
        res.render("index", {burgerData : results})
    })
})

router.post("/api/burgers", (req, res) => {
    burgers.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function(results) {
        res.redirect("/")
    })
})

module.exports = router