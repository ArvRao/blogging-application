const getPosts = 'SELECT * FROM post'
const getPostsById = 'SELECT * FROM post WHERE post_id = $1'
const addPost = 'INSERT INTO post (title, body, author) VALUES($1, $2, $3)'
const updatePost = 'UPDATE post SET title=$1, body=$2 WHERE post_id=$3'
const deletePost = 'DELETE FROM post WHERE post_id = $1'

module.exports = {
  getPosts,
  getPostsById,
  addPost,
  updatePost,
  deletePost,
}
