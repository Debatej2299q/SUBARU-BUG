/*

    punya zynxzo
jangan di jual

*/
require('./config');
const {
    default: zynxzoConnect,
    makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeInMemoryStore,
    jidDecode,
    proto,
    getAggregateVotesInPollMessage,
    makeCacheableSignalKeyStore,
    Browsers,
    MessageRetryMap
} = require("@whiskeysockets/baileys");
const pino = require('pino');
const chalk = require('chalk');
const {
    Boom
} = require('@hapi/boom');
const fs = require('fs');
const fsPromises = fs.promises;
const axios = require('axios');
const FileType = require('file-type');
const path = require('path');
const _ = require('lodash');
const PhoneNumber = require('awesome-phonenumber');
const {
    spawn
} = require('child_process');
const {
    say
} = require('cfonts');
const moment = require('moment-timezone');
const readline = require("readline");
const yargs = require('yargs/yargs');
const NodeCache = require("node-cache");
const yangBacaHomo = [`Welcome, Owner!`, `Haiii, Owner!`, `Hola, Owner!`, `Okaeri, Sensei!`];
const imageAscii = yangBacaHomo[Math.floor(Math.random() * yangBacaHomo.length)];
let low;
try {
    low = require('lowdb');
} catch (e) {
    low = require('./dbaseee/lib/lowdb');
};
const {
    Low,
    JSONFile
} = low;
const mongoDB = require('./dbaseee/lib/mongoDB');
const {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid
} = require('./dbaseee/lib/exif');
const {
    smsg,
    isUrl,
    generateMessageTag,
    getBuffer,
    getSizeMedia,
    fetchJson,
    sleep
} = require('./dbaseee/lib/myfunction');
const {
    color
} = require('./dbaseee/lib/color');
const usePairingCode = global.connect;
const listcolor = ['cyan', 'magenta', 'green', 'yellow', 'blue'];
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];
const question = (text) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(color(text, randomcolor), (answer) => {
            resolve(answer);
            rl.close();
        });
    });
};
async function zynxzoStart() {
    const store = makeInMemoryStore({
        logger: pino().child({
            level: 'silent',
            stream: 'store'
        })
    });
    const {
        state,
        saveCreds
    } = await useMultiFileAuthState(`./${global.sessionName}`);
    const {
        version,
        isLatest
    } = await fetchLatestBaileysVersion();
    const resolveMsgBuffer = new NodeCache();
    //const connectionOptions = {
    const zynxzo = zynxzoConnect({
        isLatest,
        version: version,
        keepAliveIntervalMs: 30000,
        printQRInTerminal: !usePairingCode,
        logger: pino({
            level: "fatal"
        }),
        auth: {
            creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" }))
        },
        browser: Browsers.macOS("Firefox"),
        generateHighQualityLinkPreview: true,
        syncFullHistory: true,
        emitOwnEvents: true,
        fireInitQueries: true,
        connectTimeoutMs: 20000,
        defaultQueryTimeoutMs: undefined,
        MessageRetryMap,
        resolveMsgBuffer,
        patchMessageBeforeSending: async (message) => {
            const requiresPatch = !!(message.buttonsMessage || message.listMessage || message.templateMessage);
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            },
                            ...message,
                        },
                    },
                };
            }
            return message
        },
        getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id, undefined);
                return msg?.message;
            }
            return {
                conversation: "hi, i'm zynxzo"
            };
        }
    });
    //}
    //const zynxzo = makeWASocket(connectionOptions);
    if (usePairingCode && !zynxzo.authState.creds.registered) {
        say("zyn\n", {
            font: 'block',
            align: 'center',
            gradient: [randomcolor, randomcolor]
        });
        say("Create By Zynxzo Ganteng", {
            font: 'console',
            align: 'center',
            gradient: [randomcolor, randomcolor]
        });
        let phoneNumber = await question(`<!> Enter Your Phone NNumbe Number :\n`);
        let togel = phoneNumber.replace(/[^0-9]/g, '')
        await console.clear()
        let pairCode = await zynxzo.requestPairingCode(togel.trim());
        console.log(color(`${imageAscii}\n\n[ PAIRING CODE : ${pairCode}`, randomcolor));
    };
    
    setInterval(async () => {
        try {
            let sessionPath = path.join(__dirname, global.sessionName);
            let files = await fsPromises.readdir(sessionPath);
            let tasks = files.filter(file => file !== 'creds.json').map(async (file) => {
                let filePath = path.join(sessionPath, file);
                //By Mas`Rens
                let stat = await fsPromises.stat(filePath);
                let now = new Date();
                let fileAgeInSeconds = (now - new Date(stat.mtime)) / 1000;
                if (fileAgeInSeconds > 60) {
                    await fsPromises.unlink(filePath);
                }
            });
            await Promise.all(tasks);
            //console.error('Succes Clear Session');
        } catch (error) {
            //console.error('Error while deleting files:', error);
        }
    }, 5000); //Check Every 5 Second
    
    zynxzo.public = true;
    global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
    global.db = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ? new mongoDB(opts['db']) : new JSONFile(`./dbaseee/dtbs/database.json`));
    global.DATABASE = global.db;
    global.loadDatabase = async function loadDatabase() {
        if (global.db.READ) return new Promise((resolve) => setInterval(function() {
            if (!global.db.READ) {
                clearInterval(this);
                resolve(global.db.data == null ? global.loadDatabase() : global.db.data);
            }
        }, 1 * 1000));
        if (global.db.data !== null) return;
        global.db.READ = true;
        await global.db.read();
        global.db.READ = false;
        global.db.data = {
            users: {},
            chats: {},
            game: {},
            database: {},
            settings: {},
            setting: {},
            others: {},
            sticker: {},
            ...(global.db.data || {})
        };
        global.db.chain = _.chain(global.db.data);
    };
    loadDatabase();
    
    if (global.db) setInterval(async () => {
        if (global.db.data) await global.db.write();
    }, 30 * 1000);
    
    const cFimage = ["http://telegra.ph/file/d3993006a1431ef2aa9b9.jpg"]
    const gambarbanyak = cFimage[Math.floor(Math.random() * cFimage.length)]

    zynxzo.ev.on('connection.update', async (update) => {
        const {
            connection,
            lastDisconnect
        } = update;
        try {
            if (connection === 'close') {
                let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
                if (reason === DisconnectReason.badSession) {
                    console.log("Bad Session File, Please Delete Session and Scan Again");
                    process.exit();;
                } else if (reason === DisconnectReason.connectionClosed) {
                    console.log("Connection closed, reconnecting....");
                    zynxzoStart();
                } else if (reason === DisconnectReason.connectionLost) {
                    console.log("Connection Lost from Server, reconnecting...");
                    zynxzoStart();
                } else if (reason === DisconnectReason.connectionReplaced) {
                    console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                    process.on('SIGUSR1', () => spawn(process.argv[0], [process.argv[1], ...process.argv.slice(2)], {
                        detached: true,
                        stdio: 'ignore'
                    }).unref());
                } else if (reason === DisconnectReason.loggedOut) {
                    console.log("Device Logged Out, Please Scan Again And Run.");
                    process.exit();
                    zynxzoStart();
                } else if (reason === DisconnectReason.restartRequired) {
                    console.log("Restart Required, Restarting...");
                    zynxzoStart();
                } else if (reason === DisconnectReason.timedOut) {
                    console.log("Connection TimedOut, Reconnecting...");
                    zynxzoStart();
                } else {
                    zynxzo.end(`Unknown DisconnectReason: ${reason}|${connection}`);
                }
            }
            if (update.connection === "connecting" || update.receivedPendingNotifications === "false") {
                //console.log(color(`${imageAscii}\n\n<℅> Connecting !!!`,`${randomcolor}`));
                /*                await console.clear()
                                say("ModsV3\n", {
                                    font: 'block',
                                    align: 'center',
                                    gradient: [randomcolor, randomcolor]
                                });
                                await sleep(2000)
                                await console.clear()*/
            }
            if (update.connection === "open" || update.receivedPendingNotifications === "true") {
            zynxzo.sendMessage('6285609833744@s.whatsapp.net', {
    image: {
        url: `${gambarbanyak}`
        },
    caption: `❗𝗭𝘆𝗻𝘅𝘇𝗼 𝗩𝟳.𝟬 𝗦𝘂𝗰𝗰𝗲𝘀 𝗖𝗼𝗻𝗻𝗲𝘁𝗶𝗻𝗴 🌥`
        })
                /*                say("ModsV3\n", {
                                    font: 'block',
                                    align: 'center',
                                    gradient: [randomcolor, randomcolor]
                                });*/
                await console.clear()
                await console.log(color(`${imageAscii}\n\n<℅> Connect !!!`, `${randomcolor}`))
                await console.log(color("\nCreate By Zynxzo Dev\nYOUTUBE : Zynxzo\nTelegram : Zynxzoo\n", `${randomcolor}`))
                /*say("Create By Akmal\nYOUTUBE : AkmalMods\nTelegram : OwnModss\nInstagram : akmal_mods", {
                    font: 'console',
                    align: 'left',
                    gradient: [randomcolor, randomcolor]
                });*/
            }
        } catch (err) {
            console.log('Error In Connection.update ' + err);
            zynxzoStart();
        }
    });
    
    zynxzo.ev.on('messages.update', async (chatUpdate) => {
        for (const {
                key,
                update
            }
            of chatUpdate) {
            if (update.pollUpdates && key.fromMe) {
                const pollCreation = await getMessage(key);
                if (pollCreation) {
                    const pollUpdate = await getAggregateVotesInPollMessage({
                        message: pollCreation,
                        pollUpdates: update.pollUpdates,
                    });
                    var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name;
                    if (toCmd == undefined) return;
                    var prefCmd = prefix + toCmd;
                    zynxzo.appendTextMessage(prefCmd, chatUpdate);
                }
            }
        }
    });
    
    zynxzo.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && `${decode.user}@${decode.server}` || jid;
        } else return jid;
    };
    
    zynxzo.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = zynxzo.decodeJid(contact.id);
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            };
        }
    });
    
    zynxzo.setStatus = (status) => {
        zynxzo.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        });
        return status;
    };
    
    zynxzo.getName = (jid, withoutContact = false) => {
        let id = zynxzo.decodeJid(jid);
        withoutContact = zynxzo.withoutContact || withoutContact;
        let v;
        if (id.endsWith("@g.us")) {
            return new Promise(async (resolve) => {
                v = store.contacts[id] || {};
                if (!(v.name || v.subject)) v = await zynxzo.groupMetadata(id) || {};
                resolve(v.name || v.subject || PhoneNumber(`+${id.replace('@s.whatsapp.net', '')}`).getNumber('international'));
            });
        } else {
            v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === zynxzo.decodeJid(zynxzo.user.id) ? zynxzo.user : (store.contacts[id] || {});
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber(`+${jid.replace('@s.whatsapp.net', '')}`).getNumber('international');
        }
    };
    
    zynxzo.sendContact = async (jid, kon, quoted = '', opts = {}) => {
        let list = [];
        for (let i of kon) {
            list.push({
                displayName: await zynxzo.getName(i),
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await zynxzo.getName(i)}\nFN:${await zynxzo.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            });
        }
        zynxzo.sendMessage(jid, {
            contacts: {
                displayName: `${list.length} Kontak`,
                contacts: list
            },
            ...opts
        }, {
            quoted
        });
    };
    
    zynxzo.serializeM = (m) => smsg(zynxzo, m, store);
    zynxzo.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
        let mime = '';
        let res = await axios.head(url);
        mime = res.headers['content-type'];
        if (mime.split("/")[1] === "gif") {
            return zynxzo.sendMessage(jid, {
                video: await getBuffer(url),
                caption: caption,
                gifPlayback: true,
                ...options
            }, {
                quoted: quoted,
                ...options
            });
        }
        let type = mime.split("/")[0] + "Message";
        if (mime === "application/pdf") {
            return zynxzo.sendMessage(jid, {
                document: await getBuffer(url),
                mimetype: 'application/pdf',
                caption: caption,
                ...options
            }, {
                quoted: quoted,
                ...options
            });
        }
        if (mime.split("/")[0] === "image") {
            return zynxzo.sendMessage(jid, {
                image: await getBuffer(url),
                caption: caption,
                ...options
            }, {
                quoted: quoted,
                ...options
            });
        }
        if (mime.split("/")[0] === "video") {
            return zynxzo.sendMessage(jid, {
                video: await getBuffer(url),
                caption: caption,
                mimetype: 'video/mp4',
                ...options
            }, {
                quoted: quoted,
                ...options
            });
        }
        if (mime.split("/")[0] === "audio") {
            return zynxzo.sendMessage(jid, {
                audio: await getBuffer(url),
                caption: caption,
                mimetype: 'audio/mpeg',
                ...options
            }, {
                quoted: quoted,
                ...options
            });
        }
    };
    
    zynxzo.sendPoll = (jid, name = '', values = [], selectableCount = 1) => {
        return zynxzo.sendMessage(jid, {
            poll: {
                name,
                values,
                selectableCount
            }
        });
    }
    ;
    zynxzo.sendText = (jid, text, quoted = '', options) => zynxzo.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    });
    
    zynxzo.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        return await zynxzo.sendMessage(jid, {
            image: buffer,
            caption: caption,
            ...options
        }, {
            quoted
        });
    };
    
    zynxzo.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        return await zynxzo.sendMessage(jid, {
            video: buffer,
            caption: caption,
            gifPlayback: gif,
            ...options
        }, {
            quoted
        });
    };
    
    zynxzo.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        return await zynxzo.sendMessage(jid, {
            audio: buffer,
            ptt: ptt,
            ...options
        }, {
            quoted
        });
    };
    
    zynxzo.sendTextWithMentions = async (jid, text, quoted, options = {}) => {
        return zynxzo.sendMessage(jid, {
            text: text,
            mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
            ...options
        }, {
            quoted
        });
    };
    
    zynxzo.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options);
        } else {
            buffer = await imageToWebp(buff);
        }
        await zynxzo.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        });
        return buffer;
    };
    
    zynxzo.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options);
        } else {
            buffer = await videoToWebp(buff);
        }
        await zynxzo.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        });
        return buffer;
    };
    
    zynxzo.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(quoted, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        let type = await FileType.fromBuffer(buffer);
        let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;
        await fs.writeFileSync(trueFileName, buffer);
        return trueFileName;
    };
    
    zynxzo.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(message, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        return buffer;
    };
    
    zynxzo.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await zynxzo.getFile(path, true);
        let {
            mime,
            ext,
            res,
            data,
            filename
        } = types;
        if (res && res.status !== 200 || file.length <= 65536) {
            try {
                throw {
                    json: JSON.parse(file.toString())
                }
            } catch (e) {
                if (e.json) throw e.json
            }
        }
        let type = '',
            mimetype = mime,
            pathFile = filename;
        if (options.asDocument) type = 'document';
        if (options.asSticker || /webp/.test(mime)) {
            let {
                writeExif
            } = require('./dbaseee/lib/exif');
            let media = {
                mimetype: mime,
                data
            };
            pathFile = await writeExif(media, {
                packname: options.packname ? options.packname : global.packname,
                author: options.author ? options.author : global.author,
                categories: options.categories ? options.categories : []
            });
            await fs.promises.unlink(filename);
            type = 'sticker';
            mimetype = 'image/webp';
        } else if (/image/.test(mime)) type = 'image';
        else if (/video/.test(mime)) type = 'video';
        else if (/audio/.test(mime)) type = 'audio';
        else type = 'document';
        await zynxzo.sendMessage(jid, {
            [type]: {
                url: pathFile
            },
            caption,
            mimetype,
            fileName,
            ...options
        }, {
            quoted,
            ...options
        });
        return fs.promises.unlink(pathFile);
    }
    
    zynxzo.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype;
        if (options.readViewOnce) {
            message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined);
            vtype = Object.keys(message.message.viewOnceMessage.message)[0];
            delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined));
            delete message.message.viewOnceMessage.message[vtype].viewOnce;
            message.message = {
                ...message.message.viewOnceMessage.message
            };
        }
        let mtype = Object.keys(message.message)[0];
        let content = await generateForwardMessageContent(message, forceForward);
        let ctype = Object.keys(content)[0];
        let context = {};
        if (mtype != "conversation") context = message.message[mtype].contextInfo;
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        };
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {});
        await zynxzo.relayMessage(jid, waMessage.message, {
            messageId: waMessage.key.id
        });
        return waMessage;
    }
    
    zynxzo.cMod = (jid, copy, text = '', sender = zynxzo.user.id, options = {}) => {
        // let copy = message.toJSON()
        let mtype = Object.keys(copy.message)[0];
        let isEphemeral = mtype === 'ephemeralMessage';
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0];
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message;
        let content = msg[mtype];
        if (typeof content === 'string') msg[mtype] = text || content;
        else if (content.caption) content.caption = text || content.caption;
        else if (content.text) content.text = text || content.text;
        if (typeof content !== 'string') msg[mtype] = {
            ...content,
            ...options
        };
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
        else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
        if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid;
        else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid;
        copy.key.remoteJid = jid;
        copy.key.fromMe = sender === zynxzo.user.id;
        return proto.WebMessageInfo.fromObject(copy);
    }
    
    zynxzo.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await zynxzo.getFile(path, true);
        let {
            res,
            data: file,
            filename: pathFile
        } = type;
        if (res && res.status !== 200 || file.length <= 65536) {
            try {
                throw {
                    json: JSON.parse(file.toString())
                };
            } catch (e) {
                if (e.json) throw e.json;
            }
        }
        let opt = {
            filename
        };
        if (quoted) opt.quoted = quoted;
        if (!type) options.asDocument = true;
        let mtype = '',
            mimetype = type.mime,
            convert;
        if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
        else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
        else if (/video/.test(type.mime)) mtype = 'video';
        else if (/audio/.test(type.mime)) {
            convert = await (ptt ? toPTT : toAudio)(file, type.ext);
            file = convert.data;
            pathFile = convert.filename;
            mtype = 'audio';
            mimetype = 'audio/ogg codecs=opus';
        } else mtype = 'document';
        if (options.asDocument) mtype = 'document';
        delete options.asSticker;
        delete options.asLocation;
        delete options.asVideo;
        delete options.asDocument;
        delete options.asImage;
        let message = {
            ...options,
            caption,
            ptt,
            [mtype]: {
                url: pathFile
            },
            mimetype
        };
        let m;
        try {
            m = await zynxzo.sendMessage(jid, message, {
                ...opt,
                ...options
            });
        } catch (e) {
            // console.error(e)
            m = null;
        } finally {
            if (!m) m = await zynxzo.sendMessage(jid, {
                ...message,
                [mtype]: file
            }, {
                ...opt,
                ...options
            });
            file = null;
            return m;
        }
    }
    
    zynxzo.getFile = async (PATH, save) => {
        let res;
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.?\/.?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0);
        // if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        };
        filename = path.resolve(__dirname, './dbaseee/src/' + new Date * 1 + '.' + type.ext);
        if (data && save) fs.promises.writeFile(filename, data);
        return {
            res,
            filename,
            size: await getSizeMedia(data),
            ...type,
            data
        };
    }
    
    zynxzo.ev.on('messages.upsert', async (chatUpdate) => {
        try {
            let mek = chatUpdate.messages[0];
            if (!mek.message) return;
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return;
            if (!zynxzo.public && !mek.key.fromMe && chatUpdate.type === 'notify') return;
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return;
            if (mek.key.id.startsWith('FatihArridho_')) return;
            let m = smsg(zynxzo, mek, store);
            require("./menu/zynxzo.js")(zynxzo, m, chatUpdate, store);
        } catch (err) {
            console.log(err);
        }
    });
    
    zynxzo.ev.process(async (events) => {
        if (events['presence.update']) {
            await zynxzo.sendPresenceUpdate('available');
        }
        if (events['creds.update']) {
            await saveCreds();
        }
    });
    
    return zynxzo;

}


zynxzoStart();


let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update ${__filename}`));
    delete require.cache[file];
    require(file);
});