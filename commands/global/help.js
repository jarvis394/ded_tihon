exports.run = async (api, update, args, _, __, cmds) => {
  const { handleError } = require('../../utils')

  try {
    return update.send(
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
