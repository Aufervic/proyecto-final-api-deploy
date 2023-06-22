"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userHandlers_1 = require("../handlers/userHandlers");
const userRouter = (0, express_1.Router)();
userRouter.post("/update", userHandlers_1.updateUserHandler);
userRouter.delete("/:id", userHandlers_1.deleteUserHandler);
userRouter.post("/revive/:id", userHandlers_1.reviveUserByIDHandler);
userRouter.get("/all", userHandlers_1.getAllUsersHandler);
userRouter.post("/find", userHandlers_1.findUserHandler);
// pregunta si existe un email por query
userRouter.get("/exists", userHandlers_1.existsUserEmailHandler);
userRouter.get("/:id", userHandlers_1.getUserByIDHandler);
exports.default = userRouter;
