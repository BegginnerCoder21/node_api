const connect = require("../../database/userdb");
const mongoose = require('mongoose');
const urldb = "mongodb://127.0.0.1:27017/usersdb";
const user_model = require('../../models/UsersModel');

const updatedUsers = async(req,res) => {
    try {
        let idUser =new mongoose.Types.ObjectId(req.params.userId);
        let upname = req.body.name;
        let uplastname = req.body.lastname;
        let upaddress = req.body.address;
        let upphoneNumber = req.body.phoneNumber;
        connect(urldb);
        
        let user = await user_model.updateOne({_id : idUser},{
            name : upname,
            lastname : uplastname,
            address : upaddress, 
            phoneNumber : upphoneNumber
        });
        if(user.modifiedCount === 1){
            res.status(200).json(user);
        }else{
            res.status(404).json({messageError404 : "Aucun utilisateur n'a été trouvé"});
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({messageError : "Connexion à la base donnée échoué"});
    }
}

module.exports = updatedUsers;