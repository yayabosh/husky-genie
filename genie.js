const fs      = require('fs')
const Discord = require('discord.js')

const prefix    = '-'
const client    = new Discord.Client()
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}

client.once('ready', () => console.log('Husky Genie is online!'))

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return

    const commandBody = message.content.slice(prefix.length)
    const args        = commandBody.split(/ +/)
    const commandName = args.shift().toLowerCase()

    if (!client.commands.has(commandName)) return

    const command = client.commands.get(commandName)

    try {
        command.execute(message)
    } catch (error) {
        console.error(error)
        message.reply('there was an error executing that command 😐')
    }
})

client.login('NzUwMDUyMTUxMDk0NjczNTA4.X006gA.OxSbkKd4rj18freBV-eEaoMJ4Tw')