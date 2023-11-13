import express from "express";
import helmet from "helmet";
const app = express();
import morgan from "morgan";

//init middleware
app.use(morgan("tiny"));
app.use(helmet());
// init db

// init routes
app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Welcome Nodejs",
    });
});
// handleing error

export default app;
