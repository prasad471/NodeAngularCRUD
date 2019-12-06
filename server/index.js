const express = require('express');
const app = express();
const cors = require('cors');
const uuid = require('uuid');
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
const fs = require('fs');
const port = 4000

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/postData',(req,res)=>{
    fs.readFile('data.json',(err,data)=>{
        var postObj = req.body;
        postObj.id = uuid.v4();
        var fileObject ={};
        if(err)
        {
           fileObject ={data:[postObj]};
        }
        else
        {
            var dataArray = JSON.parse(data.toString('utf8')).data;
            // var userStatus = dataArray.some(function(item,index,array){
            //     return item.name == req.params.name;
            // });
            // if(!userStatus)
            dataArray.push(postObj);
            fileObject = {data:dataArray}
        }
        fs.writeFile('data.json',JSON.stringify(fileObject),err=>{
            if(err)
            {
                res.status(500).send({"msg":"Failed"})
            }
            else
            {
                res.status(200).send({"msg":"success","data":postObj.id});
            }
        })
    })
    
   

});
app.get('/getData',(req,res)=>{
    fs.readFile('data.json',(err,data)=>{
        if(err)
        {
            res.status(500).send({"msg":"Error retreiving data"});
        }
        else
        {
            res.status(200).send({"msg":"Success",data:JSON.parse(data.toString('utf8')).data});
        }
    })
});

app.get('/user/:id',(req,res)=>{
    fs.readFile('data.json',(err,data)=>{
        if(err)
        {
            res.status(500).send({"msg":"Error retreiving data"});
        }
        else
        {
            var dataArray = JSON.parse(data.toString('utf8')).data;
            var result= {};
            result=  dataArray.find(function(item,index,array){
                return item.id==req.params.id;
            })
            res.status(200).send({"msg":"Success",data:result});
        }
    })
});

app.get('/deleteUser/:id',(req,res)=>{
    fs.readFile('data.json',(err,data)=>{
        if(err)
        {
            res.status(500).send({"msg":"Error retreiving data"});
        }
        else
        {
            var dataArray = JSON.parse(data.toString('utf8')).data;
            var result= {};
            result=  dataArray.filter(function(item,index,array){
                return item.id!=req.params.id;
            })
            
            fs.writeFile('data.json',JSON.stringify({data: result}),err=>{
                if(err)
                {
                    res.status(500).send({"msg":"Failed"})
                }
                else
                {
                    res.status(200).send({"msg":"success"});
                }
            })
        }
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))