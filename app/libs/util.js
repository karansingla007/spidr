const { generateUsername } = require('unique-username-generator');
const { v1: uuidv1, } = require('uuid');

let generateRandomUserName = () => {
    // const spidrCharacters = [
    //     'spidr',
    //     'spidrWeb',
    //   ];
      
    //   const config = {
    //     dictionaries: [spidrCharacters],
    //     separator: '-',
    //     style: 'capital',
    //     randomDigits: 3
    //   }
    // const username = uniqueUsernameGenerator(config);
    const username = generateUsername();
    // const username = uniqueUsernameGenerator(config);
    return username
  }

  let generateUserId = () => {
    var userId = uuidv1();
    return userId;
  }

  module.exports = {
    generateRandomUserName,
    generateUserId
  }