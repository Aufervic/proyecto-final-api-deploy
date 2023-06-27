"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userHandlers_1 = require("../handlers/userHandlers");
const userRouter = (0, express_1.Router)();
// se usa tambien para banear 
userRouter.delete("/:id", userHandlers_1.deleteUserHandler);
// se usa al desbanear
userRouter.post("/revive/:id", userHandlers_1.reviveUserByIDHandler);
userRouter.get("/all", userHandlers_1.getAllUsersHandler);
userRouter.post("/find", userHandlers_1.findUserHandler);
userRouter.post("/:id", userHandlers_1.updateUserHandler);
// pregunta si existe un email por query
userRouter.get("/exists", userHandlers_1.existsUserEmailHandler);
// devuelve un grupo de usuarios segun email por params
userRouter.get("/group", userHandlers_1.findUsersGroupByEmailHandler);
userRouter.get("/:id", userHandlers_1.getUserByIDHandler);
exports.default = userRouter;
