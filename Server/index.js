const express = require("express");

const app = express();
require("dotenv").config();
const PORT = process.env.Server_PORT || 5000;

const cors = require("cors");
const router = require("./router");

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log("server is working");
});
