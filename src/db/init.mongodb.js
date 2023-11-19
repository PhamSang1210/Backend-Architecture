"use strict";
import mongoose from "mongoose";
import dbConfig from "../configs/config.mongodb.js";
import { countConnnection } from "../helpers/check.connect.js";

const { host, port, name } = dbConfig.db;

// mongodb://localhost:27017
const connectString = `mongodb://${host}:${port}/${name}`;

class Database {
    constructor() {
        this.connect();
    }

    //Gia su o trong moi truong dev

    async connect(TYPE = "MONGODB") {
        if (1 === 1) {
            try {
                await mongoose.connect(connectString);
                console.log("SUCCESS", countConnnection());
            } catch (error) {
                console.log("ERROR CONNECT DATABSE");
            }
        }
    }
    // get instance
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceConnect = Database.getInstance();

export default instanceConnect;
