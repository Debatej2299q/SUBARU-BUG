const fs = require('fs')

//===========================//

const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')

//===========================//

global.d = new Date()
global.calender = d.toLocaleDateString('id')

//===========================//

//General Settings 
global.apikey = 'ptla_GfKphXjlQqQr4kzDn8PcNjcVoYmO837HclGJQPvlt2C' //Ganti pake apikey panel lu
global.capikey = 'ptlc_ptLLlo8uEOP2THTRxFZbEDMYJBE6QiZ3p0LzXVGGdR7' //Ganti Pake Capikey Panel Lu
global.domain = 'https://nobody.panelmurah.me'
global.eggsnya = '15' //Ganti Pake Eggs Panel Lu
global.location = '1' //Ganti Pake Location Panel Lu

//===========================//

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['263785028126']
global.ownMain = '263785028126'
global.NamaOwner = 'ℓσя∂ ткм' //gausah diganti 
global.sessionName = 'spidersession'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = '𝐒𝐩𝐢𝐝𝐞𝐫 𝐕𝟕𝟎𝟎' //ganti aj klo mau
global.author = 'ℓσя∂ ткм' //ganti aj klo mau
global.packname = '𝐒𝐩𝐢𝐝𝐞𝐫 𝐕𝟕𝟎𝟎' //ganti aj klo mau
global.yt = 'https://whatsapp.com/channel/0029VaKjSra9WtC0kuJqvl0g' //gausah diganti

//===========================//

global.listr = ` │⬡ 1GB Cpu: 50% - 3.000/bln
 │⬡ 2GB Cpu: 70% - 5.000/bln
 │⬡ 3GB Cpu: 90% - 7.000/bln
 │⬡ 4GB Cpu: 110% - 9.000/bln
 │⬡ 5GB Cpu: 130% - 11.000/bln
 │⬡ 6GB Cpu: 150% - 13.000/bln
 │⬡ 7GB Cpu: 170% - 15.000/bln
 │⬡ 8GB Cpu: 200% - 17.000/bln`
 
//===========================//

global.country = `263`
global.system = {
gmail: `cod3Uchiha@gmail.com`,
}

//===========================//

global.decor = {
	menut: '❏═┅═━–〈',
	menub: '┊•',
	menub2: '┊',
	menuf: '┗––––––––––✦',
	hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',

	menut: '––––––『',
menuh: '』––––––',
menub: '┊☃︎ ',
menuf: '┗━═┅═━––––––๑\n',
	menua: '',
	menus: '☃︎',

	htki: '––––––『',
	htka: '』––––––',
	haki: '┅━━━═┅═❏',
	haka: '❏═┅═━━━┅',
	lopr: 'Ⓟ',
	lolm: 'Ⓛ',
	htjava: '❃'
}

//===========================//

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '📊',
limit: '🎫',
health: '❤️',
exp: '✨',
atm: '💳',
money: '💰',
bank: '🏦',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🛍️',
mythic: '🎁',
legendary: '🗃️',
superior: '💼',
pet: '🔖',
trash: '🗑',
armor: '🥼',
sword: '⚔️',
pickaxe: '⛏️',
fishingrod: '🎣',
wood: '🪵',
rock: '🪨',
string: '🕸️',
horse: '🐴',
cat: '🐱',
dog: '🐶',
fox: '🦊',
robo: '🤖',
petfood: '🍖',
iron: '⛓️',
gold: '🪙',
emerald: '❇️',
upgrader: '🧰',
bibitanggur: '🌱',
bibitjeruk: '🌿',
bibitapel: '☘️',
bibitmangga: '🍀',
bibitpisang: '🌴',
anggur: '🍇',
jeruk: '🍊',
apel: '🍎',
mangga: '🥭',
pisang: '🍌',
botol: '🍾',
kardus: '📦',
kaleng: '🏮',
plastik: '📜',
gelas: '🧋',
chip: '♋',
umpan: '🪱',
skata: '🧩'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}
}

//===========================//

   //Respon
global.mess = { // bagian ini gausah diganti 
ingroup: '𝙼𝚘𝚝𝚑𝚎𝚛 𝙵𝚞𝚌𝚔𝚎𝚛 𝚃𝚑𝚒𝚜 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚌𝚊𝚗 𝚘𝚗𝚕𝚢 𝚋𝚎 𝚞𝚜𝚎𝚍 𝚘𝚗 𝚐𝚛𝚘𝚞𝚙𝚜💢',
admin: `❗𝙼𝚘𝚝𝚑𝚎𝚛 𝙵𝚞𝚌𝚔𝚎𝚛 𝚢𝚘𝚞 𝚊𝚛𝚎 𝚗𝚘𝚝𝚘𝚗𝚎 𝚘𝚏 𝚝𝚑𝚎 𝚊𝚍𝚖𝚒𝚗𝚜 😝!𝙵𝚞𝚌𝚔 𝚢𝚘𝚞 🖕😎🖕`,
owner: `𝙼𝚘𝚝𝚑𝚎𝚛 𝙵𝚞𝚌𝚔𝚎𝚛 𝚢𝚘𝚞 𝚊𝚛𝚎 𝚗𝚘𝚝 *𓆩ᴸᴼᴿᴰткм𓆪* 𝚊𝚗𝚍 𝚢𝚘𝚞 𝚠𝚒𝚕𝚕 𝚗𝚎𝚟𝚎𝚛 𝚋𝚎 !𝙵𝚞𝚌𝚔 𝚢𝚘𝚞 🖕😎🖕️`,
premium: '𝙼𝚘𝚝𝚑𝚎𝚛 𝙵𝚞𝚌𝚔𝚎𝚛 𝚢𝚘𝚞 𝚊𝚛𝚎 𝚗𝚘𝚝 𝚊 𝚙𝚛𝚎𝚖𝚒𝚞𝚖 𝚖𝚎𝚖𝚋𝚎𝚛!𝙵𝚞𝚌𝚔 𝚢𝚘𝚞 🖕😎🖕',
seller: 'Lu bukan seller, Jadi gabakal bisa make😹',
usingsetpp: '𝙿𝚛𝚘𝚏𝚒𝚕𝚎 𝚙𝚒𝚌 𝚞𝚙𝚍𝚊𝚝𝚎𝚍 𝚜𝚞𝚌𝚌𝚎𝚜𝚏𝚞𝚕 🤓',
wait: '*🕙𝚆𝚊𝚒𝚝 𝚊𝚜 𝙸 𝚙𝚛𝚘𝚌𝚌𝚎𝚜 𝚢𝚘𝚞𝚛 𝚛𝚎𝚚𝚞𝚎𝚜𝚝🗿*',
succes: '🌆𝙳𝚘𝚗𝚎 𝚋𝚢 𝚂𝚙𝚒𝚍𝚎𝚛 𝚅𝟽𝟶𝟶🕷',
bugrespon: `✅𝙿𝚛𝚘𝚌𝚌𝚎𝚜𝚒𝚗𝚐🕷️`
}

//===========================//

// #@whiskeysockets/baileys ^6.3.0
global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})
