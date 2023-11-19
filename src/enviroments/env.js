import "dotenv/config";

const ENV = {
    PORT: process.env.PORT || 8000,
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PORT: process.env.DB_PORT || 27017,
    DEV_DB_NAME: process.env.DEV_DB_NAME || "shopDEV",
    PRO_DB_NAME: process.env.DEV_DB_NAME || "proEducation",
    NODE_ENV: process.env.NODE_ENV || "pro",
};

export { ENV };
