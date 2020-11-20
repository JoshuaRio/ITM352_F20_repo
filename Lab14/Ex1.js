const fs = require('fs');

const user_data_filename = 'user_data.json';
var data;


var data = fs.readFile(user_data_filename, (user_data_filename, 'utf-8'))

users_reg_data = JSON.parse(data);

if(typeof users_reg_data['itm352'] == 'undefined') {
    console.log(users_reg_data