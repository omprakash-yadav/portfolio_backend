const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.download("./op_resume.pdf");
  //res.send("helo wld")
});

//app.listen(4000);
app.listen(process.env.PORT || 4000);
