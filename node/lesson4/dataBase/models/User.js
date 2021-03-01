const {Schema,model}=require('mongoose');
const carSubScheme={
    model:{type:String},
    price:{type:Number}
};
const userScheme=new Schema({
    name:{type:String,required:true},
    age:{type:"Number",default:15},
    cars:[carSubScheme]
});

module.exports=model('User',userScheme)
