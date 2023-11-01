const TutionModel = require('../model/Tution')
const TeacherModel = require('../model/Teacher')
const StudentModel = require('../model/Student')

const TutionData = async(body)=>{
    const datas=await TutionModel.create(body);
    return datas;
}

const TeacherData = async(body)=>{
    const datas=await TeacherModel.create(body);
    return datas;
}

const StudentData = async(body)=>{
    const datas=await StudentModel.create(body);
    return datas;
}

module.exports={
    TutionData,
    TeacherData,
    StudentData
}