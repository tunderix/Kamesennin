import SteamID from 'steamid'
/*
******** FLOW ********
**********************

1. User can lookup he's steamID with *username* 
1. User steamID register for *username* 
2. User can fetch records based on *username* 

*/

export class SteamAPI {
    
    constructor() {
        this.url_steamAPI = "http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/"
        this.url_openDotaAPI = "https://api.opendota.com/api/players/" + steamID + "?api_key=" + process.env.STEAM_WEB_API_TOKEN;
        this.querySpecPlayers = "players"
    }

    lookup(username, action){
        fetch(lookupUrl(username))
        .then(function(data){
            console.log("SteamID JSON of user: " + data);
            action(data);
        }).catch(function(error){
            console.log("Looking up for steamID using playername has failed.");
            console.log("Error: " + error );
        });
    }

    // Registerable steamid can be whichever type. 
        /*
        sid.getSteam3RenderedID()
        sid.getSteam2RenderedID()
        sid.getSteamID64()
        */
    register(steamID, username, action){
        const sid = new SteamID(steamID);
    }

    fetch(steamID, action){
        fetch(playerInfoUrl(steamID))
        .then(function(data){
            console.log("Data is: " + data);
            action(data);
        }).catch(function(error){
            console.log("Fetching player with steamID failed.");
            console.log("Error: " + error );
        });
    }

    lookupUrl (username) {
        return this.url_steamAPI + API_KEY() + VANITY_NAME(username);;
    }

    playerInfoUrl (steamID){
        const url = this.url_openDotaAPI + "/" +
            players + "/" +
            steamID +
            API_KEY();
        return url;
    }

    VANITY_NAME (username) {
        return "&vanityurl=" + username
    }

    API_KEY (){
        return "?api_key=" + process.env.STEAM_WEB_API_TOKEN;
    }
}