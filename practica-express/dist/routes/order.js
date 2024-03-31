"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var order_1 = require("../controllers/order");
var session_1 = require("../middleware/session");
var router = (0, express_1.Router)();
exports.router = router;
router.get('/', session_1.checkJwt, order_1.getItems);
