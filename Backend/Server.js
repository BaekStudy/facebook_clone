//기초설정
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./config/db")();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//Routers
const UserRouter = require("./routes/user");
app.use("/Users", UserRouter);

//서버실행
app.listen(process.env.PORT, () => {
  console.log(`서버 작동 http://localhost:${process.env.PORT}`);
});
