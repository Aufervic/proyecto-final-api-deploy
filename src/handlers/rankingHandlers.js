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
exports.findRankingHandler = exports.reviveRankingByIDHandler = exports.deleteRankingHandler = exports.updateRankingHandler = exports.getRankingByIDHandler = exports.getAllRankingHandler = exports.createRankingHandler = void 0;
const createRanking_1 = __importDefault(require("../controllers/rankingControllers/createRanking"));
const getAllRankings_1 = __importDefault(require("../controllers/rankingControllers/getAllRankings"));
const getRankingById_1 = __importDefault(require("../controllers/rankingControllers/getRankingById"));
const updateRanking_1 = __importDefault(require("../controllers/rankingControllers/updateRanking"));
const deleteRanking_1 = __importDefault(require("../controllers/rankingControllers/deleteRanking"));
const reviveRankingByID_1 = __importDefault(require("../controllers/rankingControllers/reviveRankingByID"));
const findRanking_1 = __importDefault(require("../controllers/rankingControllers/findRanking"));
const createRankingHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rankingData = req.body;
    try {
        // hacer las comprobaciones aqui
        const newRanking = yield (0, createRanking_1.default)(rankingData);
        res.status(200).json(newRanking);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createRankingHandler = createRankingHandler;
const getAllRankingHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // hacer las comprobaciones aqui
        const rankings = yield (0, getAllRankings_1.default)();
        res.status(200).json(rankings);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAllRankingHandler = getAllRankingHandler;
const getRankingByIDHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // hacer las comprobaciones aqui
        const ranking = yield (0, getRankingById_1.default)(id);
        res.status(200).json(ranking);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getRankingByIDHandler = getRankingByIDHandler;
const updateRankingHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rankingData = req.body;
    try {
        // hacer las comprobaciones aqui
        const updatedRanking = yield (0, updateRanking_1.default)(rankingData);
        res.status(200).json(updatedRanking);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateRankingHandler = updateRankingHandler;
const deleteRankingHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // hacer las comprobaciones aqui
        const deletedRanking = yield (0, deleteRanking_1.default)(id);
        res.status(200).json(deletedRanking);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteRankingHandler = deleteRankingHandler;
const reviveRankingByIDHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // hacer las comprobaciones aqui
        const revivedRanking = yield (0, reviveRankingByID_1.default)(id);
        res.status(200).json(revivedRanking);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.reviveRankingByIDHandler = reviveRankingByIDHandler;
const findRankingHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rankingProps = req.body;
    try {
        // hacer las comprobaciones aqui
        const ranking = yield (0, findRanking_1.default)(rankingProps);
        res.status(200).json(ranking);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.findRankingHandler = findRankingHandler;
