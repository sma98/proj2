//set up express server
const express = require("express");

const mongoose = require("mongoose");

const cors = require('cors');

// initialization our express server
const app = express();

const TrainerModel = require("./models/newTrainer");

//receving information in frontend in jason format
app.use(express.json());
app.use(cors());



mongoose.connect("mongodb+srv://CRUD:PmxERvlvcAAp3DMN@crud.pslo3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});



app.post("/insert", async (req, res) => {
console.log("HJGJSHDSFD");
    const name = req.body.name;
    const image = req.body.image;
    const nic = req.body.nic;
    const description = req.body.description;
    const email = req.body.email;
    const pnum = req.body.pnum;
    const cid = req.body.cid;
 
    const Trainer = new TrainerModel({ name: name,nic: nic,  cid: cid,email: email,pnum: pnum,image: image,description: description   });
    console.log(name + " of " + image);
    try {
        await Trainer.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }

});





app.listen(3001, () => {
    console.log("server runing on port 3001...");
});
