const mongoose=require('mongoose');

var dataSchema = mongoose.Schema({
    blogName:{type:String},
    blogDescription: { type: String, trim: true, required: true},
    user_id:{type:Schema.ObjectId,ref:'user'}
},{timestamps:true});

module.exports=mongoose.model('data',dataSchema);