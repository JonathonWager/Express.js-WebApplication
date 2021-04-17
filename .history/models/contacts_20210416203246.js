/* contacts.js
* Aaron LeBlanc 100700122
* Jonathon Wager 100698641
* April 16th, 2021
*/

// use strict is enabled
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// declaring constant mongoose_1 to equal import of required mongoose
const mongoose_1 = __importDefault(require("mongoose"));
// setting Schema to equal mongoose_1 default schema
const Schema = mongoose_1.default.Schema;
// declaring a new constant schema called Contact schema
const ContactSchema = new Schema({
	// schema contains first name, lastname and email of type string
	FirstName: String,
	LastName: String,
	EmailAddress: String,
}, {
	// delcaring the collection
    collection: "contacts"
});

// setting the model equal to the default model with contactSchema
const Model = mongoose_1.default.model("Contacts", ContactsSchema); 
// exporting the model
exports.default = Model;