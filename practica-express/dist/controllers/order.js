"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItems = void 0;
var error_handler_1 = require("../utils/error.handler");
var getItems = function (_req, res) {
    try {
        res.send({
            data: "Esto solo ve las personas con sesion / jwt",
            user: _req.user
        });
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_GET_BLOG');
    }
};
exports.getItems = getItems;
