import kamehameha from './kamehameha'
import ping from './ping'
import notfound from './notfound'
//import help from './help'

//const commandArray = [ping, kamehameha];
//const helpCommand = help(commandArray)
const commands = new Array(notfound, ping, kamehameha);

export default commands