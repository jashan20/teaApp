const express = require('express')
const contactrouter = express.Router()
const mongoose = require('mongoose')

const Contact = require("../models/contact")
//const Class = mongoose.model("classObservation")

contactrouter.post('/', (req,res) => {
    // const { name,email,message,pincode } = req.body
    // if(!name){
    //     return res.status(422).json({
    //         error: "Please fill all student name"
    //     })
    // }
    const contacts = new Contact(req.body)
    // console.log(req.body)
    contacts.save((err, contacts) => {
        if(err){
            return res.status(400).json({
                message: "NOT able to save class in the Database",
                error: err
            })
        }
        res.json({
            "message": "Done Successfully"
        })
    })

    // res.send("Your Message has been sent")
    res.render('jashan.ejs')
});
  
// Get Route
contactrouter.get('/', (req,res)=>{

    res.render('tea');
    // res.send("Message has been sent Successfully")
})


module.exports = contactrouter