// let express = require('express');
// let router = express.Router();

// // CREATE A REFERENCE TO THE DB SCHEMA WHICH IS THE MODEL 
// let Books = require('../models/books');

//  = (req, res, next) => {
//     BC.find((err, businessContactList) => {
//         if(err)
//             return console.error(err);
//         else
//             res.render('businesscontact/list',{
//                 title:'Business Contact',
//                 businessContactList:businessContactList,
//                 displayName:req.user?req.user.displayName:""
//             });
//     }).sort({ name: 1 });
// };


let newBusinessContact = BC({
    'name':req.body.contactname,
    'number':req.body.mobilenumber,
    'email':req.body.contactemail
});
BC.create(newBusinessContact,(err,BC) => {
    if(err) 
    {
        console.log(err);
        res.end(err);
    }
    else 
    {
        res.redirect('/businessContactList');
    }
});
