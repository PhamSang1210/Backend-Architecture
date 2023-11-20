import moment from "moment-timezone";

const timeOrigin = moment
    .tz(Date.now(), "Asia/Ho_Chi_Minh")
    .format("DD-MM-YYYY HH:mm:ss");

const timed = {
    createdAt: { type: String, default: timeOrigin },
    updatedAt: { type: String, default: timeOrigin },
};

export { timed };
