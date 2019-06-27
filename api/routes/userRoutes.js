module.exports = function(app) {
    var user = require('../controllers/userController');

    app.route('/userToken/:userID')
      .get(user.read_a_token)

    app.route('/postPing/:userID')
      .get(user.post_ping)
  };