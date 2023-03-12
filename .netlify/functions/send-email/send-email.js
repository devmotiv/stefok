// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
const process = require('process')
const { promisify } = require('util')

const sendMailLib = require('sendmail')

const { validateEmail, validateLength } = require('./validations.js')

const sendMail = promisify(sendMailLib())

const NAME_MIN_LENGTH = 3
const NAME_MAX_LENGTH = 50
const DETAILS_MIN_LENGTH = 10
const DETAILS_MAX_LENGTH = 1e3

const handler = async (event) => {
  const body = JSON.parse(event.body)

  try {
    validateLength('body.name', body.name, NAME_MIN_LENGTH, NAME_MAX_LENGTH)
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    }
  }

  try {
    validateEmail('body.email', body.email)
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    }
  }

  try {
    validateLength('body.details', body.details, DETAILS_MIN_LENGTH, DETAILS_MAX_LENGTH)
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    }
  }

  const descriptor = {
    from: `${body.email}`,
    to: 'bosnjak.matej@outlook.com',
    subject: `${body.name} sent you a message from a website`,
    text: body.details,
  }

  try {
    await sendMail(descriptor)
    return { statusCode: 200, body: '' }
  } catch (error) {
    return { statusCode: 500, body: error.message }
  }
}

module.exports = { handler }
