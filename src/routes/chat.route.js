"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chatHandlers_1 = require("../handlers/chatHandlers");
const chatRouter = (0, express_1.Router)();
// create Chat
chatRouter.post("/", chatHandlers_1.createChatHandler);
chatRouter.get("/all", chatHandlers_1.getAllChatsHandler);
chatRouter.put("/update", chatHandlers_1.updateChatHandler);
chatRouter.delete("/:id", chatHandlers_1.deleteChatHandler);
chatRouter.get("/find", chatHandlers_1.findChatHandler);
chatRouter.get("/:id", chatHandlers_1.getChatByIDHandler);
chatRouter.post("/revive/:id", chatHandlers_1.reviveChatByIDHandler);
exports.default = chatRouter;
