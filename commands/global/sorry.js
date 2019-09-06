exports.run = async (update) => {
  const handleError = require('../../utils/handleError')

  const { randomArray } = require('../../utils/random')

  const sorry = [
    'Мне искренне жаль, если я что-то не так сказал... У меня ошибочка, знаете.',
    'Если я что-то не то сказал, реально s o r r y.',
    'Ой, я виноват, прошу прощения',
    'Упс, ошибочка',
    'Простите...',
    'Прошу прощения!',
    'Да блять хуй соси',
    'Мне похуй 🥴😎'
  ]

  try {
    return await update.send(randomArray(sorry))
  } catch (e) {
    handleError(update, e)
  }
}

exports.command = {
  name: 'sorry',
  arguments: false,
  description: {
    en: 'Please forgive poor bot!',
    ru: 'Пожалуйста простите старого бота!'
  },
  alias: ['слышь', 'эй', 'слыш', 'э'],
  group: 'global'
}
