/*
Jonathon Wager 100698641
Aaron Leblanc 100700122
4/16/2021
users.js
*/
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ContactSchema = new Schema({
	Username: String,
	password: String,
}, {
    collection: "contacts"
});
const Model = mongoose_1.default.model("User", UsersSchema);
exports.default = Model;