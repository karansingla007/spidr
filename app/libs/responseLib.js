const checkLib = require('./checkLib');


/* response generation library for api */
let generate = (err, message, status, data, res) => {
  let response = {
    error: err,
    message: message,
    statusCode: status,
    data: data,
  }
  res.send(response);
  return response
}

module.exports = {
  generate: generate
}
