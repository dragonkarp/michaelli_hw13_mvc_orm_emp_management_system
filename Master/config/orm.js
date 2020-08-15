// Import MySQL connection.
var connection = require("./connection.js");

const orm = {
    selectAll : function(table, cbModel) {
        connection.query("SELECT * FROM ??", table, function(err, results) {
            cbModel(results)
        })
    },
    insertOne : function(table, columnNames, values, cbModel) {
        connection.query("INSERT INTO ?? (??,??) values (?,?)", [table, columnNames[0], columnNames[1], values[0], values[1]], function(err, results) {
            cbModel(results)
        })
    },
    updateOne : function(table, columnNames, id, cbModel) {
        connection.query("UPDATE ?? SET devoured = true WHERE ?? = ? ", [table, columnNames[0], id], function(err, results) {
            cbModel(results)
        })
    } // need help. I set up handlebars for the html such that burgers on the page have a data-id={{id}} value, but don't know how to use it in the ORM code. 
}

module.exports = orm