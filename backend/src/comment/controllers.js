const pool = require('../../db')
const queries = require('./queries')

// get all comments for particular post
const getAllCommentsById = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(queries.getAllComments, [id], (err, results) => {
    if (err) throw err
    return res.status(200).json({
      length: results.rows.length,
      comments: results.rows,
    })
  })
}

module.exports = {
  getAllCommentsById,
}
