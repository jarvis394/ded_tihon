const { handleError } = require("../utils")

const {
  randomArray
} = require("../utils")

const responds = [
  "ЗаебOK!",
  "Ахуенная приколюха",
  "Ржака",
  "АхахаяАххаэавоыж",
  "Мне это вчера внук показывал",
  "Хуйня полная",
  "Ты тупой такое кидать?",
  "Ты больной такое кидать?",
  "Боян",
  "ВСЕМ СЕЛОМ ПОД СТОЛОМ РЖАЛИ)))",
  "ВСЕМ СЕЛОМ РЖАЛИ",
  "Такой бред",
  "ну как над этим можно смеятсья?",
  "слушай, красиво..",
  "Нихуёво колбасит))",
  "Я тибя не знаю...",
  "Не позорь меня",
  "Справедливо",
  "Я такое на огороде видел",
  "АХУЕТЬ",
  "Ебатся в телевизор",
  "У меня нету слов.......",
  "Я тебе отвечаю, это внук мой Алеша",
  "ЭТО БЫЛО СДЕЛАНО В ГОРОДЕ ЕССЕНТУКИ",
  "ЭТО БЫЛО СДЕЛАНО В МОЕМ СЕЛЕ",
  "Да, да, вчера по новостям видел",
  "ОН МНЕ ВО СНЕ СНИЛСЯ",
  "Это трап",
  "это не фотошоп, я это видел в горах Краснодарского края."
]

exports.run = async (api, update) => {
  try {
    await update.send(randomArray(responds))
  } catch (e) {
    handleError(update, e)
  }
}

exports.command = {
  "name": "rate",
  "arguments": false,
  "description": {
    "en": "Rate something",
    "ru": "Оценить что-нибудь"
  },
  alias: [
    "оцени",
    "как тебе",
    "ну",
    "?",    
    "норм",
    "норм?",
    "чо думаешь",
    "что думаешь",
    "ну как",
    "ну как?"
  ]
}