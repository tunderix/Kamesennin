import botCommandCharacter from  './Utils/Constants'
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
        const argument = commandArguments(message)[0];

        // Convert argument into a command. 
        const currentCommand = currentCommand(argument);

        // Response based on command
        sendResponse(currentCommand, channelID);
     }
});

const commandArguments = (message) => {
    return message.substring(1).split(' ');
}
const isCommand = (message) => {
    return message.substring(0, 1) === botCommandCharacter
}

// Find command from given arguments and commandlist. 
const currentCommand = (argument) => {
    // By default take the first command from the list
    const returnableCommand = commands[0]

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

export default bot