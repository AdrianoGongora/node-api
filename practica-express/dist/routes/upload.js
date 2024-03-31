"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var file_1 = __importDefault(require("../middleware/file"));
var upload_1 = require("../controllers/upload");
var session_1 = require("../middleware/session");
var router = (0, express_1.Router)();
exports.router = router;
router.get('/', session_1.checkJwt, file_1.default.single("single"), upload_1.getFile);
