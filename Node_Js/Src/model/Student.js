const mongoose = require("mongoose");
const { v4 } = require('uuid')
const registerSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: v4
    },
    TeacherID: {
        type: String,
    },
    Name: {
        type: String,
    },
    FatherName: {
        type: String,
    },
    ParentMobile: {
        type: String,
    },
    ClassTime: {
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
const register = mongoose.model("Student", registerSchema);
module.exports = register;