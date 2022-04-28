const http = require('http');
const axios = require('axios').default;
const url = "http://localhost:3000/order/"


function postOrder(amount) {
  return axios.request({url:'http://localhost:3000/order/0',method:'post',params:{numbers:amount}})
}

function getOrder() {
    return axios.get('/user/12345');
}

function getUserPermissions() {
    return axios.get('/user/12345/permissions');
}

// Promise.all([postOrder(5), postOrder(8)])
//     .then(async(results) => {
//         const acct = results[0];
//         const perm = results[1];
//     })


function callback() {
    setTimeout(function inner() {
        console.log('hello inner!');
    }, 0); // †

    setTimeout(function postOrder(amount) {
        axios.request({url:'http://localhost:3000/order/0',method:'post',params:{numbers:8}})
      },1000);
}

setTimeout(callback, 0);
setTimeout(callback, 0);
