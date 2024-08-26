const User=require("../Models/userSchema")



//getUser
const getUser=async(req,res)=>{
    try{
        const newUser = await User.find();
        res.status(200).json({message:"find all users",newUser})
    }
catch{
    res.status(500).json( {message: err.message} );
}
}
 
//postUser
const postUser=async(req,res)=>{
    try{
        const newUser = await User.create(newUser);
        await newUser.save()
        res.status(200).json( {message:"create message",newUser} );
    }
catch{
    res.status(500).json( {message : err.message} );
}
}
//putUser
const putUser=async(req,res)=>{
    try{
        const newUser = await User.findByIdAndUpdate({_id:req.params.id},{...req.body})
        if (! newUser) return res.status(404).json( {message :"Not found"} );
        res.status(200).json( {message:"User Updated",newUser} );

    }
catch{
    res.status(500).json( {message :err.message} );
}
}
//deleteUser
const deleteUser=async(req,res)=>{
    try{
        const newUser = await User.findByIdAndDelete({_id:req.params.id})
        if (! newUser) return res.status(404).json( {message :"Not found"} );
        res.status(200).json( {message:"User Deleted",newUser} );

    }
catch{
    res.status(500).json( {message: err.message} );
}
}


module.exports={getUser,createUser,updateteUser,deleteUser}
