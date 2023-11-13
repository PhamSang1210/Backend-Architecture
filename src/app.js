import express from "express";
import helmet from "helmet";
const app = express();
import morgan from "morgan";
import compression from "compression";
//init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
// init db

// init routes
app.get("/", (req, res, next) => {
    const str = "compression";
    res.status(200).json({
        message: "Welcome Nodejs",
        metaData: str.repeat(10000),
    });
});
// handleing error

export default app;
