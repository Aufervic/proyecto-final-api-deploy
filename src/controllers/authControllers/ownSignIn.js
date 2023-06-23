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
const User_1 = __importDefault(require("../../models/User"));
const helpers_1 = require("../../helpers");
const bcrypt_1 = __importDefault(require("bcrypt"));
const ownSignIn = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findOne({ email, isDeleted: false });
    if (!user)
        throw new Error('The email not exists');
    let checkPass = yield bcrypt_1.default.compare(password, user.password);
    if (!checkPass)
        throw new Error('The username or password are incorrect');
    return { access: true, token: (0, helpers_1.createToken)({ id: user._id, email: user.name }), user };
});
exports.default = ownSignIn;
