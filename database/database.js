const mongoose = require('mongoose');

const MONGODB_URL = "mongodb://localhost:27017/codespaceDB"

exports.connect = () => {
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then()
    .catch((error) => {
        console.log('DB connection FAILED')
        console.log(error);
        process.exit(1)
    })
}