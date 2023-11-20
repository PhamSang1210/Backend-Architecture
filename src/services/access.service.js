import shopModel from "../models/shop.model.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import KeyTokenServices from "./keyToken.service.js";
import AuthUtils from "../auth/authUtils.js";

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
                        publicKeyEncoding: {
                            type: "pkcs1",
                            format: "pem",
                        },
                        privateKeyEncoding: {
                            type: "pkcs1",
                            format: "pem",
                        },
                    }
                );

                const publicKeyString = await KeyTokenServices.createKeyToken({
                    userId: newShop._id,
                    publicKey,
                });

                if (!publicKeyString) {
                    return {
                        code: "xxxx",
                        msg: "publicKeyString error !!!!!!!!",
                    };
                }

                // convert publicKeyString(Object) => String
                const publicKeyObject = crypto.createPublicKey(publicKeyString);

                console.log(`PublicKeyString::::: ${publicKeyString}`);
                console.log(`PublicKeyObject::::: ${publicKeyObject}`);

                //CreateTokenPair
                const tokens = await AuthUtils.createTokenPair(
                    {
                        userId: newShop._id,
                        email,
                    },
                    publicKeyObject,
                    privateKey
                );

                return {
                    code: 201,
                    metaData: {
                        shop: newShop,
                        tokens,
                    },
                };
            }
            //
            return {
                code: 200,
                metaData: null,
            };
        } catch (error) {
            return {
                code: 301,
                msg: error,
            };
        }
    }
}

export default AccessServices;
