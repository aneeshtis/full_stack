var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CamSchema = new Schema({
    id:{type:String},
    name:{type:String},
    model_type:{type:String},
    color:{type:String},
    company:{type:String},
    cam_type:{type:String},
    resolution:{type:String},
    video_resolution:{type:String},
    auto_focus:{type:String},
    connectivity:{type:String},
    other:{type:String},
    price:{type:Number},
    pic:{type:String}
})

module.exports = mongoose.model("Cam_Details", CamSchema);