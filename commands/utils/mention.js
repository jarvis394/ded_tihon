exports.run = async (update, args) => {
  const handleError = require('../../utils/handleError')
  const User = require('../../lib/User')
  
  try {
    
    const user = new User(update.senderId)
    const { state, amount } = await user.isEnoughFor(1000)
    if (!state) return update.reply(`🧮 Не хватает денег: у тебя ${amount}T, а нужно 1000T`)
    
    let file = args[0]
    const top = require('./top').command
    const who = require('./who').command

    if (top.alias.some(e => e === file)) {
      file = 'top'
    } else if (who.alias.some(e => e === file)) {
      file = 'who'
    } else if (!file) {
      return update.reply('✖️ Введи команду')
    } else {
      return update.reply('✖️ Нет такой команды!')
    }
    
    user.subtract(1000)
  
    require('./' + file).run(update, ['!&9Mention_' + process.env.SECRET, ...args])
    
  } catch (e) {
    handleError(update, e)
  }
}

exports.command = {
  arguments: '(arg)|(предл.)',
  description: {
    en: 'Who is ***?',
    ru: 'Кто ***?'
  },
  alias: ['упомянуть', 'упомяни'],
  group: 'utils'
}
