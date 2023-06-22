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
exports.logOutHandler = exports.signInHandler = exports.signUpHandler = void 0;
const signUp_1 = __importDefault(require("../controllers/authControllers/signUp"));
const thirdSignIn_1 = __importDefault(require("../controllers/authControllers/thirdSignIn"));
const ownSignIn_1 = __importDefault(require("../controllers/authControllers/ownSignIn"));
const signUpHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // a parte de crear debe loguear al usuario
    const userData = req.body;
    try {
        if (!userData) {
            return res.status(400).json({ error: 'please enter user data' });
        }
        const user = yield (0, signUp_1.default)(userData);
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.signUpHandler = signUpHandler;
function _ownSignInHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'please enter username, password and email' });
        }
        const result = yield (0, ownSignIn_1.default)({ email, password });
        res.status(200).json(result);
    });
}
function _thirdSignInHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userData = req.body;
        const result = yield (0, thirdSignIn_1.default)(userData);
        res.status(200).json(result);
    });
}
const signInHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // logueo directo
    // logueo por terceros
    // si es por terceros tiene que indicar el type 'google' , 'facebook', 'github'...
    // tambien debe enviar el token y otros datos
    const { type } = req.body;
    try {
        if (!type) {
            yield _ownSignInHandler(req, res);
        }
        else {
            yield _thirdSignInHandler(req, res);
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.signInHandler = signInHandler;
const logOutHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // eliminar la autenticación (token)
    try {
        res.status(200).json({ tempMessage: "Por el momento nada" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.logOutHandler = logOutHandler;
