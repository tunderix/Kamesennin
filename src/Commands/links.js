import Command from '../Models/Command'

function Links () {
    Command.call(this);
    this.syntaxIdentifier = ['links'];
    this.message = "Here are some important links"
    this.embeddedMessage = {}
}
Links.prototype = Object.create(Command.prototype);
Links.prototype.constructor = Links;

const links = new Links;
export default links