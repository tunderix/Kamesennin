function Command() {

    //Array of command syntaxes. ex. !mulu mala jala
    this.syntaxIdentifier = [''];
    
    // Response message :: When responding to discord message. 
    this.message = "Ping!"

    // Multiline message for lists
    this.embeddedMessage = {}
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