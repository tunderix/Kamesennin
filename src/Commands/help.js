import Command from '../Models/Command'
import { embedMessageAuthor, embedMessageColor } from '../Utils/Constants'

const commandData = [
  { syntax: 'kamehameha', desc: 'Ki-wave' },
  { syntax: 'help', desc: 'List of commands' },
  { syntax: 'ping', desc: 'Checkup if working' },
  { syntax: 'atlas', desc: 'Return pin code to be used ingame' },
]

function Help() {
  Command.call(this)

  this.syntaxIdentifier = ['help']
  this.message = null

  const header = 'Ahoy!'
  const desc = "Le Commandier for ya'"

  this.action = (bot, channelID) => {
    const commandFields = []

    for (let index = 0; index < commandData.length; index++) {
      const command = commandData[index]
      const newField = {
        name: '!' + command.syntax + '',
        value: '' + command.desc + '',
        inline: true,
      }
      commandFields.push(newField)
    }

    this.embeddedMessage = {
      color: embedMessageColor,
      author: {
        name: embedMessageAuthor,
      },
      title: header,
      description: desc,
      fields: commandFields,
    }

    bot.sendMessage({
      to: channelID,
      embed: this.embeddedMessage,
    })
  }
}

Help.prototype = Object.create(Command.prototype)
Help.prototype.constructor = Help

const help = new Help()
export default help
