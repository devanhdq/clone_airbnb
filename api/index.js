const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors());

app.get("/test", (req, res) => {
  res.json("okie");
});

app.listen(8080)
