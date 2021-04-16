import mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema
({
	Username: String,
	password: String,
})

const Model = mongoose.model("User", UsersSchema);

export default Model;
