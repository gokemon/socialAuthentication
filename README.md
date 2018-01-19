# socialAuthentication
Social Authentication application with Passport on Facebook, Google, Twitter using JavaScript and Node stack



Welcome to my first sample application of 2018

I needed a refresher on writing Social Authentication with Passport in Node apps, so I am just walking myself through something similar to what I did back in 2016.

I figure my requirements to be simple enough; build an application that will have:

1. Local account logins and signups 
1. Facebook and Twitter logins and registration
1. Require login for certain routes/sections of my app
1. Creating a password hash for local accounts (using bcrypt-nodejs)
1. Displaying error messages using flash with connect-flash.
1. Connecting all social accounts under one user account
1. Allowing a user to unlink a specific social account


Most of these are pretty self-explanatory.

- Express is the middleware framework.
- Ejs is my templating engine, rather than jade or pug.
- Mongoose is object modeling for my MongoDB database.
- Passport stuff will help me with authenticating the different methods.
- Connect-flash passing session flashdata messages.
- Bcrypt-nodejs has the ability to hash the passwords.

The Express dependencies are all pretty common; morgan, body-parser, cookie-parser, method-override, express-session.

I want to setup the following routes:

- Home Page (/)
- Login Page (/login)
- Signup Page (/signup)
- Handle the POST for both login
- Handle the POST for both signup
- Profile Page (after logged in)
