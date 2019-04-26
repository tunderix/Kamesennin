import Command from '../Models/Command'

function Atlas() {
  Command.call(this)
  this.syntaxIdentifier = ['atlas']
  this.message = 'pin code: 3698'
  this.action = (bot, channelID) => {
    bot.sendMessage({
      to: channelID,
      message: this.message,
    })
  }
}
Atlas.prototype = Object.create(Command.prototype)
Atlas.prototype.constructor = Atlas

export const atlas = new Atlas()
