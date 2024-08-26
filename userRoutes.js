const express= require('express');
const router =express.Router();
const {getUser,createUser,updateteUser,deleteUser}=require("../controllers/userControllers")


router.get("/get",getUser)
router.post("/post",createUser)
router.put("/pust/:id",updateteUser)
router.delete("/delete/:id",deleteUser)

module.exports=router
