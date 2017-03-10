/**
 * Created by Himanshu on 10/3/17.
 */
var express = require('express'),
    User = require('./../model/user')
router = express.Router();

router.get("/login", function (req, res, next) {
    var user = req.body;
    //User.find({})
})

router.post("/signup", function (req, res, next) {
    var user = req.body;
    User.findOne({username: user.username}, function (error, data) {
        if (error) {
            throw error;
        }
        console.log('data : ', JSON.stringify(data));
        // data null means no user found
        if (!data) {
            new User({
                username: user.username,
                password: user.password,
                email: user.email
            }).save(function (error, data) {
                    if (error) {
                        throw error;
                    }
                    res.send(200, {"message": "Success", "data": data});
                });
        } else {
            res.send(400, {"message": "Error", "Error" : user.username + " already exits" });
        }
        //res.send(200, {"message" : "Success" , "data" : data});
    });

})

module.exports = router;
