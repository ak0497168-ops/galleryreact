const ImageKit=require('@imagekit/nodejs');

const imagekit = new ImageKit({

    privateKey: "private_RVZb3hJ8aLlxj6HitlumhQw6kyQ="
})

async function uploadFile(buffer) {
    // console.log(buffer);
    
    
    const result=await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName:"image.jpg"
    })

    return result;
}


module.exports=uploadFile;