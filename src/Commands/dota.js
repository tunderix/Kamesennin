import Command from '../Models/Command'
import { SteamAPI } from '../SteamAPI/steamAPI'

function Dota () {
    Command.call(this);

    this.syntaxIdentifier = ['dota', 'dotko', 'dota2'];
    this.commandParameters = [
        {
            syntaxIdentifier: "steamID",
            action: userAction(steamID, onSuccessfulPlayerInfo(data))
        }
    ];
    this.message = "Dotkoinfo!"
}

const onSuccessfulPlayerInfo = (data) => {
    //TODO: Reply based on data or something! 
}

const userAction = (steamID, onSuccess) => {
    SteamAPI.fetchPlayerInfo(steamID, onSuccess)
}

Dota.prototype = Object.create(Command.prototype);
Dota.prototype.constructor = Dota;

const dota = new Dota;
export default dota