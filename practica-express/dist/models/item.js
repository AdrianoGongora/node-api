"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ItemSchema = new mongoose_1.Schema({
    color: {
        type: String,
        required: true
    },
    gas: {
        type: String,
        enum: ["gasoline", "electric"],
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false,
});
var ItemModel = (0, mongoose_1.model)('items', ItemSchema);
exports.default = ItemModel;
