"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelOrderHandler = exports.captureOrderHandler = exports.createOrderHandler = void 0;
const createOrder_1 = __importDefault(require("../controllers/paymentController/createOrder"));
const captureOrder_1 = __importDefault(require("../controllers/paymentController/captureOrder"));
const createOrderHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, createOrder_1.default)();
        return res.status(200).json(data);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
exports.createOrderHandler = createOrderHandler;
const captureOrderHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.query;
    try {
        const data = yield (0, captureOrder_1.default)(token);
        return res.redirect("http://127.0.0.1:5173/home");
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
exports.captureOrderHandler = captureOrderHandler;
const cancelOrderHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.redirect("http://127.0.0.1:5173/donation");
});
exports.cancelOrderHandler = cancelOrderHandler;
