const { handleError } = require('../../utils')

const {
  randomArray
} = require('../../utils')

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

exports.run = async (api, update) => {
  try {
    
    return await update.send(randomArray(sorry))
    
  } catch (e) {
    handleError(update, e)
  }
}

exports.command = {
  'name': 'sorry',
  'arguments': false,
  'description': {
    'en': 'Please forgive poor bot!',
    'ru': 'Пожалуйста простите старого бота!'
  },
  'alias': [
    'ахуел',
    'уебок',
    'сука',
    'пидор',
    'слыш',
    'э'
  ],
  'group': 'global'
}