const connect = require("../../database/userdb");
const urldb = "mongodb://127.0.0.1:27017/usersdb";
const user_model = require('../../models/UsersModel');

const getAllUsers = async(req,res) => {
    try {
        connect(urldb);
        let allUsers =await user_model.find();
        if(allUsers.length > 0){
            res.status(200).json(allUsers);
        }else{
            res.status(200).json({messageErro404 : "Aucun utilisateur n'a été enregistrer"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({messageError : "Connexion à la base donnée échoué"});
    }
}

module.exports = getAllUsers;