"use strict";
import keyTokenModel from "../models/keyToken.model.js";

class KeyTokenServices {
    static async createKeyToken({ userId, publicKey }) {
        try {
            const publicKeyString = publicKey.toString();
            const tokens = await keyTokenModel.create({
                user: userId,
                publicKey: publicKeyString,
            });

            return tokens ? publicKeyString : null;
        } catch (error) {
            return {
                code: 301,
                err: 1,
                msg: error,
            };
        }
    }
}

export default KeyTokenServices;
