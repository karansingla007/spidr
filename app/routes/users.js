const userController = require("../controllers/userController");
const checkLibs = require("../libs/checkLib");
const { check } = require('express-validator');
const response = require('../libs/responseLib')

module.exports.setRouter = function (app) {
    let ternaryUrl = '/user-ms/api/v1/users';

    app.post(ternaryUrl + '/create', (req, res, next) => {
        if(!checkLibs.isEmpty(req.body.user_name) && !checkLibs.isEmpty(req.body.password)) {
            next();
        } else {
            let data = {
                message: "params are not valid",
             }
            response.generate(false, "params are not valid", 500, data,res);
        }
      }, userController.createUser);

    app.put(ternaryUrl + '/profile/info', userController.updateUserInfo);

    app.get(ternaryUrl + '/all', userController.getAllUser);

    app.get(ternaryUrl + '/generate/username', userController.getRandomUserName);

    app.get(ternaryUrl + '/user/detail/:user_id', userController.getUserDetailByUserId);
}