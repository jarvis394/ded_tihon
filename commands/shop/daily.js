exports.run = async (api, update) => {
  const User = require('../../lib/User')
  const { handleError } = require('../../utils')
  const DAY = 86400000
  const { DAILY_BONUS } = require('../../config')

  try {
    let firstTimeFlag = false
    let user = new User(update.senderId)

    if (!user.data.earnings.dailyBonus) {
      user.data.earnings.dailyBonus = Date.now()
      firstTimeFlag = true
    }

    let lastTime = user.data.earnings.dailyBonus
    let now = Date.now()

    if (now - lastTime > DAY || firstTimeFlag) {
      user.add(DAILY_BONUS)

      user.data.earnings.dailyBonus = now
      user.setData(user.data)

      return update.send(
        `😝 Вы получили ежедневный бонус ${DAILY_BONUS}T\n` +
        `💵 Твой баланс: ${await user.getAmount()}T`
      )
    } else {
      let left = new Date(DAY - (now - lastTime))

      return update.send(
        '😕 Ты уже использовал бонус!\n' +
        `Осталось ждать ${left.getHours()}:${left.getMinutes()}:${left.getSeconds()}`
      )
    }
  } catch (e) {
    handleError(update, e)
  }
}

exports.command = {
  arguments: false,
  description: {
    en: 'Get your daily bouns!',
    ru: 'Получи свой ежедневный бонус!'
  },
  alias: ['бонус']
}
