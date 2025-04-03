

let express= require('express');
let mongoose= require('mongoose');
let baccheEnquiryModel= require('./models/Enquiry.model');
require('dotenv').config();
let app=express();
app.use(express.json());

app.post('/insert', (req, res) => {
    let {sName, sAge, sMobileNumber}=req.body;
    let enquiry=new baccheEnquiryModel({
        name:sName,
        age:sAge,
        // email:sEmail,
        mobileNumber:sMobileNumber,

    });
    enquiry.save().then(()=>{
        res.send({
            status:1,
            message:"Saved successfully"
        })
        
    }).catch((err)=>{
        console.log(err);
    })

});

mongoose.connect(process.env.MongoDb_URI).then(()=>{
   
    console.log("Database connected");
    console.log(process.env.MongoDb_URI);

    app.listen(process.env.PORT,()=>{
        console.log(`App is listening at ${process.env.PORT}`);
    })

})
