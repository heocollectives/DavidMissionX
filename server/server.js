const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const database = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Gjwjdals010203",
  database: "missionx",
  port: 3306,
});

app.post("/register", (req, res) => {
  console.log(req.body);
  const fullName = "fsdfdsf";
  const email = "fdsfsd@gmail.com";
  const password = 1234;

  database.query(
    "INSERT INTO User (FullName, Email, Password) VALUES (?, ?, ?)",
    [fullName, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({
          message:
            "Account has been created. You have successfully logged in, welcome.",
        });
      }
    }
  );
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log(email);
  console.log(password);

  database.query(
    "SELECT * FROM User WHERE Email = ? AND Password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ message: "There is an error" });
      }
      if (result) {
        console.log(result);
        if (result.length > 0) {
          const resultToJSON = (resultRowsArray) => {
            return resultRowsArray.map((mysqlObj) =>
              Object.assign({}, mysqlObj)
            );
          };
          const jsonResult = resultToJSON(result)[0];
          res.send(jsonResult);
        } else {
          res.send({ message: "An error has occured" });
        }
      } else {
        res.send({
          message: "Database error",
        });
      }
    }
  );
});

app.get("/teacherbuilder", function (req, res) {
  database.query(
    "SELECT * FROM TeacherBuilder",
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ message: "There is an error" });
      }
      if (result) {
        console.log(result);
        if (result.length > 0) {
          const resultToJSON = (resultRowsArray) => {
            return resultRowsArray.map((mysqlObj) =>
              Object.assign({}, mysqlObj)
            );
          };
          const jsonResult = resultToJSON(result)[0];
          res.send(jsonResult);
        } else {
          res.send({ message: "An error has occured" });
        }
      } else {
        res.send({
          message: "Database error",
        });
      }
    }
  );
});


app.get("/video", function (req, res) {
  database.query(
    "SELECT * FROM databasevideo",
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ message: "There is an error" });
      }
      if (result) {
        console.log(result);
        if (result.length > 0) {
          const resultToJSON = (resultRowsArray) => {
            return resultRowsArray.map((mysqlObj) =>
              Object.assign({}, mysqlObj)
            );
          };
          const jsonResult = resultToJSON(result)[0];
          res.send(jsonResult);
        } else {
          res.send({ message: "An error has occured" });
        }
      } else {
        res.send({
          message: "Database error",
        });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("server is running");
});
