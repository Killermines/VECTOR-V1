require("./database/module")

//GLOBAL PAYMENT
global.storename = "VECTOR"
global.dana = "2348138611926"
global.qris = "-"


// GLOBAL SETTING
global.owner = "2348138611926"
global.namabot = "VECTOR V1"
global.nomorbot = "2347041039367"
global.namaCreator = "KIMG FABLE"
global.autoJoin = false
global.antilink = false
global.versisc = '3.2'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://l.top4top.io/p_32188bbq00.jpg''
global.packname = "VECTOR ™"
global.author = "FABLE"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})