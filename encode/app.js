const glob = require("glob")
const fs = require('fs-extra')
const { obfuscate } = require('javascript-obfuscator');
const config = {
    optionsPreset: 'default',
    splitStrings: true,
    splitStringsChunkLength: 3,
    debugProtection: true,
    disableConsoleOutput: true,
    debugProtectionInterval: true,
}


start()

function start() {

    console.log('copy folder')

    fs.rmdirSync('js', { recursive: true })

    fs.mkdirSync('js')

    glob('../client/js/**/*.js', null, function (er, files) {
        files.forEach(f => {

            console.log(f)

            const encryptData = obfuscate(fs.readFileSync(`./${f}`, 'utf8'), config).getObfuscatedCode()

            fs.writeFileSync(`./js/${f.split('/').pop()}`, encryptData)

        })

        console.log('encrypt finish!')

    })

}