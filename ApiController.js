const axios = require('axios');
const cryptoModel =require ('./Model')

const getCrypto = async (req, res) => {
await axios
.get("https://crypto-explorer.herokuapp.com/crypto-list/")
.then (result =>{
    const response = result.data.map(i=> {
        return new cryptoModel(i)
    })
    res.send (response)
}).catch (err=> {
    console.log(err);
})

}

module.exports = getCrypto 