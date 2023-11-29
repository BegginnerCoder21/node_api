const express = require('express');
const routerUser = express.Router();
const addUsers = require('../controller/UsersController/AddUsersController');
const getAllUsers = require('../controller/UsersController/GetAllUsersController');
const updatedUsers = require('../controller/UsersController/UpdatedUsersController');

routerUser.route('/addUsers').post(addUsers);
routerUser.route('/allUsers').get(getAllUsers);
routerUser.route('/updatedUsers/:userId').put(updatedUsers);

module.exports = routerUser;