import { mongoose } from "mongoose";
import os from "os";

const _SECONDS = 5000;

const countConnnection = () => {
    const numConnect = mongoose.connections.length;
    console.log(`numConnect: ${numConnect}`);
};

const checkOverLoad = () => {
    setInterval(() => {
        // connection length
        const connection = mongoose.connections.length;
        // number core
        const numCores = os.cpus().length;
        // memoryUsage
        const memoryUsage = process.memoryUsage().rss;
        // example connect thread is 1 core * 5
        const maxConnection = numCores * 5;

        // 1.Divide 1024 => KB
        // 2.Divide 1024 => MB
        console.log(`Memory Usage: ${memoryUsage / 1024 / 1024} MB`);

        if (connection > maxConnection) {
            console.log(`Server Overload Detected !`);
        }
    }, _SECONDS);
};

export { countConnnection, checkOverLoad };
