const res = require('express/lib/response')
const pool = require('../../db')
const queries = require('./queries')

const getAllPosts = (req, res) => {
  pool.query(queries.getPosts, (err, results) => {
    if (err) throw err
    return res.status(200).json({
      length: results.rows.length,
      posts: results.rows,
    })
  })
}

const getPostsById = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(queries.getPostsById, [id], (err, results) => {
    if (err) throw err
    return res.status(200).json(results.rows)
  })
}

const addPost = (req, res) => {
  const { title, body, author } = req.body

  pool.query(queries.addPost, [title, body, author], (err, results) => {
    if (err) throw err
    res.status(200).json({
      success: true,
      message: 'Post created successfully',
    })
  })
}

const updatePost = (req, res) => {
  const id = parseInt(req.params.id)
  const { title, body, author } = req.body

  pool.query(queries.getPostsById, [id], (err, results) => {
    const noPostFound = !results.rows.length

    if (noPostFound) {
      return res.status(422).json('No post found with given id')
    }

    pool.query(queries.updatePost, [title, body, author], (error, results) => {
      if (error) throw error
      res.status(200).json({
        message: 'Successfully updated',
      })
    })
  })
}

const deletePost = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query(queries.getPostsById, [id], (error, results) => {
    const noPostFound = !results.rows.length
    if (noPostFound) {
      return res
        .status(422)
        .json({ message: 'Post with given id is not found in database' })
    }

    pool.query(queries.deletePost, [id], (err, results) => {
      if (err) throw err
      res.status(200).json({
        message: 'Post deleted successfully',
      })
    })
  })
}

module.exports = {
  getAllPosts,
  addPost,
  getPostsById,
  updatePost,
  deletePost,
}
