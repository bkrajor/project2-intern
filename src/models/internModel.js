const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const internModel = new mongoose.Schema({
    name: {
        type: String, required: true, trim: true
    },
    email: {
        type: String, required: true, unique: true, lowercase: true, trim: true
    },
    mobile: {
        type: Number, unique: true, required: true, trim: true   
    },
    collegeId: {
        type: ObjectId, required: true, ref: "college"
    },
    isDeleted: {
        type: Boolean, default: false
    }
}, { timestamps: true });

module.exports = mongoose.model("intern", internModel)
