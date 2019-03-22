import Command from '../Models/Command'
import * as links from '../Data/links.json';
import { embedMessageAuthor, embedMessageColor } from '../Utils/Constants'

const givenKeyword = "";

function Links () {
    Command.call(this);

    const header = "De Might be usefull for ya!";

    this.syntaxIdentifier = ['links'];
    this.commandParameters = [
        {
            syntaxIdentifier: "atlas",
            action: function() { 
                givenKeyword = "atlas";
            }
        },
        {
            syntaxIdentifier: "terraria",
            action: function() { 
                givenKeyword = "terraria";
            }
        },
        {
            syntaxIdentifier: "dota",
            action: function() { 
                givenKeyword = "dota";
            }
        }
    ];


    this.embeddedMessage = {
        color: embedMessageColor,
        author: {
          name: embedMessageAuthor
        },
        title: header,
        fields: linksWithKeyword(givenKeyword)
    };
}

const linksWithKeyword = (keyword) => {
    // Check if there is data for the wanted keyword.
    const linkData = null;
    links.forEach(linkCategory => {
        if(linkCategory.keyword === keyword){
            linkData = linkCategory;
        }
    });

    // Go through all of the links in the linkdata and create new link elements for embedded message
    const rLinks = [];
    if(linkData != null){
        const links = linkData.links;
        links.forEach(link => {
            const newLink = {
                name: link.header,
                value: link.url,
                inline: true
            }
    
            rLinks.push(newLink);
        });
    }
    return rLinks;
}

Links.prototype = Object.create(Command.prototype);
Links.prototype.constructor = Links;

const links = new Links;
export default links