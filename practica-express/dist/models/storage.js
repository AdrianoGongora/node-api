"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageModel = void 0;
var mongoose_1 = require("mongoose");
var StorageSchema = new mongoose_1.Schema({
    fileName: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    idUser: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false,
});
exports.StorageModel = (0, mongoose_1.model)('storage', StorageSchema);
