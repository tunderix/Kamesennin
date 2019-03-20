function Command() {

    // Array of command syntaxes.
    // User can launch same command with multiple identifiers. ex. !mulu !mala !jala
    this.syntaxIdentifier = [''];

    // Array of parameters for command. !cmd param1 param2 param3
    this.commandParameters = [
        {
            syntaxIdentifier: "deta1",
            action: function() { console.log("Some1"); }
        },
        {
            syntaxIdentifier: "deta2",
            action: function() { console.log("Some2"); }
        }
    ];

    // Action as a FUNCTION
    this.action = function() {  
        console.log("Action");
    };
    
    // Response message :: When responding to discord message. 
    this.message = null //Should be string

    // Multiline message for lists
    this.embeddedMessage = null //Should be string
    /*
    FORMAT
    {
        author?: {
            icon_url?: string,
            name: string,
            url?: string
        },
        color?: number,
        description?: string,
        fields?: [{
            name: string,
            value?: string,
            inline?: boolean
        }],
        thumbnail?: {
            url: string
        },
        title: string,
        timestamp?: Date
        url?: string,
        footer?: {
            icon_url?: string,
            text: string
        }
    }
    */
}

export default Command