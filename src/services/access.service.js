import shopModel from "../models/shop.model.js";
import bcrypt from "bcrypt";
import crypto from "crypto";

const ROLES = {
    SHOP: "SHOP",
    WRITEN: "WRITEN",
    ADMIN: "ADMIN",
};

class AccessServices {
    static async register({ name, email, password }) {
        try {
            // email exists
            const holdShop = await shopModel.findOne({ email }).lean();
            // check
            if (holdShop) {
                return {
                    code: "xxx",
                    msg: "Register Readly Exists ",
                };
            }

            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);

            const newShop = await shopModel.create({
                name,
                email,
                password: hashPassword,
                roles: [ROLES.SHOP],
            });

            if (newShop) {
                // create privateKey,publicKey
                // crypto
                const { privateKey, publicKey } = crypto.generateKeyPairSync(
                    "rsa",
                    {
                        modulusLength: 4096,
                    }
                );
            }

            return newShop;
        } catch (error) {
            console.log(error);
        }
    }
}

export default AccessServices;
