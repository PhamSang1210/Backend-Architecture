import accessRouter from "./access/access.route.js";

function route(app) {
    // [CRUD REST API]
    app.use("/api/v1/user", accessRouter);

    // [GET:/]
    app.use("/", (req, res) => {
        res.send("ok");
    });
}

export default route;
