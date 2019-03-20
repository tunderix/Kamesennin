
export class SteamAPI {
    
    constructor() {
        this.url_openDotaAPI = "https://api.opendota.com/api/players/" + steamID + "?api_key=" + process.env.STEAM_WEB_API_TOKEN;
        this.querySpecPlayers = "players"
    }

    fetchPlayerInfo(steamID, action){
        fetch(playerInfoUrl(steamID))
        .then(function(data){
            console.log("Data is: " + data);
            action(data);
        }).catch(function(error){
            console.log("Fetching player with steamID failed.");
            console.log("Error: " + error );
        });
    }

    playerInfoUrl (steamID){
        const url = this.url_openDotaAPI + "/" +
            players + "/" +
            steamID +
            API_KEY();
        return url
    }

    API_KEY (){
        return "?api_key=" + process.env.STEAM_WEB_API_TOKEN;
    }
}