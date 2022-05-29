const express = require("express");
const app = express();
const dotEnv = require("dotenv").config();
const Data = require("./models/data");
const cors = require("cors");
const port = process.env.NODE_PORT || 5000;
const user = process.env.NODE_USER;
const password = process.env.NODE_PASSWORD;
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect(
  `mongodb+srv://${user}:${password}@cluster0.qeq91.mongodb.net/data?retryWrites=true&w=majority`
);

app.get("/", async (req, res) => {
  let rdata = await Data.find();
  res.send(rdata);
  res.json("server start");
});

app.listen(port, () => {
  console.log("connected", port);
});
