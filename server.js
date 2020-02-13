require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./auth");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use("/auth", authRouter);
app.listen(5000, () => console.log('server is running on port 5000'));