/**
 * Created by Nikcher on 27.03.2017.
 */
var mysql = require('mysql');

var DataBase = function () {
    this.save_money = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'save_money'
    });
};


DataBase.prototype.connect = function () {
    this.save_money.connect();
    this.save_money.query("SET SESSION wait_timeout = 604800"); // 7 days timeout
}
module.exports = DataBase;
