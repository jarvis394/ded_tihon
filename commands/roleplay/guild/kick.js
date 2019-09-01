exports.run = async (api, update, args) => {
  const rel = '../../../'
  const handleError = require(rel + 'utils/handleError')
  const User = require(rel + 'lib/User')
  const Guild = require(rel + 'lib/Guild')
  const CommandError = require(rel + 'lib/CommandError')
  
  try {
    
    const { senderId } = update
    const user = new User(senderId)
    const guildId = await user.fetchGuild()
    
    // Return if guild is empty
    if (!guildId) {
      throw new CommandError('😕 Ты не состоишь в колхозе\n\n' + 
        'Глава колхоза может пригласить тебя командой /колхоз пригласить [id]', 'User_GuildIsEmpty')
    }
    
    const guild = new Guild(guildId)
    const data = await guild.fetchData()
    const members = await guild.fetchMembers()
    const guildUser = members.find(e => e.id === senderId)
    
    if (!data) {
      throw new CommandError(`Колхоз с ID "${guildId}" не найден`, 'Guild_NotFound')
    }
    
    // Check for admin role
    if (guildUser.role < 2) {
      throw new CommandError('Вы не являетесь управляющим в этом колхозе', 'User_MissingRole')
    }
    
    // Get member's ID from arguments
    let memberId 
    try {
      memberId = parseInt(args[1].split('|')[0].slice(3))
    } catch (e) {
      throw new CommandError('Упомяни человека, которого хочешь убрать', 'Argument_InvalidMention')
    }
    
    // Self check
    if (memberId === senderId) {
      throw new CommandError('Ты можешь выйти из колхоза командой /колхоз выйти', 'Argument_MentionIsSelf')
    }
    
    // Find member in guild
    const guildMember = data.members.find(e => e.id === memberId)
    
    // If member not found in guild
    if (!guildMember) {
      throw new CommandError('Человек не найден.', 'Guild_MemberNotFound')
    }
    
    if (guildMember.role >= guildUser.role) {
      throw new CommandError('Нельзя выгнать человека с ролью, такой же,икак у тебя и выше', 'Guild_MissingPrivileges')
    }
    
    const member = new User(memberId)
    const memberName = await member.getFullName()
    const userName = await user.getFullName('acc')
    
    await guild.removeMember(memberId)
    await member.pushGuildId(null)
    
    return update.reply(`✨ [id${memberId}|${memberName}] был изгнан из колхоза по воле [id${senderId}|${userName}]!`)
    
  } catch (e) {
    handleError(update, e)
  }
}

exports.command = {
  'hidden': true
}