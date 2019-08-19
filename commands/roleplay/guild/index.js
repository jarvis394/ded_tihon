exports.run = async (api, update, args) => {
  const aliases = {
    create: [ 'создать' ],
    info: [ 'инфа' ]
  }

  try {
    let file = args[0]
    
    if (!file) file = 'info'

    for (let key in aliases) {
      if (aliases[key].includes(e => e === file)) {
        file = key
        break
      }
    }
    
    const module = require(`./${file}`)
    
    return module.run(api, update, args)
  } catch (e) {
    return update.reply('Такой команды не существует 😑')
  }
}

exports.command = {
  description: {
    ru: 'Управление колхозом',
    en: 'Manage you guild'
  },
  alias: [
    'колхоз',
    'гильдия'
  ]
}