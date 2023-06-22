"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authHandlers_1 = require("../handlers/authHandlers");
const authRouter = (0, express_1.Router)();
// create user
authRouter.post('/signup', authHandlers_1.signUpHandler);
// login
authRouter.post('/signin', authHandlers_1.signInHandler);
// cerrar sesion
authRouter.post('/logout', authHandlers_1.logOutHandler);
exports.default = authRouter;
