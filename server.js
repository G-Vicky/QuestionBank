var mysql = require("mysql");
const express = require("express");
const app = express();

var connection = mysql.createConnection({
  host: "sql306.epizy.com",
  user: "epiz_23314843",
  password: "gvicky",
  database: "epiz_23314843_admission"
});

connection.connect(err => {
  if (err) {
    console.log(err);
  }
  console.log("connected as id " + connection.threadId);
});

const PORT = process.env.PORT || 3000;

const papers = {
  data: [
    {
      id: "1",
      name: "Question Paper1"
    },
    {
      id: "2",
      name: "Question Paper2"
    },
    {
      id: "3",
      name: "Question Paper3"
    }
  ]
};

app.get("/", (req, res) => {
  res.send("Hello Wolrd");
});

app.get("/home", (req, res) => {
  res.send("Server from home");
});

app.get("/register", (req, res) => {
  connection.query("SELECT * from registration", function(err, rows, fields) {
    if (err) {
      throw err;
    }

    console.log("The solution is: ", rows);
    res.send("server from register" + JSON.stringify(rows));
  });

  connection.end();
});

app.get("/questionpaper/:class", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(papers);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
