const express = require('express')
const app = express()
app.use(express.json())
const bloggerRoutes = require('../backend/src/blogger/routes')
const postRoutes = require('../backend/src/post/routes')
const commentRoutes = require('../backend/src/comment/routes')

const dotenv = require('dotenv')
dotenv.config()

app.use('/api/v1/bloggers', bloggerRoutes)
app.use('/api/v1/posts', postRoutes)
app.use('/api/v1/comments', commentRoutes)

const customMiddleWare = (req, res, next) => {
  console.log('Middleware')
  next()
}

app.get('/', customMiddleWare, (req, res) => {
  console.log('Function')
  res.send('hello')
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
