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
exports.getProbeHandler = exports.postProbeHandler = void 0;
const postProbe_1 = __importDefault(require("../controllers/probeControllers/postProbe"));
const getProbe_1 = __importDefault(require("../controllers/probeControllers/getProbe"));
const postProbeHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const probeData = req.body;
    try {
        // hacer las comprobaciones aqui
        const newGroup = yield (0, postProbe_1.default)(probeData);
        res.status(200).json(newGroup);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.postProbeHandler = postProbeHandler;
const getProbeHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, getProbe_1.default)();
        res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getProbeHandler = getProbeHandler;
