var express = require('express'),
    bodyparser = require('body-parser'),
    mongoose = require('mongoose'),
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
mongoose.connection.on('open', function (data) {
    console.log('Succesfully connected ',data);
})

app.use(bodyparser());
app.listen(app.get('port'), function () {
    console.log('Server listening at ',app.get('port'));
})
