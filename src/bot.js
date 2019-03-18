import botCommandCharacter from  './Utils/Constants.js'
import commands from './Commands'
import Discord from 'discord.io'

// Initialize Discord Bot
var bot = new Discord.Client({
    token: process.env.DISCORD_AUTH_TOKEN,
    autorun: true
});

// Listener for catching commands from bot. 
bot.on('message', function (user, userID, channelID, message, evt) {
    if (isCommand(message)) {
        // For now: Take the first argument. 
        const arguments = commandArguments(message);
        
        // Convert argument into a command. 
        const currentCommand = commandFromArguments(arguments);

        // Response based on command
        sendResponse(currentCommand, channelID);
     }
});

// Listener for starting the bot
bot.on('ready', function (evt) {
    console.log('Connected');
    console.log('Logged in as: ');
    console.log(bot.username + ' - (' + bot.id + ')');
});

// Remove the first character, then split each of the arguments into array. 
const commandArguments = (message) => {
    return message.substring(1).split(' ');
};

// Ensure that its a command by detecting command character
const isCommand = (message) => {
    return message.substring(0, 1) === botCommandCharacter
};

// Find command from given arguments and commandlist. 
const commandFromArguments = (arguments) => {
    // By default take the first command from the list
    var returnableCommand = commands[0]

    // Match command into argument and prepare to return it.
    commands.forEach(command => {
        if (command.syntaxIdentifier === argument) {
            returnableCommand = command;
        }
    });

    return returnableCommand
}

// Send message to client! 
function sendResponse(command, channelID) {
    bot.sendMessage({
        to: channelID,
        message: command.message
    });
}

function sendMultilineResponse(){
    bot.sendMessage()
}

export default bot