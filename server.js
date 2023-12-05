const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 80;
const bodyParser = require('body-parser');
const app = express();
const http = require('http');
const server = http.createServer(app);
//INIT NODEJS
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());
// port
server.listen(PORT, () => {
    console.log(`Server đang chạy trong PORT: ${PORT}`);
});

const Router = require('./src/routers/routers');
app.use(Router);
