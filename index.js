const express = require('express')
const mongoose = require('mongoose')
const School = require('./model/SchoolSchema');
const Mark = require('./model/MarksSchema');

const app = express();
const PORT = 5000;
const uri = 'mongodb+srv://shubham:admin@testcluster.4cqpg.mongodb.net/IT?authSource=admin&replicaSet=atlas-man7yl-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true'
mongoose.connect(uri);

app.get('/', (req, res)=>{

    School.find({}).then((resu)=>{
        res.setHeader('Content-Type','application/json');
        res.json(resu);
    });
})

app.get('/:schoolId', (req, res)=>{

    School.find({'School_ID':req.params.schoolId}).then((data1)=>{
        // console.log(data1);
        // console.log(req.params.schoolId);
        Mark.find({'School_ID':req.params.schoolId}).then((data2)=>{

            var resObj = {
                school_id : data1[0].School_ID,
                school_name : data1[0].School_Name,
                building_code : data1[0].Building_Code,
                address: data1[0].Street_Address,
                city:data1[0].City,
                state:data1[0].State,
                zipcode:data1[0].ZIP_CODE,
                phone:data1[0].Phone,
                avg_score_math : data2[0].Average_Math,
                avg_score_reading : data2[0].Average_Reading,
                avg_score_writing : data2[0].Average_Writing
            }

            res.setHeader('Content-Type','application/json');
            res.json(resObj);
        })
    });
})


app.listen(PORT, () => console.log(`Server Started on port ${PORT}`))