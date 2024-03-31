"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItems = exports.updateItems = exports.postItems = exports.getItems = exports.getItem = void 0;
var error_handler_1 = require("../utils/error.handler");
var getItem = function (_req, res) {
    try {
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_GET_BLOG');
    }
};
exports.getItem = getItem;
var getItems = function (_req, res) {
    try {
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_GET_BLOG');
    }
};
exports.getItems = getItems;
var updateItems = function (_req, res) {
    try {
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_UPDATE_BLOG');
    }
};
exports.updateItems = updateItems;
var postItems = function (_req, res) {
    try {
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_POST_BLOG');
    }
};
exports.postItems = postItems;
var deleteItems = function (_req, res) {
    try {
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_DELETE_BLOG');
    }
};
exports.deleteItems = deleteItems;
