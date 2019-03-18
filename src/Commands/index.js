import kamehameha from './kamehameha'
import ping from './ping'
import help from './help'

const help = help(ping, kamehameha)
const commands = new Array(ping, kamehameha, help);

export default commands