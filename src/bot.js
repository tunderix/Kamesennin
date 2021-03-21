import { botCommandCharacter } from "./Utils/Constants.js";
import { commands } from "./Commands";
import Discord from "discord.io";
import { isFunction } from "./Utils/Helpers.js";
import mongo from "mongodb";
import dotenv from "dotenv";
import { connectionLogQuery } from "./MongoService/MongoDB";

var mongoClient = mongo.MongoClient;
dotenv.config();

// Initialize Discord Bot
var bot = new Discord.Client({
  token: process.env.DISCORD_AUTH_TOKEN,
  autorun: true,
});

// Listener for catching commands from bot.
bot.on("message", function (user, userID, channelID, message, evt) {
  console.log(
    "User " + user.username + "(" + userID + ")" + "Sent message: " + message
  );

  // Register message to database.
  //AzureCosmosDB.Query(userID, message, new Date().getTime());

  const isComm = isCommand(message);
  if (isComm === true) {
    // For now: Take the first argument.
    var botArguments = argumentsFrom(message);

    // Convert argument into a command.
    var currentCommand = commandFromArguments(botArguments);
    console.log(
      "The message was parsed as a command: " + currentCommand.syntaxIdentifier
    );

    // Command to execute message sending.
    currentCommand.sendMessageTrigger = sendBasicResponse;
    currentCommand.sendEmbeddedTrigger = sendMultilineResponse;

    // Execute actions for command and subcommands
    executeCommand(currentCommand, channelID);

    // Response based on command
    // sendResponse(currentCommand, channelID);
  }
});

bot.on("disconnect", function ({ errMsg, code }) {
  console.log("Bot Disconnected, error message: " + errMsg);
});

// Listener for starting the bot
bot.on("ready", function (evt) {
  console.log("Connected");
  console.log("Logged in as: ");
  console.log(bot.username + " - (" + bot.id + ")");
  connectionLogQuery(mongoClient, bot.username);
});

// Remove the first character, then split each of the arguments into array.
const argumentsFrom = (message) => {
  return message.substring(1).split(" ");
};

// Ensure that its a command by detecting command character
function isCommand(message) {
  const firstChar = message.substring(0, 1);
  const isComm = firstChar === botCommandCharacter;
  console.log(
    "First character of the message: " +
      firstChar +
      ", Bot command character is: " +
      botCommandCharacter +
      " --> isCommand is " +
      isComm
  );
  return isComm;
}

// Find command from given arguments and commandlist.
const commandFromArguments = (botArguments) => {
  // By default take the first command from the list
  var returnableCommand = commands[0];
  console.log("Set the default command to return " + returnableCommand);

  //First argument is the syntax identifier.
  const syntaxIdentifier = botArguments[0];

  //Find command with syntaxIdentifier.
  commands.forEach((command) => {
    console.log("Going through command: " + command.syntaxIdentifier);

    command.syntaxIdentifier.forEach((sid) => {
      console.log("syntaxIdentifier for command: " + sid);
      if (sid === syntaxIdentifier) {
        console.log("Found a matching command with syntax identifier " + sid);
        console.log("Set the command to return: " + sid);
        returnableCommand = command;
      }
    });

    /*
        if(typeof command !== 'undefined' && typeof command.syntaxIdentifier !== 'undefined'){
            command.syntaxIdentifier.forEach(sid => {
                if (sid === syntaxIdentifier && typeof syntaxIdentifier !== 'undefined') {
                    console.log("Found a matching command with syntax identifier " + sid);
                    console.log("Set the command to return: " + sid);
                    returnableCommand = command;
                }
            })
        }
        */
  });

  console.log("Returning command:" + returnableCommand);
  return returnableCommand;
};

function executeCommand(command, channelID) {
  //Always first excecute action of a command.
  if (isFunction(command.action)) {
    command.action(bot, channelID);
  }

  // Intersection https://stackoverflow.com/questions/16227197/compute-intersection-of-two-arrays-in-javascript/16227294
  // Find common ones from arguments and command parameters.
  /*
    const subCommands = botArguments.filter(function(n) {
        return command.commandParameters.indexOf(n) > -1;
    });

    // Excecute the subparameter actions
    subCommands.forEach(sub => {
        if(isFunction(sub.action)){
            command.action();
        }
    });
    */
}

// Send message to client!
function sendResponse(command, channelID) {
  // Make sure which replymessage type should be used or BOTH
  // MESSAGE // EMBEDDED
  if (command.message != null) {
    sendBasicResponse(command, channelID);
  }
  if (command.embeddedMessage != null) {
    sendMultilineResponse(command, channelID);
  }
}

function sendBasicResponse(command, channelID) {
  bot.sendMessage({
    to: channelID,
    message: command.message,
  });
}

function sendMultilineResponse(command, channelID) {
  bot.sendMessage({
    to: channelID,
    embed: command.embeddedMessage,
  });
}

export default bot;
