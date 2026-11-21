const mongoose=require("mongoose")
 

async function connectDB() {
    await  mongoose.connect("mongodb+srv://yt:mA67qTIjK5DsOvag@yt-backend.ddm7gm5.mongodb.net/project-1")
    console.log("connected to Db");
    
}

module.exports=connectDB;