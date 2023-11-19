// http://localhost:8000/api/v1/user/register

import AccessServices from "../services/access.service.js";

class AccessController {
    static async register(req, res, next) {
        try {
            console.log(`[P]::[register]:: ${req.body}`);
            const shop = await AccessServices.register(req.body);
            res.status(201).json({
                code: 201,
                error: 0,
                shops: shop,
            });
        } catch (error) {
            res.status(301).json({
                code: 301,
                error: 1,
                msg: "Can't Shop Register",
            });
        }
    }
}

export default AccessController;
