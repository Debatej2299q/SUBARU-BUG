/*

# Base By Zynxzoo
# Owner ? : ZynXzooo 
!- do not delete this credit

RESMI DARI ABEXZMODS

  LARANGAN
 
- DI LARANG MEMPERJUAL SC ZYNXZOO
- DI LARANG MEMPERBAGI SC ZYNXZOO

JIKA MELANGGAR LARANGAN YANG DI BERIKAN ZYNXZOO, GAPAPA SI SOALNYA KODENYA DI GW 

SOSMED

YOUTUBE : https://youtube.com/@zynxzooo 
CH TELE : https://t.me/ZynXzooo
CH WA : https://whatsapp.com/channel/0029ValRq0ULikgDaQ5Y0c0L

*/

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['6285609833744'] // isi nomor lu
global.ownMain = '6285609833744' // isi nomor lu
global.NamaOwner = 'Zʏɴxᴢᴏᴏ' //gausah diganti
global.sessionName = 'session'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = 'ᴢʏɴxᴢᴏᴏXᴄʀᴀsʜ' //ganti aj klo mau
global.author = 'zynxzo' //ganti aj klo mau
global.packname = 'zynxzo' //ganti aj klo mau
global.url = 'https://youtube.com/@abexzmods' //gausah diganti
global.urlWa = 'https://wa.me/6285609833744'
global.url1 = 'https://youtube.com/@abexzmods' //gausah diganti
global.url2 = 'https://whatsapp.com/channel/0029ValRq0ULikgDaQ5Y0c0L' //gausah diganti
global.simbol = '𖥂'
//gaush di ganti
global.xcrash = {
    kz: "ᛃͣͮMods ⌕",
    xv: "🧬༑𝐂⃟⃟𝐫𝐚𝐬𝐡꙲ౄ҈҉ャ",
    xz: "🖤⟩ ༘྅ɖɛᏉᎾֆɨx𝙲Ꮎʀɛ ⿻ ꧏ🤍҈ ༑",
    xk: "*👑༘⃰༡͜͡ⅅⅇ̄𝕧̷𝕠̤𝕤̊ⅈ͓߲𝕩𝕔𝕠̷̲𝕣ⅇ̈ 𑅆༏",
    xc: "🔥⃟༑𝐂𝐎𝐒𝐓𝐒༑⃟🧐⃟ ⟩ 𝐛𝐲 𝐒𝐤𝐲𝐙𝐞𝐭 ☆ >",
    xq: "📱𝐞𝐱𝐜𝐞𝐩𝐭𝐢𝐨𝐧-𝐙𝐞𝐭✔️"
}

global.domain = '' //ISI DOMAIN PANEL MU
global.apikey = 'pltc' //ISI APIKEY PLTA MU KALO G TAU CHAT GW 087743212449
global.capikey = 'ptla' //ISI APIKEY PLTC MU KALO G TAU CHAT GW 087743212449
global.eggsnya = '15' //PAKE ID EGGS MU KALO GA TAU DEFAULT AJA
global.location = '1' //JANGAN DIGANTI KALO G MAU EROR

global.mess = { // Custom Sesuka Lu
wait: '𝗪𝗮𝗶𝘁𝗶𝗻𝗴 𝗳𝗼𝗿 𝗽𝗿𝗼𝗰𝗲𝘀𝘀𝗶𝗻𝗴!',
bugwait: `<!> 𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴
𝘸𝘢𝘪𝘵 𝘢 𝘮𝘰𝘮𝘦𝘯𝘵 𝘣𝘦𝘤𝘢𝘶𝘴𝘦 𝘵𝘩𝘦 𝘣𝘶𝘨 𝘪𝘴 𝘲𝘶𝘪𝘵𝘦 𝘩𝘦𝘢𝘷𝘺 👾`,
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
owner: 'You are not the owner.',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?`,
success: 'Success',
bugrespon: `<!> 𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴
𝘸𝘢𝘪𝘵 𝘢 𝘮𝘰𝘮𝘦𝘯𝘵 𝘣𝘦𝘤𝘢𝘶𝘴𝘦 𝘵𝘩𝘦 𝘣𝘶𝘨 𝘪𝘴 𝘲𝘶𝘪𝘵𝘦 𝘩𝘦𝘢𝘷𝘺 👾`
}

/*global.mess = { // Custom Sesuka Lu
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
owner: 'You are not the owner.',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?`,
wait: '*Waiting for processing*',
success: 'Success Bang',
bugrespon: `Processs.....`
}*/

global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})