const express = require('express');
const addUsers = require('../controller/UsersController/AddUsersController');
const getAllUsers = require('../controller/UsersController/GetAllUsersController');
const routerUser = express.Router();

routerUser.route('/addUsers').post(addUsers);
routerUser.route('/allUsers').get(getAllUsers);

module.exports = routerUser;