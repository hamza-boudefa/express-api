const user=require('../modules/userSchema')

// add new user

const addUser=async(req,res)=>{
    try {
const newUser=new user(req.body)
const User=await newUser.save()
return res.json({message:"user added",User})
    } catch (error) {
return res.json(error.message)
    }
}

// get all users

const getAll=async(req,res)=>{
    try {

        const allUsers=await user.find()

        return res.json(allUsers)
    } catch (error) {
        return res.json(error.message)
    }
}

// get user by id

const getUSerById=async(req,res)=>{
    try {
        const User=await user.findById(req.params.id)
        return res.json(User)
    } catch (error) {
        return res.json(error.message)
    }
}

// update
const updateUser=async(req,res)=>{
    try {
   
        const User=await user.findOneAndUpdate({_id:req.params.id},{$set:{name:req.body.name}},{new:true})
        return res.json(User)
       
    } catch (error) {
        return res.json(error.message)
    }
}
// delete

const deletUser=async(req,res)=>{
    try {
        await user.findByIdAndDelete(req.params.id)
        return res.json('user deleted')
    } catch (error) {
        return res.json(error.message)
    }
}

module.exports={addUser,getAll,getUSerById,updateUser,deletUser}