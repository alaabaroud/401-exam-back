const axios = require ('axios')
const cryptoMongo = require ('./mongo')


const postCrypto = async (req, res) => {
    const {title,toUSD,description,image_url} = req.body;
    const newObj = new cryptoMongo({
        title : title,
        toUSD: toUSD,
        description: description,
        image_url:image_url,
    })
newObj.save ();
res.send (newObj)
}
///////////////////////////////

const getFavCrypto = async (req,res) => {
    cryptoMongo.find ({}, (err, data)=>{
        res.send (data);
    })
}

//////////////////////////////


const deleteFav = async (req, res ) =>{
    const {c_id} = req.params; 
    cryptoMongo.remove ({_id: c_id}, (err,data)=> {
        cryptoMongo.find({}, (err, data)=>{
            res.send(data);
        })
    })
  

}


const updateFav = async (req, res) =>{
    const {c_is} = req.params; 
    const {title,toUSD,description,image_url} = req.body;
    cryptoMongo.findByIdAndUpdate({ _id:c_id},
        {title,toUSD,description,image_url}, {new:true}, (err,data)=> {
            res.send(data)
        })
}

module.exports ={postCrypto, getFavCrypto, deleteFav, updateFav }