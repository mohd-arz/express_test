import express from "express";

const app = express();

app.get('/',(req,res):any=>{
    return res.json({'message':"Working"})
});

app.listen(3000,()=>{
    console.log('port is listening');
})