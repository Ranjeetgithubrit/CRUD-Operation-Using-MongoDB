const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/api`);

const UserSchema = mongoose.Schema({
    name: "String",
    email: "String",
    address: "String"
});

module.exports = mongoose.model("user",UserSchema);