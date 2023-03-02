//-- index.js Isha Koithadia 301298827 02/03/2023-->

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

router.get('/add', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/
  res.render('books/details', {
    title: 'Books',
  });
});

module.exports = router;
