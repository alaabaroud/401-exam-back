const express = require('express');

const cors = require('cors');

const axios = require('axios');

require('dotenv').config();

const app= express();

app.use(cors());

app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

const PORT = process.env.PORT || 8000
//////////////////////////
const getCrypto = require ('./ApiController')
const {postCrypto, getFavCrypto, deleteFav,updateFav} = require ("./crud")

//////////////////////////

app.get ('/' ,(req, res)=> {
    res.send ("hi")
})
///////////////////////////

app.get ("/crypto" , getCrypto);
app.post ("/crypto/fav" , postCrypto);
app.get ("/crypto/fav" , getFavCrypto);
app.delete ("/crypto/fav/:c_id", deleteFav)
app.put ("/crypto/fav/:c_id", updateFav)
/////////////////////////




app.listen(PORT ,()=> {
    console.log(`server listening to ${PORT}`);
})