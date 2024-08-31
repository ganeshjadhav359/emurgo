"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var article_1 = __importDefault(require("./controllers/article"));
var app = (0, express_1.default)();
var port = process.env.PORT || 8080;
app.get('/health', function (req, res) {
    res.json({
        status: 200,
        content: "working fine."
    });
});
app.use('/article', article_1.default);
app.use(function (err, req, res, next) {
    console.error('Global Error Handler:', err.message);
    res.status(err.statusCode || 500).json({
        message: err.message || 'Internal Server Error',
    });
});
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
