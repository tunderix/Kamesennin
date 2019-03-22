import botCommandCharacter from  './Utils/Constants.js'
import commands from './Commands'
import Discord from 'discord.io'
import { isFunction } from './Utils/Helpers.js';

// Initialize Discord Bot
var bot = new Discord.Client({
    token: process.env.DISCORD_AUTH_TOKEN,
    autorun: true
});

// Listener for catching commands from bot. 
bot.on('message', function (user, userID, channelID, message, evt) {
    if (isCommand(message)) {
        // For now: Take the first argument. 
        const arguments = argumentsFrom(message);
        
        // Convert argument into a command. 
        const currentCommand = commandFromArguments(arguments);

        // Command to execute message sending. 
        currentCommand.sendMessageTrigger = sendBasicResponse;
        currentCommand.sendEmbeddedTrigger = sendMultilineResponse;

        // Execute actions for command and subcommands
        executeCommand(arguments, currentCommand);

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
const argumentsFrom = (message) => {
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

    //First argument is the syntax identifier.
    const syntaxIdentifier = arguments[0];

    //Find command with syntaxIdentifier. 
    commands.forEach(command => {
        if (command.syntaxIdentifier === syntaxIdentifier) {
            returnableCommand = command;
        }
    });

    return returnableCommand
}

function executeCommand(arguments, command){

    //Always first excecute action of a command. 
    if(isFunction(command.action)){
        command.action();
    }

    // Intersection https://stackoverflow.com/questions/16227197/compute-intersection-of-two-arrays-in-javascript/16227294
    // Find common ones from arguments and command parameters.
    const subCommands = arguments.filter(function(n) {
        return command.commandParameters.indexOf(n) > -1;
    });

    // Excecute the subparameter actions
    subCommands.forEach(sub => {
        if(isFunction(sub.action)){
            command.action();
        }
    });
}

// Send message to client! 
function sendResponse(command, channelID) {

    // Make sure which replymessage type should be used or BOTH
    // MESSAGE // EMBEDDED
    if(command.message != null){
        sendBasicResponse(command, channelID);
    }
    if(command.embeddedMessage != null){
        sendMultilineResponse(command, channelID);
    }
}

function sendBasicResponse(command, channelID){
    bot.sendMessage({
        to: channelID,
        message: command.message
    });
}

function sendMultilineResponse(command, channelID){
    bot.sendMessage({
        to: channelID,
        embed: command.embeddedMessage
    });
}

export default bot