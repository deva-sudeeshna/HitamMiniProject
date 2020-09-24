var express = require('express');
app = express();
var cors = require('cors');

var accounts =require('./routes/accounts');

if (process.env.NODE_ENV === 'production') {
    
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
app.post('/accounts/add', accounts.createAccount);
server.listen(process.env.PORT || 8080);
 /*End using APP*/
 
