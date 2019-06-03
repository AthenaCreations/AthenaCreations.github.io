const express = require('express');
const router = new express.Router();
const PORT = process.env.PORT || 3000;


const mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'Osiris01!',
  database:'personal_blog'
});

connection.connect(function(err){
  (err)? console.log(err): console.log(connection);
});

require('./src/components/blog')(app, connection);

router.listen(PORT, ()=>{
  console.log(`App running at port ${PORT}`);
});
