const express = require("express")
const app =express()
const mongoose = require('mongoose')
const ejs =require('ejs')

app.use('/',express.static('view'))
app.get("/input",(req,res)=>{
    // res.send(req.query)
    // console.log(req.query)

    const kitty = new mydata({ name: req.query.first,health: req.query.second});
    kitty.save()
    ejs.renderFile("view/result.html",{returnVal:"success"},(err,str)=>{
        res.send(str)
    })
})
app.listen(10834)