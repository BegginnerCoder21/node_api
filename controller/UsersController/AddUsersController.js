const connect = require("../../database/userdb");
const urldb = "mongodb://127.0.0.1:27017/usersdb";
const user_model = require('../../models/UsersModel');

const addUsers = async(req,res) => {

    try {
        connect(urldb);
        let reqname = req.body.name;
        let reqlastname = req.body.lastname;
        let reqaddress = req.body.address;
        let reqphoneNumber = req.body.phoneNumber;
            let users = new user_model({
                name : reqname,
                lastname : reqlastname,
                address : reqaddress,
                phoneNumber : reqphoneNumber
            });
            await users.save();
            res.status(200).json({messageSuccess : "Utilisateur enregistré avec succès"});
    } catch (error) {
        console.log(error);
        res.status(500).json({messageError : "Connexion à la base donnée échoué"});
    }
}

module.exports = addUsers;