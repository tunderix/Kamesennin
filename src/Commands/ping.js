import Command from '../Models/Command'

function Ping () {
    Command.call(this);
    this.syntaxIdentifier = ['ping', 'ding', 'wing'];
    this.message = "pong"
}
Ping.prototype = Object.create(Command.prototype);
Ping.prototype.constructor = Ping;

export const ping = new Ping;