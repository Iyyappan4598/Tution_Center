const express = require('express')

const router = express.Router();

const userControl=require('../controller/userControl')


//Post Method Tution Teacher Student
router.post('/tutionCenter/Tution', userControl.createTutionData)
router.post('/Create/Teacher/data', userControl.createTeacher)
router.post('/Create/Student/data', userControl.createStudent)


module.exports=router;