const Users = require('../models/User-model')

module.exports ={

    async list(req,res){
        const user = await Users.findAll()
        return res.json(user)
    },

    async create(req,res){
        const {name, number, email} = req.body
        let data = {}
        let user = await Users.findOne({
            where: {number}
        })
        if(!user){
            data = {name, number, email}
            user = await Users.create(data)
            return res.status(201).json(user)
        } 
        else {
            return res.status(400).json("User already exists")
        }
    },

    async delete(req,res){
        const {_id } = req.params

        let user = await Users.findByPk(_id)
        if(!user){
            return res.status(400).json("User not found")
        }
        else {
            user = await Users.destroy({
                where: {
                    id: _id
                }
            })
            return res.status(200).json("User deleted")
        }
    }

}