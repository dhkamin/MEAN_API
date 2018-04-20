const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const router = express.Router();


const connection = (closure) =>{
    console.log('test');
    return MongoClient.connect('mongodb://localhost:27017/userDB',(err,client)=>{
      if (err) return console.log(err);
      let db = client.db('userDB');
      closure(db);
    })
  }
  
  
  router.post('/register',(req,res)=>{
    console.log('test');
    connection((db)=>{
      db.collection('users').insertOne(req.body,(err,result)=>{
        if(err) res.status(500).send(err);
        res.status(200).send(result);
      });
    })
  })
  
  router.post('/login',(req,res)=>{
    connection((db)=>{
      db.collection('users').findOne({email:req.body.email},(err,result)=>{
        if(err||!result) res.send({message:"user not found"})
        if(result.password == req.body.password){
          res.status(200).send({message:"ok"});
        }else{
          res.send({message:"wrong password"});
        }
      })
    })
  })
  

module.exports = router;