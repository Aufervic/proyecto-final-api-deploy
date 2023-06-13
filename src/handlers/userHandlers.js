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
exports.deleteUserHandler = exports.updateUserHandler = void 0;
const updateUser_1 = __importDefault(require("../controllers/userControllers/updateUser"));
const deleteUser_1 = __importDefault(require("../controllers/userControllers/deleteUser"));
const updateUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    try {
        // hacer las comprobaciones aqui
        const newUser = yield (0, updateUser_1.default)(userData);
        res.status(200).json(newUser);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateUserHandler = updateUserHandler;
const deleteUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // hacer las comprobaciones aquí
        if (!id)
            throw new Error('Id is null');
        const newUser = yield (0, deleteUser_1.default)(id);
        res.status(200).json(newUser);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteUserHandler = deleteUserHandler;
