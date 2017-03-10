var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    "username" : {type: String, reuired: true, unique: true},
    "password" : {type: String, required: true},
    "email": {type: String, required: true},
    "description": String
});

userSchema.pre("save", function (done) {
    var user = this;
    bcrypt.genSalt(10, function (error, salt) {
        bcrypt.hash(user.password, salt, function () {} ,function (error, data) {
            user.password = data;
            done();
        })
    })
})

module.exports = mongoose.model("User",userSchema);
