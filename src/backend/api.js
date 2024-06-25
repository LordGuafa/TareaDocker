const express = require("express");
const mongoose = require("mongoose");
const Users = require("../model/user.model");
const cors = require("cors");
const user = require("./user.controller");
const app = express();
const port = 3200;

app.use(express.json());
//mongoose.connect("mongodb://mongo");
mongoose.connect(
  "mongodb+srv://Admin:hola1234@cluster0.jefznfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.post("/login", user.verify);

app.get("/", user.list);

app.get("/:name", user.get);

app.post("/", user.create);

app.put("/:id", user.update);

app.patch("/:id", user.update);

app.delete("/:id", user.destroy);

app.get("*", user.noExist);

app.listen(port, () => {
  console.log("Arranca");
});

// const create = () => {
//   const formlogin = document.getElementById("formLogin");
//   formlogin.onsubmit = async (e) => {
//     e.preventDefault;
//     const formData = new FormData(formlogin);
//     const data = Object.fromEntries(formData.entries());
//   };
// };
