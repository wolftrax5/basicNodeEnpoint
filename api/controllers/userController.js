var stream = require('getstream');
// Instantiate a new client (server side)
const client = stream.connect('ftthtura87zm', 'fw83mj364w9njanuv7cnzggrvmprkvb2767ersdnxry8kcdtp8fz98xne8w9k756', '54394');

exports.read_a_token = function(req, res) {
    const userToken = client.createUserToken(req.params.userID);
    const feed = client.feed('timeline', req.params.userID);
    userFeedToken = feed.getReadOnlyToken();
    console.log('Feed SET : ' + req.params.userID +' ' + userFeedToken);
    res.json({userToken, userFeedToken});
  };

exports.post_ping = function(req, res) {
  const feed = client.feed('timeline', req.params.userID);
  feed.addActivity({
    actor: req.params.userID,
    verb: 'ping',
    object: 'ping:10',
    message: 'BackendPING'
  }).then(
    (activiyResponse) => {
      res.json({activiyResponse});
      console.log('SUCCESS ', activiyResponse)
    }, // nothing further to do
    function(err) {
      // Handle or raise the Error.
    }
  );
}