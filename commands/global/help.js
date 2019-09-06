exports.run = async (update, args) => {
  const handleError = require('../../utils/handleError')

  try {
    return update.reply(
      '🔍 Смотри команды на сайте: https://tihon-web.glitch.me'
    )
  } catch (e) {
    handleError(update, e)
  }
}

exports.command = {
  name: 'help',
  arguments: false,
  description: {
    en: 'Helps you find a description of the command you need',
    ru: 'Помогает найти нужную тебе команду'
  },
  alias: ['помощь', 'справка', 'начать'],
  group: 'global'
}
