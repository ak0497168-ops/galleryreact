const moongoose=require("mongoose");

const postSchema= new moongoose.Schema({
    image:String,
    caption:String,
})

const postModel=moongoose.model("post",postSchema)

module.exports=postModel;