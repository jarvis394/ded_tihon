const { items, pets, groups } = require('../data/shop')

/**
 * Gets group by its groupID
 * @param {number} id Group ID
 */
const getGroupById = id => groups.find(i => i.groupId === id)

/**
 * Gets group by its title
 * @param {string} title Group title
 */
const getGroupByTitle = title => groups.find(i => i.title === title)

/**
 * Gets group by its accName
 * @param {string} name Group accName
 */
const getGroupByAccName = name => groups.find(i => i.accName === name)

/**
 * Gets group by its name
 * @param {string} name Group name
 */
const getGroupByName = name =>
  groups.find(i => i.name.toLowerCase() === name.toLowerCase())

/**
 * Gets item by its ID
 * @param {number} id Item ID
 */
const getItemById = id => items.find(i => i.id === id)

/**
 * Gets item by its groupID
 * @param {number} id Item groupID
 */
const getItemsByGroupId = id => items.filter(i => i.groupId === id)

/**
 * Gets pet by its ID
 * @param {number} id Pet ID
 */
const getPetById = id => pets.find(i => i.id === id)

module.exports = {
  getGroupById,
  getGroupByTitle,
  getGroupByName,
  getItemById,
  getItemsByGroupId,
  getGroupByAccName,
  getPetById,
}
