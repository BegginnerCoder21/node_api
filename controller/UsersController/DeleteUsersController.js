const connect = require("../../database/userdb");
const mongoose = require('mongoose');
const urldb = "mongodb://127.0.0.1:27017/usersdb";
const user_model = require('../../models/UsersModel');

const deleteUsers = async (req,res) => {
    try {
        let idUser = new mongoose.Types.ObjectId(req.params.userId);
        connect(urldb);
        const user = await user_model.deleteOne({_id : idUser});
        if(user.deletedCount === 1){
            res.status(200).json({messageSuccess : "L'utilisateur a été supprimer avec succès"});
        }else{
            res.status(404).json({messageError404 : "Aucun utilisateur n'a été trouvé"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({messageError500 : "Connexion à la base donnée échoué"});
    }
}

module.exports = deleteUsers;