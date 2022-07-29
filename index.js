const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.download("./OP RESUME_22.pdf");
});

app.listen(4000);
