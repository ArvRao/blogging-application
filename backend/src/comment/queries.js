const getAllComments = 'SELECT * FROM comment WHERE post_id=$1'

module.exports = {
  getAllComments,
}
