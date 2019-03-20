import Command from '../Models/Command'
import { embedMessageAuthor, embedMessageColor } from '../Utils/Constants'

function Help (commands) {
    Command.call(this);
    
    this.syntaxIdentifier = ['help'];
    this.message = null;

    const header = "Ahoy!";
    const desc = "Le Commandier for ya'";
    const commandFields = [];

    for (let index = 0; index < commands.length; index++) {
        const command = commands[index];
        const newField = { 
            name: "Command " + index + " - ", 
            value: "" + command.syntaxIdentifier + "",
            inline: true
        }
        commandFields.push(newField)
    }
    
    this.embeddedMessage = {
        color: embedMessageColor,
        author: {
          name: embedMessageAuthor
        },
        title: header,
        description: desc,
        fields: commandFields
    };
}

Help.prototype = Object.create(Command.prototype);
Help.prototype.constructor = Help;

const help = new Help;
export default help