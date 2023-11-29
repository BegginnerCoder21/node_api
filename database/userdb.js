const mongoose = require('mongoose');

const connect = async(urldb) => {
    try {

       await mongoose.connect(urldb);

    } catch (error) {
        handleError(error);
    }

}

module.exports = connect;