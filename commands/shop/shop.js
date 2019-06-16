/* eslint-disable no-unused-vars */

exports.run = async (api, update, args) => {
  const User = require('../../lib/User')
  const { handleError } = require('../../utils')
  const data = require('../../shopData')

  const aliases = {
    buy: ['buy', 'купить', 'купитт', 'купля', 'куплч'],
    sell: ['sell', 'продать', 'продат', 'продатб', 'продажа']
  }

  try {
    // If no args then will send menu
    if (!args[0]) return sendMenu()

    // Init option
    let option = args[0].toLowerCase()

    // If matches a group
    if (!isNaN(option)) {
      if (parseInt(option) <= data.groups.length && parseInt(option) >= 0)
        return sendGroup(parseInt(option))
      else return update.send('😟 Нет такой группы! Введи валидный [ ID ]')
    }

    // If option is 'buy' then send buyMenu
    if (aliases.buy.includes(option)) return sendBuyMenu()

    // In any other case send error
    return update.send('🧐 Опция не найдена')

    /**
     * Sends catalog menu
     */
    async function sendMenu() {
      let name = await api.users.get({
        user_ids: update.senderId
      })

      let res = [name[0].first_name + ', разделы магазина:', '']

      for (let category in data.categories) {
        res.push(
          data.categories[category].icon +
            ' ' +
            data.categories[category].name +
            ':'
        )

        for (let group of data.groups.filter(g => g.category === category)) {
          res.push(
            '⠀⠀' + '[ ' + group.groupId + ' ] ' + group.icon + ' ' + group.name
          )
        }

        res.push('')
      }

      res.push('')
      res.push('Чтобы посмотреть группу, напишите её [ ID ]:')
      res.push('@tihon_bot, магазин 2')

      return update.send(res.join('\n'))
    }

    /**
     * Send group menu
     * @param {string} group Group
     */
    async function sendGroup(groupId) {
      let name = await api.users.get({
        user_ids: update.senderId
      })

      let group = data.getGroupById(groupId)
      let res = [name[0].first_name + ', раздел \'' + group.name + '\':', '']

      data.items.forEach((item, i) => {
        if (item.groupId === groupId) {
          res.push(`[ ${item.id} ] ${item.icon} ${item.name} - ${item.price}T`)

          if (item.earning) {
            res.push(`⠀⠀⠀⠀- ${item.earning}T/час`)
          }
        }
      })

      res.push('')
      res.push('Чтобы купить, напишите "купить" и [ ID ]:')
      res.push('@tihon_bot, магазин купить 16')

      return update.send(res.join('\n'))
    }

    /**
     * Sends buying menu
     */
    async function sendBuyMenu() {
      let name = await api.users.get({
        user_ids: update.senderId,
        name_case: 'gen'
      })
      let user = new User(update.senderId)

      if (!args[1]) {
        return update.send('😕 Ты не ввел ID предмета, который хочешь купить')
      }

      if (isNaN(args[1])) {
        return update.send('😕 ID предмета - это число, знаешь.')
      }

      let id = parseInt(args[1])
      let item = data.getItemById(id)

      if (!item) return update.send('❌ Такого предмета нет в магазине')

      const { amount, state } = await user.isEnoughFor(item.price)

      if (!state) {
        return update.send(
          '🧮 Недостаточно денег - у тебя ' +
             + amount + 
            'T, а нужно ' +
            item.price +
            'T'
        )
      }
      
      const group = data.getGroupById(item.groupId)

      const addItemSuccess = await user.addItem(group, item.id)
      
      if (!addItemSuccess) return update.send(`❌ В группе ${group.name} нельзя иметь больше вещей, максимум ${group.maxItems}`)
      user.subtract(item.price)
      
      return update.send(
        `🎉 Теперь у ${name[0].first_name} есть предмет ${item.name}\n` +
          '\nЧтобы продать, нужно использовать команду "продать", группу и номер вещи в профиле:' +
          '\n@tihon_bot, продать дома 1'
      )
    }

  } catch (e) {
    handleError(update, e)
  }
}

exports.command = {
  name: 'shop',
  arguments: false,
  description: {
    en: 'Go to the supermarket :p',
    ru: 'Сходить в супермаркет :p'
  },
  alias: ['шоп', 'магазин', 'ларёк', 'ларек'],
  group: 'shop'
}
