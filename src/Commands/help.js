import Command from '../Models/Command'

function Help (commands) {
    Command.call(this);
    
    this.syntaxIdentifier = ['help'];
    this.message = null;

    const header = "Here is a list of all the commands";
    const commandFields = [];

    for (let index = 0; index < commands.length; index++) {
        const command = commands[index];
        const newField = { 
            name: "Command " + index + " - ", 
            value: "" + command.syntaxIdentifier + "" 
        }
        commandFields.push(newField)
    }

    this.embeddedMessage = {embed: {
        color: 3447003,
        title: header,
        fields: commandFields
      }
    };
    /*
    {
        author?: {
            icon_url?: string,
            name: string,
            url?: string
        },
        color?: number,
        description?: string,
        fields?: [{
            name: string,
            value?: string,
            inline?: boolean
        }],
        thumbnail?: {
            url: string
        },
        title: string,
        timestamp?: Date
        url?: string,
        footer?: {
            icon_url?: string,
            text: string
        }
    }
    */
}

Help.prototype = Object.create(Command.prototype);
Help.prototype.constructor = Help;

const help = new Help;
export default help