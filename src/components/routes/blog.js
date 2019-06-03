
module.exports = function(app, connection){
  app.get('/blog', function(req,res){
    connection.query('SELECT * FROM blog_posts', function(err, data){
      console.log({blog_posts:data[0].blog_title});
      //(err)?res.send(err):res.json({blog_posts:data[0].blog_title});
    });

    //res.send("Hello you clever chick!");

  });

};
