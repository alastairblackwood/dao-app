import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

// add middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("The application is listening on port 8000");
});
