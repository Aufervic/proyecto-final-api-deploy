"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rankingHandlers_1 = require("../handlers/rankingHandlers");
const rankingRouter = (0, express_1.Router)();
// create Ranking
rankingRouter.post("/", rankingHandlers_1.createRankingHandler);
rankingRouter.get("/all", rankingHandlers_1.getAllRankingHandler);
rankingRouter.get("/:id", rankingHandlers_1.getRankingByIDHandler);
rankingRouter.post("/update", rankingHandlers_1.updateRankingHandler);
rankingRouter.delete("/:id", rankingHandlers_1.deleteRankingHandler);
rankingRouter.post("/revive/:id", rankingHandlers_1.reviveRankingByIDHandler);
rankingRouter.post("/find", rankingHandlers_1.findRankingHandler);
exports.default = rankingRouter;
