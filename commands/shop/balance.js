exports.run = async (api, update, args) => {
  const User = require('../../lib/User')
  const handleError = require('../../utils/handleError')
  const format = require('../../utils/format')
  const { USERS } = require('../../configs/blacklist')
  
  try {
    let id
    try { 
      id = parseInt(args[0].split('|')[0].slice(3))
      if (isNaN(id)) throw new Error('argument is NaN')
    } catch (e) {
      id = update.senderId
    }
    
    if (USERS.some(e => e === id.toString())) return update.reply('😠 Этот пользователь заблокирован')
    
    const user = new User(id)

    return update.reply(
      (id === update.senderId ? 
        'Твой баланс:⠀⠀\n' : 
        'Баланс ' + id + ': \n') + 
      '🏦 ' + format(await user.getAmount()) + ' ₮'
    )
  } catch (e) {
    handleError(update, e)
  }
}

exports.command = {
  name: 'balance',
  arguments: false,
  description: {
    en: 'Shows balance of user',
    ru: 'Показывает баланс пользователя'
  },
  alias: ['баланс'],
  group: 'shop'
}
