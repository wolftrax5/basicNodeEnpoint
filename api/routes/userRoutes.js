module.exports = function(app) {
    var user = require('../controllers/userController');

    app.route('/userToken/:jID')
      .get(user.read_a_token)
    
    app.route('/create_follows')
      .get(user.create_follows)
    app.route('/make_unfollows')
      .get(user.make_unfollows)
    app.route('/postPing/:feedGroup/:jID')
      .post(user.post_ping)
  };