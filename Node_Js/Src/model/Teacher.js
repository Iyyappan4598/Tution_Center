const mongoose = require("mongoose");
const { v4 } = require('uuid')
const registerSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: v4
    },
    TutionID: {
        type: String
    },
    Name: {
        type: String,
    },
    Sallery: {
        type: Number,
    },
    NumberofStudents: {
        type: Number,
    },
    ClassTime:{
        type: String,
    },
    Standard: {
        type: String,
    },
    location: {
        type: String,
    },

    active: {
        type: Boolean,
        default: true,
    }
});
const register = mongoose.model("Teacher", registerSchema);
module.exports = register;