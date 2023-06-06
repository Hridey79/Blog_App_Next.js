import mongoose from "mongoose";

require('dotenv').config();

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to the database");
    }
    catch(error){
        console.log(error);
        throw new Error("Connection failed")
    }
};

export default connect;