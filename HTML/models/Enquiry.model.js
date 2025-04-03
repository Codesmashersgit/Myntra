let mongoose= require('mongoose');

let baccheEnquirySchema= mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    age:{
        type:Number,
        required:true

    },
    // email:{
    //     type:String,
    //     required:true,
    //     unique:true ,
      
    // },
    mobileNumber:{
        type:Number,
        required:true,
        unique:true,
        
    },
    
    
});

let baccheEnquiryModel=mongoose.model("enquiry",baccheEnquirySchema);
module.exports=baccheEnquiryModel;