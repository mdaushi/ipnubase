const express = require("express");
const chapters = require("./api/routes/chapter");
const app = express();
const port = process.env.PORT || 3000;

// route here
app.use("/api/v1/chapters", chapters);
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
