const express= require('express');
const dotenv = require('dotenv');
const app= express();
const mongoose= require('mongoose');
dotenv.config()

app.use(express.json())
app.use("/api",require("./routes/userRoutes"))

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("database connected"))
.catch((err)=> console.error ("err",err))



  const PORT=process.env.PORT
  app.listen(PORT,()=> console.log("my server is running on port:",PORT))