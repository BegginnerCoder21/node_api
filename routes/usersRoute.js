const express = require('express');
const addUsers = require('../controller/UsersController/AddUsersController');
const routerUser = express.Router();

routerUser.route('/addUsers').post(addUsers);

module.exports = routerUser;