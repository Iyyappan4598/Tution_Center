const mongoose = require("mongoose");
const { v4 } = require('uuid')
const registerSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: v4
    },
    TutionName: {
        type: String,
    },
    location: {
        type: String,
    },
    Advance: {
        type: Number,
    },
    MonthlyFees: {
        type: Number,
    },
    NumberofStudents: {
        type: Number,
    },
    Standard:{
        String,
    },
    
    active: {
        type: Boolean,
        default: true,
    }
});
const register = mongoose.model("Tution", registerSchema);
module.exports = register;