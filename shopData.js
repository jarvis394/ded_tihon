// TODO: Use classes and integrate OOP
// TODO: Translate to English

const Item = require('./lib/Item')
const Category = require('./lib/Category')
const Group = require('./lib/Group')

/*module.exports = {
  realty: {
    name: 'Недвижимость',
    icon: '🌇',
    items: [
      {
        name: 'Дома',
        icon: '🏠',
        items: [
          {
            name: 'Коробка',
            icon: '📦',
            price: 10
          },
          {
            name: 'Шалаш',
            icon: '⛺',
            price: 250
          },
          {
            name: 'Съемная квартира',
            icon: '🛏️',
            price: 5000
          },
          {
            name: 'Заброшенный дом',
            icon: '🏚️',
            price: 10000
          },
          {
            name: 'Квартира в Нижнем Новгороде',
            icon: '🏢',
            price: 50000
          },
          {
            name: 'Пентхаус в Буграх',
            icon: '🕋',
            price: 100000
          }
        ]
      }
    ]
  },
  pets: {
    name: 'Питомцы',
    icon: '🐌',
    items: [
      {
        name: 'Кот',
        icon: '🐈',
        price: 100
      },
      {
        name: 'Шавка',
        icon: '🐕',
        price: 100
      },
      {
        name: 'Бабуин',
        icon: '🦍',
        price: 100
      },
      {
        name: 'Микробы',
        icon: '🦠',
        price: 100
      },
      {
        name: 'Паук',
        icon: '🕷️',
        price: 100
      },
      {
        name: 'Комар',
        icon: '🦟',
        price: 100
      },
      {
        name: 'Единорог',
        icon: '🦄',
        price: 100
      }
    ]
  },
  other: {
    name: 'Остальное',
    icon: '📌',
    items: [
      {
        name: 'Огороды',
        icon: '🍎',
        items: [
          {
            name: 'Горшок',
            icon: '⚱️',
            price: 100
          },
          {
            name: 'Палисадник',
            icon: '🥒',
            price: 1000
          },
          {
            name: 'Садик',
            icon: '🍒',
            price: 5000
          },
          {
            name: 'Грядка',
            icon: '🍸',
            price: 10000
          },
          {
            name: 'Огород',
            icon: '🍓',
            price: 25000
          },
          {
            name: 'Плантация',
            icon: '🍀',
            price: 50000
          }
        ]
      },
      {
        name: 'Одежда',
        icon: '👙',
        items: []
      },
      {
        name: 'Гробы',
        icon: '⚰️',
        items: []
      }
    ]
  }
}*/

module.exports.categories = {
  realty: new Category({
    icon: '🌇',
    name: 'Недвижимость'
  }),
  pets: new Category({
    icon: '🐌',
    name: 'Питомцы'
  }),
  other: new Category({
    icon: '📌',
    name: 'Остальное'
  })
}

module.exports.groups = [
  new Group({
    category: 'realty',
    icon: '🌇',
    name: 'Дома'
  }),
  new Group({
    category: 'other',
    icon: '👙',
    name: 'Одежда'
  }),
  new Group({
    category: 'other',
    icon: '⚰️',
    name: 'Гробы'
  })
]

module.exports.items = [
  new Item({
    name: 'Коробка',
    icon: '📦',
    price: 10,
    id: 1
  }),
  new Item({
    name: 'Шалаш',
    icon: '⛺',
    price: 250,
    id: 2
  }),
  new Item({
    name: 'Съемная квартира',
    icon: '🛏️',
    price: 5000,
    id: 3
  }),
  new Item({
    name: 'Заброшенный дом',
    icon: '🏚️',
    price: 10000,
    id: 4
  }),
  new Item({
    name: 'Квартира в Нижнем Новгороде',
    icon: '🏢',
    price: 50000,
    id: 5
  }),
  new Item({
    name: 'Пентхаус в Буграх',
    icon: '🕋',
    price: 100000,
    id: 6
  }),
  new Item({
    name: 'Кот',
    icon: '🐈',
    price: 100,
    id: 7
  }),
  new Item({
    name: 'Шавка',
    icon: '🐕',
    price: 100,
    id: 8
  }),
  new Item({
    name: 'Бабуин',
    icon: '🦍',
    price: 100,
    id: 9
  }),
  new Item({
    name: 'Микробы',
    icon: '🦠',
    price: 100,
    id: 10
  }),
  new Item({
    name: 'Паук',
    icon: '🕷️',
    price: 100,
    id: 11
  }),
  new Item({
    name: 'Комар',
    icon: '🦟',
    price: 100,
    id: 12
  }),
  new Item({
    name: 'Единорог',
    icon: '🦄',
    price: 100,
    id: 13
  }),
  new Item({
    name: 'Горшок',
    icon: '⚱️',
    price: 100,
    id: 14
  }),
  new Item({
    name: 'Палисадник',
    icon: '🥒',
    price: 1000,
    id: 15
  }),
  new Item({
    name: 'Садик',
    icon: '🍒',
    price: 500,
    id: 16
  }),
  new Item({
    name: 'Грядка',
    icon: '🍸',
    price: 10000,
    id: 17
  }),
  new Item({
    name: 'Огород',
    icon: '🍓',
    price: 25000,
    id: 18
  }),
  new Item({
    name: 'Плантация',
    icon: '🍀',
    price: 50000,
    id: 19
  })
]
