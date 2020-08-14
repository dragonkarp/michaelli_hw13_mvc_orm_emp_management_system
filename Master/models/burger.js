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
    }
}


module.exports = burger