"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const probeHandlers_1 = require("../handlers/probeHandlers");
const probeRouter = (0, express_1.Router)();
probeRouter.post("/", probeHandlers_1.postProbeHandler);
// protegemos la ruta, pasar token por el header en Authorization
probeRouter.get("/", passport_1.default.authenticate('jwt', { session: false }), probeHandlers_1.getProbeHandler);
exports.default = probeRouter;
