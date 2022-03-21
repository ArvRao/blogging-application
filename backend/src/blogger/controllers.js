const pool = require('../../db')
const queries = require('./queries')

const getAllBloggers = (req, res) => {
  pool.query(queries.getBloggers, (err, results) => {
    if (err) throw err
    return res.status(200).json({
      length: results.rows.length,
      bloggers: results.rows,
    })
  })
}

const getBloggersById = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(queries.getBloggersById, [id], (err, results) => {
    if (err) throw err
    return res.status(200).json(results.rows)
  })
}

const addBlogger = (req, res) => {
  const {
    username,
    first_name,
    last_name,
    college,
    email,
    description,
    password,
    city,
  } = req.body

  //check if email or username is already taken
  pool.query(queries.checkEmailExists, [email], (err, results) => {
    if (results.rows.length) {
      return res.status(200).send('email or username already exists')
    }
  })

  pool.query(queries.checkUserNameExists, [username], (err, results) => {
    if (results.rows.length) {
      return res.send('username already exists')
    }
  })

  // add blogger to db
  pool.query(
    queries.addBlogger,
    [
      username,
      first_name,
      last_name,
      college,
      email,
      description,
      password,
      city,
    ],
    (err, results) => {
      if (err) throw err
      res.status(201).json({
        success: true,
        message: 'Student created successfully!',
      })
    }
  )
}

const updateBlogger = (req, res) => {
  const id = parseInt(req.params.id)
  const { first_name, last_name } = req.body

  pool.query(queries.getBloggersById, [id], (err, results) => {
    const noBloggerFound = !results.rows.length

    if (noBloggerFound) {
      return res.status(422).send('No blogger found with given id')
    }

    pool.query(
      queries.updateBlogger,
      [first_name, last_name, id],
      (error, results) => {
        if (error) throw error

        res.status(200).json({
          message: 'Successfully updated',
        })
      }
    )
  })
}

const deleteBlogger = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query(queries.getBloggersById, [id], (error, results) => {
    const noBloggerFound = !results.rows.length
    if (noBloggerFound) {
      return res
        .status(422)
        .json({ message: 'Blogger with given id is not found in database' })
    }

    pool.query(queries.deleteBlogger, [id], (err, results) => {
      if (err) throw err
      res.status(200).json({
        message: 'Blogger deleted successfully',
      })
    })
  })
}

module.exports = {
  getAllBloggers,
  getBloggersById,
  addBlogger,
  updateBlogger,
  deleteBlogger,
}
