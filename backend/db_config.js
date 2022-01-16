const mysql = require("mysql");

var poolStar = mysql.createPool({
    connectionLimit: 10,
    password: 'DO5hro7MJn0Wtf5e',
    user: "group11",
    database: "MyBookList",
    host: "groupelevenmysql.ddns.net",
    port: "3306",
    charset: 'utf8mb4'
});


var poolRemote = mysql.createPool({
    connectionLimit: 10,
    password: 'Ayds=j"=^C|%H8',
    user: "freedbtech_groupeleven",
    database: "freedbtech_mybooklist",
    host: "freedb.tech",
    port: "3306",
    charset: 'utf8mb4'
});

var poolLocal = mysql.createPool({
    connectionLimit: 10,
    password: 'DO5hro7MJn0Wtf5e',
    user: "group11",
    database: "MyBookList",
    host: "groupelevenmysql.ddns.net",
    port: "3307",
    charset: 'utf8mb4'
});


/*Uncomment one of them to switch. 
poolStar => Berk'in Serverı
poolRemote => Uzak Sunucu
*/


module.exports = poolStar  
// module.exports = poolRemote ;





