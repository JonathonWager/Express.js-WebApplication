/* users.ts
* Aaron LeBlanc 100700122
* Jonathon Wager 100698641
* April 16th, 2021
*/
// importing mongoose and requiring mongoose
import mongoose = require('mongoose');
// declaring const Schema of mongoose schema
const Schema = mongoose.Schema;

// declaring schema UsersSchema 
const UsersSchema = new Schema
({
	// schema contains username and password of type string
	Username: String,
	password: String,
})

// declaring the model and setting to the UsersSchema
const Model = mongoose.model("User", UsersSchema);

// exporting the model
export default Model;
