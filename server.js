const express = require("express");
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const Article = require('.model/Article')
const app = express();
app.set('view engine','ejs')

mongoose.connect('mongodb://localhost/blog')
app.use(express.urlencoded({extended:false}))

app.get('/', async (req, res) => {
  const articles = await Article.find()
  res.render('articles/index',{articles:articles})
})
app.use('/articles',articleRouter)

app.listen(5000)