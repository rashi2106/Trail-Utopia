const express = require("express");
const app = express();
var PORT=process.env.PORT || 3000;

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.listen(PORT, () => {
  console.log("The server is up and running!");
});
