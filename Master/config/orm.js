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
    }
}

module.exports = orm