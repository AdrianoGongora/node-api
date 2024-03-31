"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
var jwt_handle_1 = require("../utils/jwt.handle");
var checkJwt = function (req, res, next) {
    try {
        var jwtByUser = req.headers.authorization || null;
        var jwt = jwtByUser === null || jwtByUser === void 0 ? void 0 : jwtByUser.split(' ').pop();
        var verify = (0, jwt_handle_1.verifyToken)("".concat(jwt));
        if (!verify) {
            res.status(401);
            res.send("NO_TIENES_UNA_SESION_VALIDADA");
        }
        else {
            req.user = verify;
            next();
        }
    }
    catch (e) {
        console.log(e);
        res.status(400);
        res.send("SESSION_NO_VALIDA");
    }
};
exports.checkJwt = checkJwt;
