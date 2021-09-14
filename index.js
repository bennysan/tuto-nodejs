require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const authRoutes = require("./src/api/auth/auth.routes");
const tremplinRoutes = require("./src/api/tremplin/tremplin.routes");

const app = express();

const apiPrefix = "/api";

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Welcome !" });
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
