export var notfound = function(){
    this.message = squabble();
    this.syntaxIdentifier = ['404'];
}

const squabble = () => {
    const texts = [
        "404, Fuck",
        "Sorry... Me Stupid... Me not understand",
        "Uhm, I think you mistyped.... Nab..."
    ]
    return texts[Math.floor(Math.random() * texts.length)];
}
