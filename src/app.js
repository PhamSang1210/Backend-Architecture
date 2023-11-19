"use strict";
import express from "express";
import helmet from "helmet";
const app = express();
import morgan from "morgan";
import compression from "compression";
import cors from "cors";
import cookieParser from "cookie-parser";
//Import File
import instanceConnect from "./db/init.mongodb.js";
import { checkOverLoad } from "./helpers/check.connect.js";
import route from "./routes/index.js";

//init middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
// init db
instanceConnect;
// checkOverLoad();
// init routes
route(app);
// handleing error

export default app;
