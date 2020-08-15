const orm = require("../config/orm.js")

const burger = {
    selectAll : function(cbController) {
        orm.selectAll("burgers", function(results) {
            cbController(results)
        })
    },
    insertOne : function(columnNames, values, cbController) {
        orm.insertOne("burgers", columnNames, values, function(results){
            cbController(results)
        })
    },
    updateOne : function(columnNames, values, cbController) {
        orm.updateOne("burgers", columnNames, values, function(results) {
            cbController(results) //i dont understand this line. where is the origin of this function? I the function is passed as a param, but from where?
        })
    } //need help. not sure what the params should be. it seems exactly the same as insertOne(), but that doesn't feel correct.
}


module.exports = burger