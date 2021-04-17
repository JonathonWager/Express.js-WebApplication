/*
Jonathon Wager 100698641
Aaron Leblanc 100700122
4/16/2021
users.ts
*/
import mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema
({
	Username: String,
	password: String,
})

const Model = mongoose.model("User", UsersSchema);

export default Model;
