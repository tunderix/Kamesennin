import Command from '../Models/Command'
import { SteamAPI } from '../SteamAPI/steamAPI'

/*
******** FLOW ********
**********************

1. User can lookup he's steamID with *username* 
1. User steamID register for *username* 
2. User can fetch records based on *username* 

*/

function Dota () {
    Command.call(this);

    this.syntaxIdentifier = ['dota', 'dotko', 'dota2'];
    this.commandParameters = [
        {
            syntaxIdentifier: "lookup",
            action: lookupSteamID(username)
        },
        {
            syntaxIdentifier: "register",
            action: registerSteamIDwithUsername(steamID, username)
        },
        {
            syntaxIdentifier: "records",
            action: fetchRecords(steamID)
        }
    ];
    this.message = "Dotkoinfo!"
}

const onSuccessfulPlayerInfo = (data) => {
    //TODO: Reply based on data or something! 
}

const lookupSteamID = (username) => {
    SteamAPI.lookup(username, (steamIdData) => {
        //FORMAT: {"response":{"steamid":"76561198019428231","success":1}}
        // Bot.Message --> Players steamID is: 76561198019428231
        if (this.sendMessageTrigger != null) {
            this.sendMessageTrigger(this, channelID)
        }else if(this.sendEmbeddedTrigger != null){
            this.sendEmbeddedTrigger(this, channelID)
        }
        
    });
}

const registerSteamIDwithUsername = (steamID, username) => {

}

const fetchRecords = (steamID, onSuccess) => {
    SteamAPI.fetchPlayerInfo(steamID, onSuccess)
}

Dota.prototype = Object.create(Command.prototype);
Dota.prototype.constructor = Dota;

const dota = new Dota;
export default dota