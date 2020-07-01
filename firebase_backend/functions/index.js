const functions = require('firebase-functions');

const admin =require('firebase-admin');
admin.initializeApp();
//console.log("inside admin");
const db = admin.firestore();

const cors=require('cors');
const express=require('express');
const app=express();
app.use(cors())

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const getProjects=(req,res)=>{
    db.collection('projects').get().then((data)=>{
        //console.log(data);
        let d=[];
         data.forEach(x => {
            d.push({
                name:x.data().name,
                date:x.data().date,
                desc:x.data().desc,
                technologies:x.data().technologies
            });
        });
        return res.json(d);
    }).catch(err=>{
        console.log(err);
        if(err.code=='auth/email-already-in-use'){
            res.json({'response_code':"error","msg":"user already present","code":err.code});
        }
        else if(err.code="auth/weak-password"){
            res.json({'response_code':"error","msg":"strong password required","code":err.code});
        }
        else{
            res.json({'response_code':"error","msg":"server error","code":err.code});
        }
    });
};
const getDailyLogs=(req,res)=>{
    db.collection('dailylogs').orderBy('date',"desc").get().then((data)=>{
        //console.log(data);
        let d=[];
         data.forEach(x => {
            d.push({
                date:new Date(x.data().date._seconds*1000).toLocaleDateString(),
                desc:x.data().desc,
                
            });
        });
        return res.json(d);
    }).catch(err=>{
        console.log(err);
        if(err.code=='auth/email-already-in-use'){
            res.json({'response_code':"error","msg":"user already present","code":err.code});
        }
        else if(err.code="auth/weak-password"){
            res.json({'response_code':"error","msg":"strong password required","code":err.code});
        }
        else{
            res.json({'response_code':"error","msg":"server error","code":err.code});
        }
    });
};
app.get('/getProjects',getProjects);
app.get('/getDailyLogs',getDailyLogs);
//app.post('/register',register);
exports.api = functions.https.onRequest(app);