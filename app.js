const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const path = require("path");
const indexRouter = require("./routes/index");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
const mongooseConnection = require("./config/mongoose-connection");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
