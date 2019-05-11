const store = require('store')
const Coins = require('../lib/User')
const fs = require('fs')
const { error } = require('../utils')

/**
 * Flushes coins to database
 */
function flush() {
  console.log('\n\n      Flushing coins to DB...      \n\n')

  let res = {}
  store.each((data, id) => res[id] = data)

  fs.writeFile('.temp/coinsData.json', JSON.stringify(res), (err) => {
    if (err) {
      error(err)
    } else {
      console.log('      Successfully saved temporary data!      \n\n')
      process.exit(0)
    }
  })
}

process.on('SIGTERM', () => flush())
process.on('SIGINT', () => flush())

module.exports = (updates) => {
  updates.on('message', async (context, next) => {
    const { senderId } = context
  
    let stData = store.get(senderId)
    
    if (stData) {
      stData.amount++
    } else {
      stData = await Coins.data(senderId)
    }
    
    store.set(senderId, stData)

    await next()
  })
}