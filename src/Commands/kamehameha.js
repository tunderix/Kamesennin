import Command from '../Models/Command'

function KameHameHa () {
    Command.call(this);
    this.syntaxIdentifier = ['kamehameha'];
    this.message = "Take this... Kaaaaa Meeeee Haaa Mee HAAAAAAA!"
    this.action = (bot, channelID) => {
        bot.sendMessage({
            to: channelID,
            message: this.message
        });
    }
}
KameHameHa.prototype = Object.create(Command.prototype);
KameHameHa.prototype.constructor = KameHameHa;

export const kamehameha = new KameHameHa;