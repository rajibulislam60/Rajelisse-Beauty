const express = require("express");
const app = express();

const PORT = process.env.Server_Port || 5000;

app.listen(PORT, () => {
  console.log("server is runing");
});
