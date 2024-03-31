"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var auth_1 = require("../controllers/auth");
var router = (0, express_1.Router)();
exports.router = router;
router.post('/login', auth_1.loginCtrl);
router.post('/register', auth_1.registerCtrl);
