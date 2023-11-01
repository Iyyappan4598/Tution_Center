const userService = require('../service/userService')

//Create Tution Center
const createTutionData = async (req,res)=>{
    const data = await userService.TutionData(req.body);
    res.send(data)
}

//Create Teacher in Tution Center
const createTeacher = async (req,res)=>{
    const data = await userService.TeacherData(req.body);
    res.send(data)
}

//Create Student in Tution Center
const createStudent = async (req,res)=>{
    const data = await userService.StudentData(req.body);
    res.send(data)
}


module.exports={
    createTutionData,
    createTeacher,
    createStudent
}