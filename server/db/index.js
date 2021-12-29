var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo",
  port: "3306",
});

let myDb = {};

myDb.all = () => {
  return new Promise((resolve, reject) => {
    con.query("SELECT * FROM `task`", (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
};

myDb.one = (id) => {
  return new Promise((resolve, reject) => {
    con.query("SELECT * FROM `task` WHERE id=?", [id], (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
};

myDb.add = (title) => {
  return new Promise((resolve, reject) => {
    con.query(
      "INSERT INTO task (`title`,`date`)  " + " VALUES(?,Now())",
      [title],
      (error, results) => {
        if (error) reject(error);
        resolve(results);
      }
    );
  });
};

myDb.update = (title, id) => {
  return new Promise((resolve, reject) => {
    con.query(
      "UPDATE task SET title = ? WHERE id = ?  ",
      [title, id],
      (error, results) => {
        if (error) reject(error);
        resolve(results);
      }
    );
  });
};

myDb.delete = (id) => {
  return new Promise((resolve, reject) => {
    con.query("DELETE FROM `task` WHERE id=?", [id], (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
};

module.exports = myDb;
