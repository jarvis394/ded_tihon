const init = require('./startup')
const { log } = init
const RequestsQueue = require('./lib/RequestsQueue')

// const Container = require('./lib/Container')

/**
 * Saves counter to every dialog
 */
const memoryStorage = new Map()

/**
 * Saves users which talked recently
 */
const talkedRecently = new Set()

/**
 * Saves users which recently used /anon
 */
const anonCommandTimeout = new Map()

/**
 * Saves users which recently used /battle
 */
const battleCommandTimeout = new Map()

/**
 * Saves previous random messages
 */
const randomStorage = new Map()

/**
 * Saves users in local store
 */
const users = new Map()

/**
 * Saves guilds in local store
 */
const guildsStore = new Map()

/**
 * Saves requests for captcha handling
 */
const requestsQueue = new RequestsQueue()

const express = require('express')
const app = express()

// Log success message
log.success('Initialized variables', { private: true })

module.exports = {
  ...init,
  memoryStorage,
  talkedRecently,
  randomStorage,
  app,
  users,
  anonCommandTimeout,
  battleCommandTimeout,
  guildsStore,
  requestsQueue,
}
