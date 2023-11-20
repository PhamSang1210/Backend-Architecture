"use strict";
import jwt from "jsonwebtoken";

class AuthUtils {
    static async createTokenPair(payload, publicKey, privateKey) {
        try {
            const accessToken = jwt.sign(payload, privateKey, {
                algorithm: "RS256",
                expiresIn: "2d",
            });

            const refreshToken = jwt.sign(payload, privateKey, {
                algorithm: "RS256",
                expiresIn: "7d",
            });

            jwt.verify(accessToken, publicKey, (err, decode) => {
                if (err) {
                    console.log(`Error verify::${err}`);
                }
                console.log(`Decode Verify: ${decode}`);
            });

            return {
                accessToken,
                refreshToken,
            };
        } catch (error) {
            return {
                code: 301,
                error: 1,
                alert: "CreateToken Token Error",
                msg: error,
            };
        }
    }
}

export default AuthUtils;
