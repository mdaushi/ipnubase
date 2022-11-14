const express = require("express");
const apiResponse = require("./api/services/api")
const chapters = require("./api/routes/chapter");
const search = require("./api/routes/search");
const app = express();
const port = process.env.PORT || 3000;

// route here
app.use("/api/v1/chapters", chapters);
app.use("/api/v1/search", search);

app.use(function (req, res, next) {
  res.status(404).json(apiResponse.jsonError("Page not found"))
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
