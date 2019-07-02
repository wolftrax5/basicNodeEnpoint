var stream = require('getstream');
// Instantiate a new client (server side)
const APP_ID = '54394';
const APP_KEY = 'ftthtura87zm';
const API_SECRET = 'fw83mj364w9njanuv7cnzggrvmprkvb2767ersdnxry8kcdtp8fz98xne8w9k756';

const client = stream.connect(APP_KEY, API_SECRET, APP_ID);

exports.read_a_token = function(req, res) {
    const userToken = client.createUserToken(req.params.jID);
    console.log('user SET : ' + req.params.jID + ' ' + userToken);
    res.json({userToken});
  };

exports.post_ping = function(req, res) {
  console.log(req.body, req.params.jID); 
   const activity = {
    actor: {
      data: {
        name: 'BACKEND',
        profileImage: 'https://fillmurray.com/200/300',
      },
    },
    verb: 'ping',
    object: req.body.message,
    time: new Date(),
    // to: ['college:College_UCSC']
  };
  const feed = client.feed(req.params.feedGroup, req.params.jID);
  feed.addActivity(activity).then(
    (activiyResponse) => {
      res.json({activiyResponse});
      console.log('SUCCESS ', activiyResponse)
    }, // nothing further to do
    function(err) {
      // Handle or raise the Error.
    }
  );
}

exports.create_follows = function(req, res) {
  const departmentFeed = client.feed('department', 'D_MATH');
  const collegeFeed = client.feed('college', 'College_UCSC');
  
  collegeFeed.follow('department', 'D_MATH');

  departmentFeed.follow('class', 'C_MATH101');
  departmentFeed.follow('class', 'C_MATH202');
  const message ='MAKE department D_MATH follow  C_MATH101  && C_MATH202'
  console.log(message);
  res.json({message});
};

exports.make_unfollows = function(req, res) {
  const departmentFeed = client.feed('department', 'D_MATH');

  const collegeFeed = client.feed('timeline', 'College_UCSC');
  
  collegeFeed.unfollow('department', 'D_MATH');
  // optional { keepHistory: true }
  departmentFeed.unfollow('class', 'C_MATH101');
  departmentFeed.unfollow('class', 'C_MATH202');

  const message ='MAKE department D_MATH Unfollow  C_MATH101  && C_MATH202'
  console.log(message);
  res.json({message});
};