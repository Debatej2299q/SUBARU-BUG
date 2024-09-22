const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "918761888106,919614477116"
global.ownername = "TP STUDIO"
global.ytname = "YT: TP-STUDIO"
global.socialm = "GitHub: Debatej2299q"
global.location = "India, Assam & West Bengal"

global.ownernumber = '918761888106'  //creator number
global.ownername = 'TP STUDIO' //creator name
global.botname = 'SUBARU-BUG' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'TP-STUDIO\n\nSUBARU-BUG'

//console view/theme
global.themeemoji = '🍷'
global.wm = "SUBARU BUG Bot."

//theme link
global.link = 'https://whatsapp.com/channel/0029Vakxzdf7oQhll9dE2S0t'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v2'

//text bug
global.xbugtex = {
xtxt: '🚨TP-STUDIO🚨',
}
global.bimg = ''
//reply messages
global.mess = {
    done: 'Done🫣',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'SUBARU-BUG Is In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./SUBARU-BUG.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
