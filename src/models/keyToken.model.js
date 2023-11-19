import { Schema, model, Types } from "mongoose";

const DOCUMENT_NAME = "Key";
const COLLECTION_NAME = "Keys";

const keyTokenSchema = new Schema({
    user: { type: Schema.Types.String, require: true, ref: "shop" },
});

export default model(DOCUMENT_NAME, keyTokenSchema);
