const fs = require('fs')
const chalk = require('chalk')

global.devNumber = ['6285133270996']
global.name = 'LaxxyOffc'
global.namebot = 'Laxxy Botz'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blueBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
