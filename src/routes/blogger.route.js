const express = require('express')
const app = express()

const client = require('../../db')

const router = express.Router()
app.use(express.json())

const query = `
SELECT * FROM blogger
`

router.get('/', async (req, res) => {
  client.query(query, (err, res) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(res.rows)

    client.end()
  })
})

router.get('/:id', (req, res) => {
  client.query(
    `Select * from blogger where id=${req.params.id}`,
    (err, results) => {
      if (!err) {
        res.json(results.rows)
        console.log('worked')
      }
    }
  )
  client.end()
})

module.exports = router
