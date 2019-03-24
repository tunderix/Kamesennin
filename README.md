# Kamesennin
Discord Bot for Jontka Channel. 

# Installation
## Requirements
You need Node.js in order to develop and run the application. 

## Dependencies
To install dependencies, run
`npm install`

## Environmental variables
In order for you to *RUN* the application, you need to specify local variables. 
Add `.env` file into your project root and apply the following information: 
```
DISCORD_AUTH_TOKEN=
MONGODB_MLAB=
MONGODB_URI=
```
These configurations are only used while testing changes in local environment. 

In production these variables are found from heroku-application as environmental variables. 

# Running Application
To run the bot:
`npm start`

Starting application launches bot.js, which launches discord bot with DISCORD_AUTH_TOKEN -identifier. 

# Deploying changes into production
Production is atm running in heroku. To deploy to heroku you use the "heroku-deploy" branch. Code will automatically deploy at this point.

# Bot command structure
Bot command structure is based on the following design.
![Alt text](./documents/example.jpg?raw=true "Title")