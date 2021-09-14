const express = require("express");
const app = express();
const path = require("path");

const authRoutes = require("./src/api/auth/auth.routes");
const tremplinRoutes = require("./src/api/tremplin/tremplin.routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const apiPrefix = "/api";

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "hello" });
});

const dir = path.join(__dirname, "/public");
app.use("/static", express.static(dir));

app.use(apiPrefix + "/auth", authRoutes);
app.use(apiPrefix + "/tremplin", tremplinRoutes);

const port = process.env.PORT || 8000;

app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server Renning on localhost:" + port);
});
