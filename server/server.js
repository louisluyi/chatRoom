/**
 * Created by luyi-netease on 2016/5/16.
 */
'use strict';

let socket = require('socket.io');
let express = require('express');
let bodyParser = require('body-parser');
let expressConfig = require('./config/expressConfig');
let loginController = require('./controllers/loginController');

let app = express();
loginController(app);

//config for app
app.set('views', expressConfig.viewPath);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(expressConfig.port);