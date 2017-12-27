const express = require("express");
const app = express();
const spongebobify = require("spongebobify");

const port = 80;

app.get("/", (req, res) => {
  try {
    let tExT = spongebobify(req.headers.text);
    res.status(200).send(tExT);
  } catch (err) {
    res.status(400).send("Malformed request");
    console.log(err);
  }
});

app.listen(port, () => {
  console.log("App listening on port " + port);
});
