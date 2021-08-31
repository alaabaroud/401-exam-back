const  mongoose = require("mongoose");
const axios = require('axios');


const CryptoSchema = new mongoose.Schema ({
    title: String,
    toUSD:String,
    description: String,
    image_url: String,
});


const cryptoMongo = mongoose.model( 'crypto', CryptoSchema )

module.exports = cryptoMongo;