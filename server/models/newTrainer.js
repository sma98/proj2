const mongoose=require("mongoose");

const TrainerSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
        },
        nic:{
            type:String,
            required:true,
        },
        cid:{
            type:String,
            required:true,
        },
       
        email:{
            type:String,
            required:true,
        },
       pnum:{
            type:String,
            required:true,
        },
        image:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
    });

const Trainer=mongoose.model("Trainer",TrainerSchema);
module.exports=Trainer;
