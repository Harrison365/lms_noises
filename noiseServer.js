const express = require("express");
const app = express();

app.use("/mp3", express.static("./bbc_mp3.mp3"));

app.listen(8080, () => {
  console.log("I will serve your browser noises on port 8080!");
});
