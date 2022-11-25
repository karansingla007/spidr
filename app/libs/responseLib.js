const checkLib = require('./checkLib');


/* response generation library for api */
let generate = (err, message, status, data) => {
  let response = {
    error: err,
    message: message,
    statusCode: status,
    data: data,
  }
  return response
}

module.exports = {
  generate: generate
}
