import app from "./src/app.js";
import { ENV } from "./src/enviroments/env.js";

const server = app.listen(ENV.PORT, () => {
    console.log(`Listen at PORT: http://localhost:${ENV.PORT}`);
});

process.on("SIGINT", () => {
    server.close(() => {
        console.log(`Exit Server Express`);
    });
});
