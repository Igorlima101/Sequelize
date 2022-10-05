const Address = require("../models/Address-model")
const Users = require("../models/User-model")

module.exports ={
    async createAddress(req,res){

    const {user_id} = req.params
    const {zipcode, street, number} = req.body
    let data = {}
    const user = await Users.findByPk(user_id)
    
    if(!user){
        return await res.status(400).json("User not found")
    }
   else{
    data = {zipcode, street, number , user_id}
    const address = await Address.create(data)

    return res.json(address)
   }

},

async index(req,res){
    const {user_id} = req.params
    const user = await Users.findByPk(user_id, {
        include: {association: 'addresses' }
    })

    return res.json(user)

}

}