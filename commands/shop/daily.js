exports.run = async (update) => {
  const User = require('../../lib/User')
  const handleError = require('../../utils/handleError')
  const format = require('../../utils/format')
  const DAY = 86400000
  const { DAILY_BONUS, CURRENCY } = require('../../configs/constants')
  const moment = require('moment')
  moment.locale('ru')

  try {
    let firstTimeFlag = false
    let user = new User(update.senderId)
    let earnings = await user.getEarnings()

    // If no data found
    if (!earnings.daily) {
      earnings = user.setEarning('daily', Date.now() - DAY)

      firstTimeFlag = true
    }

    // Last time command used
    let lastTime = earnings.daily
    let now = Date.now()

    if (now - lastTime >= DAY || firstTimeFlag) {
      user.add(DAILY_BONUS)
      user.setEarning('daily', now)

      return update.send(
        `😝 Вы получили ежедневный бонус ${format(DAILY_BONUS)} ${CURRENCY}\n` +
        `💵 Твой баланс: ${format(await user.getAmount())} ${CURRENCY}`
      )
    } else {
      let left = new Date(now + DAY - now + lastTime)
      console.log(left)
      return update.send(
        '😕 Ты уже использовал бонус!\n' +
        `Осталось ждать ${moment(left).calendar()}`
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
  alias: ['бонус', 'bonus']
}
