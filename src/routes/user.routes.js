"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userHandlers_1 = require("../handlers/userHandlers");
const userRouter = (0, express_1.Router)();
userRouter.post('/update', userHandlers_1.updateUserHandler);
userRouter.delete('/:id', userHandlers_1.deleteUserHandler);
exports.default = userRouter;
