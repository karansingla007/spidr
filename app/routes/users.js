const userController = require("../controllers/userController");

module.exports.setRouter = function (app) {
    let ternaryUrl = '/user-ms/api/v1/users';

    app.get(ternaryUrl + '/all', userController.getAllUser);

    app.post(ternaryUrl + '/create', userController.createUser);

    app.get(ternaryUrl + '/generate/username', userController.getRandomUserName);
}