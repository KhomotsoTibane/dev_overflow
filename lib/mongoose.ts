import mongoose from "mongoose"

let isConnected: boolean = false;

export const connectToDatabase = async ()=>{
    mongoose.set("strictQuery", true)


    if(!process.env.MONGODB_URL){
    return console.log("missing mongo db url")
    }

    if(isConnected){
    console.log("MongoDB is already connected");
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL,{
        dbName:"devFlow"
        })

        isConnected=true;
        console.log("mongodb is connected");
    } catch (error) {
        console.log("error", error)
    }
}



