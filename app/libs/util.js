const { uniqueUsernameGenerator, Config, generateUsername } = require('unique-username-generator');

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

  module.exports = {
    generateRandomUserName,
  }