const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;
const con = require("./db");

app.use(express.json());
app.use(cors());

// Connected to mongo db
con.connection.on("connected", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("connected to Mongo DB!");
  }
});

//save Tasks information in database
app.use("/task", require("./routes/task"));
app.use("/category", require("./routes/category"));

//Connecting to the port of backend
app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON PORT : " + PORT);
});
