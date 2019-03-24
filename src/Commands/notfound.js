import Command from '../Models/Command'

function NotFound () {
    Command.call(this);
    this.message = squabble();
    this.syntaxIdentifier = ['notfound'];
    this.action = (bot, channelID) => {
        bot.sendMessage({
            to: channelID,
            message: squabble()
        });
    };
}
NotFound.prototype = Object.create(Command.prototype);
NotFound.prototype.constructor = NotFound;

const squabble = () => {
    const texts = [
        "404, Fuck",
        "Sorry... Me Stupid... Me not understand",
        "Uhm, I think you mistyped.... Nab..."
    ]
    return texts[Math.floor(Math.random() * texts.length)];
}

export const notfound = new NotFound;