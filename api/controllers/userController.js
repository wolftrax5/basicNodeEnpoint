var stream = require('getstream');
// Instantiate a new client (server side)
const client = stream.connect('rrktsvqjbnrx', 'dhja33bm72snp53rq3pzbgkzean9aadutdnwfgmwfjgxh6fegwm3uz6ncxccaxjv', '53663');

exports.read_a_token = function(req, res) {
    const userToken = client.createUserToken(req.params.userID);
    const feed = client.feed('user', req.params.userID);
    userFeedToken = feed.getReadOnlyToken();
    console.log('Feed SET : ' + req.params.userID +' ' + userFeedToken);
    res.json({userToken, userFeedToken});
  };