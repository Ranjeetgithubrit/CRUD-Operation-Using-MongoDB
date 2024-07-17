const express = require('express');
const UserModel = require('./connection');
const app = express();

app.get('/', (req,res) => {
    res.send("Hello World")
});

app.get('/insert', async(req,res) => {
    const insertuser = await UserModel.create({
        name: "Tmanjeet",
        email: "tmanjeet@gmail.com",
        address: "Gopalganj"
    })
    res.send(insertuser);
    
});


app.get('/update', async(req,res) =>{
    const updateuser = await UserModel.findOneAndUpdate({name:"Tmanjeet"},{name:"Gaurav"},{new:"true"})
    res.send(updateuser);
})

app.get('/read',async(req,res) => {
    const readuser = await UserModel.find();
    res.send(readuser);
})

app.get('/delete',async(req,res) =>{
    const deleteuser = await UserModel.findOneAndDelete({name: "Gaurav"})
    res.send(deleteuser);
})



app.listen(5007,() => {
    console.log("Server is listening on Port 5007")
});