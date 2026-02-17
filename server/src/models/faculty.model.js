import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        reqired: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        Lowercase: true
    },
    password: {
       type: String,
       required: true,
       minLength: 5,
       maxLength: 15
    },
    
}, {timestamps: true})

const FacultyAdmin = mongoose.model("FacultyAdmin", facultySchema);

export default FacultyAdmin;