class Item {
  
  constructor(options) {

    /**
     * Item's icon 
     */
    this.icon = options.icon

    /**
     * Item's name
     */
    this.name = options.name

    /**
     * Item's price
     */
    this.price = options.price

    /**
     * Item's ID
     */
    this.id = options.id

    /**
     * Item's group ID
     */
    this.groupId = options.groupId

    /**
     * Item's hourly money earning
     */
    this.earning = options.earning
  }
  
}

module.exports = Item