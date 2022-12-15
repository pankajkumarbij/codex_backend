const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const Users =  require('./routes/user');
const Posts =  require('./routes/post');

require('./utils/db')();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(cors());
app.use('/', Users);
app.use('/', Posts);

app.get('/', function(req,res,next) {
    res.send("Welocme to Codex Blog world!");
})

app.listen(5000, function () {
    console.log('Server listening on port 5000');
})