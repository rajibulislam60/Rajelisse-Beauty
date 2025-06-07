const express = require("express");
const router = require("./router");
const app = express();

const PORT = process.env.Server_Port || 5000;
app.use(router);

app.listen(PORT, () => {
  console.log("server is runing");
});
