const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

let users = require('./user.json');
let orders = require('./order.json');
let server = express();
server.use(bodyParser.json());  // ให้ server(express) ใช้งานการ parse json
server.use(morgan('dev')); // ให้ server(express) ใช้งานการ morgam module
server.use(cors()); // ให้ server(express) ใช้งานการ cors module

server.get('/order', function (req, res, next) {
    return res.status(200).json({
        code: 1,
        message: 'OK',
        data: orders
    })
});

server.get('/order/:id', function (req, res, next) {
    return res.status(200).json({
        code: 1,
        message: 'OK',
        data: orders[req.params.id]
    })
});



server.post('/order/:id', function (req, res, next) {

   console.log(Date.now());
   console.log(req._startTime);
   console.log(orders);
    if(orders[req.params.id].stock - req.query.numbers < 0){
        return res.status(404).json('the number you purchase more than stock')
    }
    orders[req.params.id].stock -= req.query.numbers

    return res.status(201).json({
        code: 1,
        message: 'OK',
        data: orders[req.params.id]
    });
});



server.listen(3000, function () {
    console.log('Server Listen at http://localhost:3000');
    console.log('Orders :', orders)
});