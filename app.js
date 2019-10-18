const express = require("express"),
    es6Renderer = require("express-es6-template-engine"),
    path = require("path"),
    cookieParser = require("cookie-parser"),
    logger = require("morgan");

const indexController = require("./routes/index"),
    ceosController = require("./routes/ceos");

const app = express();

app.engine("html", es6Renderer);
app.set("views", "./views");
app.set("view engine", "html");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexController);
app.use("/ceos", ceosController);

module.exports = app;
