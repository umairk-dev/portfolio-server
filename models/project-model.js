const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Project = new Schema(
    {
        name : { type : String, required : true},
        description : { type : String, required : true},
        hasVideo : {type:Boolean, default:false},
        video : {type:String},
        preview : { type : String, required : true},
        tags : {type: [String]},
        images : {type: [String]},
    },
    { timestamps: true },
)

module.exports = mongoose.model('projects',Project)