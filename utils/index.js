const getUsersHash = require('./getUsersHash')
const handleError = require('./handleError')
const isAdmin = require('./isAdmin')
const promo = require ('./promo')
const random = require('./random')
const randomMessage = require('./randomMessage')
const shop = require('./shop')
const createFileIfNotExists = require('./createFileIfNotExists')
const isUrl = require('./isUrl')
const data = require('./data')

module.exports = {
  getUsersHash,
  handleError,
  isAdmin,
  promo,
  random,
  randomMessage,
  shop,
  createFileIfNotExists,
  isUrl,
  data,
}