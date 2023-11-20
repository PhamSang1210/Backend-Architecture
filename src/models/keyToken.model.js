import { Schema, model } from "mongoose";
import { timed } from "../utils/timezone.util.js";

// Constance
const DOCUMENT_NAME = "key";
const COLLECTION_NAME = "keys";

const keyTokenSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, require: true, ref: "shop" },
        publicKey: { type: Schema.Types.String, required: true },
        refreshToken: { type: Schema.Types.Array, default: [] },
        createdAt: timed.createdAt,
        updatedAt: timed.updatedAt,
    },
    {
        collection: COLLECTION_NAME,
        // versionKey:false
    }
);

export default model(DOCUMENT_NAME, keyTokenSchema);
