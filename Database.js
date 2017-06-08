var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE todolist", function (err, result) {
    if (err) throw err;
    console.log("Database created");
      var con = mysql.createConnection({
       host: "localhost",
        user: "root",
        password: "",
        database: "todolist"
      });

      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql ="CREATE TABLE `taskgroup` ("
      +"  `id` int(11) NOT NULL,"
      +"  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,"
      +"  `couleur` varchar(255) COLLATE utf8_unicode_ci NOT NULL"
      +") ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;";

      var sql2 =" CREATE TABLE `tasks` ("
      +"  `id` int(11) NOT NULL,"
      +"  `idUser` int(11) NOT NULL,"
      +"  `position` int(11) NOT NULL,"
      +"  `titre` varchar(500) COLLATE utf8_unicode_ci NOT NULL,"
      +"  `description` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,"
      +"  `date` varchar(255) COLLATE utf8_unicode_ci NOT NULL,"
      +"  `idGroupe` int(11) NOT NULL,"
      +"  `valide` char(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0'"
      +") ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;"

      var sql3 =" CREATE TABLE `users` ("
      +"  `id` int(11) NOT NULL,"
      +"  `Name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,"
      +"  `Password` varchar(255) COLLATE utf8_unicode_ci NOT NULL"
      +") ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
        con.query("ALTER TABLE `taskgroup` ADD PRIMARY KEY (`id`);",function (err, result) {
        if (err) throw err;
        });
        con.query("ALTER TABLE `taskgroup` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;",function (err, result) {
        if (err) throw err;
        });
      });
      con.query(sql2, function (err, result) {
        if (err) throw err;
        console.log("Table created");
        con.query("ALTER TABLE `tasks` ADD PRIMARY KEY (`id`);",function (err, result) {
        if (err) throw err;
        });
        con.query("ALTER TABLE `tasks` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;",function (err, result) {
        if (err) throw err;
        });
      });
      con.query(sql3, function (err, result) {
        if (err) throw err;
        console.log("Table created");
        con.query("ALTER TABLE `users` ADD PRIMARY KEY (`id`);",function (err, result) {
        if (err) throw err;
        });
        con.query("ALTER TABLE `users` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;",function (err, result) {
        if (err) throw err;
        console.log("Installation terminé");
        console.log("Vous pouvez quitter");
        });
      });
    });    
  });
});