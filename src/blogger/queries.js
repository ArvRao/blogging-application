const getBloggers = 'SELECT * FROM blogger'
const getBloggersById = 'SELECT * FROM blogger WHERE id = $1'
const checkEmailExists = 'SELECT n FROM blogger n WHERE n.email=$1'
const checkUserNameExists = 'SELECT b FROM blogger b WHERE b.username = $1'
const addBlogger =
  'INSERT INTO blogger (username, first_name, last_name, college, email, description, password, city) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
const updateBlogger =
  'UPDATE blogger SET first_name=$1, last_name=$2 WHERE id=$3'
const deleteBlogger = 'DELETE FROM blogger WHERE id = $1'

module.exports = {
  getBloggers,
  getBloggersById,
  checkEmailExists,
  checkUserNameExists,
  addBlogger,
  updateBlogger,
  deleteBlogger,
}
