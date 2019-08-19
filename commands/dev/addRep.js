exports.run = async (api, update, args) => {
  const handleError = require('../../utils/handleError')
  const User = require('../../lib/User')
  
  try {
    
    let user = new User(args[0] && args[1] ? args[1].split('|')[0].slice(3) : update.senderId)
    
    if (!args[0] || (args[0] && isNaN(args[0]))) {
      return update.send('❌ Введи число\n\nПример: /?dev-addRep 1000 *tihon_bot')
    }
    
    user.addReputation(parseInt(args[0]))
    
    return update.send('✨ Добавлено ' + args[0] + 'R к ' + user.id)
    
  } catch (e) {
    handleError(update, e)
  }
}

exports.command = {
  'hidden': true
}