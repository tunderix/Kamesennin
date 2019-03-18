import Command from '../Models/Command'

function Help (commands) {
    Command.call(this);
    
    this.syntaxIdentifier = ['help'];
    this.message = "";
    this.embeddedMessage = {}

    const newMessage = "Here is a list of all the commands: ";
    commands.forEach(command => {
        newMessage = newMessage + command.syntaxIdentifier + ", "
    });
    this.message = newMessage
    
}

Help.prototype = Object.create(Command.prototype);
Help.prototype.constructor = Help;

const help = new Help;
export default help