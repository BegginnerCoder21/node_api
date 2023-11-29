const connect = require("../../database/userdb");
const mongoose = require('mongoose');
const urldb = "mongodb://127.0.0.1:27017/usersdb";
const user_model = require('../../models/UsersModel');

const deleteUsers = async (req,res)