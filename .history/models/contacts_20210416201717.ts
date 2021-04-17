/*
Jonathon Wager 100698641
Aaron Leblanc 100700122
4/16/2021
contact.ts
*/
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
