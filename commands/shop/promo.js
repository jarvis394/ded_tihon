exports.run = async (api, update, args) => {
  const User = require('../../lib/User')
  const handleError = require('../../utils/handleError')
  const { promoFunctions, promoFunction, getPromo } = require('../../utils/promo')
  
  try {
    const code = args[0]
    const user = new User(update.senderId)
    const earnings = await user.getEarnings()
    const promo = getPromo()

    if (!promo.code) return update.reply('😔 Пока нет никаких промокодов')
    
    if (code === promo.code.toString() && earnings.promo !== promo.code) {
      user.setEarning('promo', promo.code)
      
      const func = promoFunctions[promo.n].function
      const state = await promoFunction(func, user)
      
      if (!state) return update.reply('♦️ Ты не успел!')
      
      return update.send('🎈 Промокод успешно применён')
    } else {
      return update.send('♦️ Введен неправильный или недействительный код')
    }
  } catch (e) {
    handleError(update, e)
  }
}

exports.command = {
  arguments: '(code)|(code)',
  description: {
    en: 'Gives promo money',
    ru: 'Даёт промо бабки'
  },
  alias: ['промобабки', 'промокод', 'промо']
}
