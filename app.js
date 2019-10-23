const express = require('express')
const path = require('path')

const app = express()
const port = 5000

var server = require('http').createServer(app);
var io = require('socket.io')(server);

var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true })); 

require("./route/route.js")(app);

app.use(express.static(path.join(__dirname, 'public')));
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'app/views/'))
app.set('view engine','html');



server.listen(port, () => console.log(`Example app listening on port ${port}!`))

io.on('connection', function(socket){
   socket.on('chat message', function(msg){
   	    io.emit('chat message', msg);
  });
});
