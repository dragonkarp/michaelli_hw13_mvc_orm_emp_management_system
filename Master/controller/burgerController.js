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


//gets id from the html
router.post("api/burgers/:id", (req, res) => {
    var condition = "id= " + 
    burgers.updateOne(["burger_name", "devoured"], [req.body.burger_name, true], function(results) {
        res.redirect("/")
    })
}) //need. This seems correct to me, but not sure. basically very similar to insertOne(). and im sure the redirect is correct since it is a post. 
// also want another explanation of the high level concept and how the objects interact.


module.exports = router