import Command from '../Models/Command'
import * as links from '../Data/links.json';
import { embedMessageAuthor, embedMessageColor } from '../Utils/Constants'

function Links () {
    Command.call(this);

    const header = "De Might be usefull for ya!";

    this.syntaxIdentifier = ['links'];
    this.embeddedMessage = {
        color: embedMessageColor,
        author: {
          name: embedMessageAuthor
        },
        title: header,
        fields: linkData
    };
}

const linkData = (links) => {
    const linkData = [];
    links.forEach(link => {
        const newLink = {
            name: link.header,
            value: link.url,
            inline: true
        }

        linkData.push(newLink);
    });
    return linkData;
}

Links.prototype = Object.create(Command.prototype);
Links.prototype.constructor = Links;

const links = new Links;
export default links