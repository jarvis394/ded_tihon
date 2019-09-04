exports.run = async (api, update, args) => {
  const rel = '../../../'
  const handleError = require(rel + 'utils/handleError')
  const User = require(rel + 'lib/User')
  const Guild = require(rel + 'lib/Guild')
  const CommandError = require(rel + 'lib/CommandError')
  
  try {
    
    const formatMember = (e, i) => {
      const u = membersData.find(d => d.id === e.id)
      const name = u.first_name + ' ' + u.last_name
      let icon = e.role
      
      if (e.role == 1) icon = ''
      else if (e.role == 2) icon = '⚙️'
      else if (e.role == 3) icon = '👑'
      
      if (e.role > 1) { 
        return `${i + 1}. ${icon} [id${e.id}|${name}]`
      } else {
        return `${i + 1}. ${name}`
      }
    }
    
    const { senderId } = update
    const user = new User(senderId)
    const guildId = await user.fetchGuild()
    
    // Return if guild is empty
    if (!guildId) {
      throw new CommandError('😕 Ты не состоишь в колхозе\n\n' + 
        'Глава колхоза может пригласить тебя командой /колхоз пригласить [id]', 'User_GuildIsEmpty')
    }
    
    // Get info
    const guild = new Guild(guildId)
    const name = await guild.getName()
    const invited = (await guild.getMembers()).filter(e => e.role < 1)
    const members = (await guild.getFilteredMembers()).sort((a, b) => a.role < b.role)
    const membersData = await api.users.get({ user_ids: members.map(e => e.id)})
    
    let response = members.slice(0, 7).map((e, i) => formatMember(e, i))
    
    if (members.length > 7 && !members.slice(0, 7).some(e => e.id === senderId)) {
      const guildUserIndex = members.findIndex(e => e.id === senderId)
      
      if (guildUserIndex >= 7) {
        response.push('...\n')
      }
      
      response.push(formatMember(members[guildUserIndex], guildUserIndex))
    } else if (members.length > 7) {
      response.push('...')
    }
    
    const text = `📜 Состав колхоза "${name}":\n\n` + 
          response.join('\n') +
          `\n\n👥 Всего людей: ${members.length}/50` +
          `\n👻 Приглашено: ${invited.length}/50`
    
    return update.reply(text)
    
  } catch (e) {
    handleError(update, e)
  }
}

exports.command = {
  'hidden': true
}