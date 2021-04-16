import mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactsSchema = new Schema
({
	FirstName: String,
	LastName: String,
	EmailAddress: String,
})

const Model = mongoose.model("Contacts", ContactsSchema);

export default Model;
