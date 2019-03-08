var Discord = require('discord.io');
var logger = require('winston');
var packageJson = require('./package.json');
// var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.DISCORD_AUTH_TOKEN,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '?') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var messageToBeSent = ''+user+', you deserve to be punished! KaameehaameeHAAAAAA!';
        var infoMessage = 'Hi, I am ' + packageJson.name + ' and my power level is ' + packageJson.version;
        args = args.splice(1);
        switch(cmd) {
            case 'kamehameha':
                bot.sendMessage({
                    to: channelID,
                    message: messageToBeSent
                });
            case 'info':
                bot.sendMessage({
                    to: channelID,
                    message: infoMessage
                });
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});