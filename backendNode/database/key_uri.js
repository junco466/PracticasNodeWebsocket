require('dotenv').config()

module.exports = {
  db: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
}

//mongodb+srv://user:password@cluster0.xn1mr.mongodb.net/?retryWrites=true&w=majority
