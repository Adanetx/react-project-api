const mongoose = require('mongoose')
const User = require('./user')

const Schema = mongoose.Schema
const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
