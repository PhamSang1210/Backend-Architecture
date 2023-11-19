import accessRouter from "./access/access.route.js";

function route(app) {
    app.use("/api/v1/user", accessRouter);
}

export default route;
