const { ID } = require("../config");
const {
  handleError
} = require("../utils");

const {
  dbSet,
  dbUpdate,
  dbGet,
  dbDialogGet,
  dbDialogSet,
  dbDialogUpdate
} = require("../utils");

exports.run = async (api, update, args) => {
  try {

    let user = await dbDialogGet(update.senderId, update.peerId);
    if (user && user.roles) {
      if (!user.roles.some(el => el == "admin")) return update.send("Прав нема");
    } else {
      return update.send("Прав нема");
    }

    if (args.length == 0) return update.send('Упомяни кого-нибудь чтобы \nз а б а н и т ь')
    let member = args.join().slice(1, -1).split('|')[0]

    if (member.startsWith('club')) member = -parseInt(member.slice(4))
    else member = member.slice(2);

    if (member == ID) return update.send('👺');

    api.messages.removeChatUser({
      "chat_id": parseInt(update.peerId) - 2000000000,
      "member_id": member
    }).catch(e => {
      if (e.code == 15) return update.send("У этого зверя больше прав, чем у меня");

      console.log(e);
      return update.send("Не могу исключить этого пользователя!");
    });

  } catch (e) {
    handleError(update, e);
  }
}