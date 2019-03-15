import Command from '../Models/Command'

function Ping () {
    Command.call(this);
    this.syntaxIdentifier = 'ping';
    this.message = "pong"
}
Ping.prototype = Object.create(Command.prototype);
Ping.prototype.constructor = Ping;

const pong = new Ping;
export default pong