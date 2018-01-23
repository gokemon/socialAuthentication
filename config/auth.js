// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth': {
        'clientID': 'your-secret-clientID-here', // your App ID
        'clientSecret': 'your-client-secret-here', // your App Secret
        'callbackURL': 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields': ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    'twitterAuth': {
        'consumerKey': ' kFljzEf93BwsXk8em3wKqZLhD',
        'consumerSecret': 'ucUBxzu1EZA3Eo2r2exV57wTiTDFAvxWASRsGH7At30gGehj14',
        'callbackURL': 'http://localhost:8080/auth/twitter/callback'
    },

    /* not set up yet 
    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    } *****/

};