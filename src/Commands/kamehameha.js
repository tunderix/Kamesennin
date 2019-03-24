import Command from '../Models/Command'

function KameHameHa () {
    Command.call(this);
    this.syntaxIdentifier = ['kamehameha'];
    this.message = "Take this... Kaaaaa Meeeee Haaa Mee HAAAAAAA!"
    this.action = (bot, channelID) => {
        console.log("Shooting Kamehameha!");
        bot.sendMessage({
            to: channelID,
            message: this.message
        });
    }
}
KameHameHa.prototype = Object.create(Command.prototype);
KameHameHa.prototype.constructor = KameHameHa;

const kamehameha = new KameHameHa;
export default kamehameha