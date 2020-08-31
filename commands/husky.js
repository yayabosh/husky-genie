const fetch                 = require('node-fetch')
const { MessageAttachment } = require('discord.js')

module.exports = {
    name: 'husky',
    execute(message) {
        fetch('https://dog.ceo/api/breed/husky/images/random')
            .then(res => res.json())
            .then(json => {
                const attachment = new MessageAttachment(json.message)
                message.channel.send(attachment)
            })
    }
}