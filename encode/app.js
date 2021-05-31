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

async function start() {

    console.log('copy folder')

    glob('js/**/*.js', null, function (er, files) {
        files.forEach(f => {

            console.log(f)

            const encryptData = obfuscate(fs.readFileSync(`./${f}`, 'utf8'), config).getObfuscatedCode()

            fs.writeFileSync(`./${f}`, encryptData)

        })

        console.log('encrypt finish!')

    })

}