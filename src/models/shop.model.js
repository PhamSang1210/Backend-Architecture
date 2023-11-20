import { Schema, model, Types } from "mongoose";
// import { timeOrigin } from "../utils/timezone.util.js";
import { timed } from "../utils/timezone.util.js";

const DOCUMENT_NAME = "shop";
const COLLECTION_NAME = "shops";

const shopSchema = new Schema(
    {
        name: { type: Schema.Types.String, trim: true, maxLength: 150 },
        email: { type: Schema.Types.String, unique: true, trim: true },
        password: { type: Schema.Types.String, required: true, trim: true },
        status: { type: Schema.Types.String, enum: ["active", "inactive"] },
        verify: { type: Schema.Types.Boolean, default: false },
        roles: { type: Schema.Types.Array, default: [] },
        createdAt: timed.createdAt,
        updatedAt: timed.updatedAt,
        // updatedAt: { type: Schema.Types.String, default: timeOrigin },
    },
    {
        collection: COLLECTION_NAME,
    }
);

export default model(DOCUMENT_NAME, shopSchema);
