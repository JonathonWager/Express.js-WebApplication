/* contacts.ts
* Aaron LeBlanc 100700122
* Jonathon Wager 100698641
* April 16th, 2021
*/

// importing and requiring mongoose
import mongoose = require('mongoose');
// declaring const Schema of mongoose schema
const Schema = mongoose.Schema;

// declaring schema ContactsSchema 
const ContactsSchema = new Schema
({
	// schema contains first name, lastname and email of type string
	FirstName: String,
	LastName: String,
	EmailAddress: String,
})

const Model = mongoose.model("Contacts", ContactsSchema); 

export default Model;

