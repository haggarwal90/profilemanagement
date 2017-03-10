var express = require('express'),
    bodyparser = require('body-parser'),
    mongoose = require('mongoose'),
    userroute = require('./routes/user')
    app = express();

app.set('port',8009);
mongoose.connect('mongodb://localhost:27017/profilemanagement', function (error) {
    if(error) {
        console.error('Error : ',error);
        throw error;
    }
});
/*open event is fired on the Connection instance. If you're using mongoose.connect, the Connection is mongoose.connection. ' +
'Otherwise, mongoose.createConnection return value is a Connection*/
mongoose.connection.on('open', function () {
    console.log('Successfully connected');
})

app.use(bodyparser());
app.use('/',userroute);
app.listen(app.get('port'), function () {
    console.log('Server listening at ',app.get('port'));
})
