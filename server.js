const express = require('express');
const articleRouter= require ('./routes/articles')
const app = express();

app.set('view engine', 'ejs');

app.use('/articles',articleRouter)

app.get('/', function (req, res) {

     const articles=[{
        title:'Test article 1',
        createdAt:new Date(),
        description:'Test description 1'
     },
     {
        title:'Test article 2',
        createdAt:new Date(),
        description:'Test description 2'
     }]

  res.render('articles/index',{articles});
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});