exports.run = ({ update, args }) => {
  const math = require('mathjs')

  var resp
  var calc = args.join(' ')

  try {
    resp = math.eval(calc)
  } catch (e) {
    return update.send('Похоже, я слишком тупой для таких примеров')
  }

  update.send(`📥 Ввод: ${calc}\n📤 Вывод: ${resp}`)
}

exports.command = {
  name: 'calc',
  arguments: '(expression)|(выражение)',
  description: {
    en: 'Calculate something',
    ru: 'Посчитать матан',
  },
  alias: ['калк', 'калькулятор', 'калкулятор', 'счет', 'счёт'],
  group: 'utils',
}
