const Discord          = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'help',
    execute(message) {
        const help = new Discord.MessageEmbed()
            .setColor('#5C2686')
            .setTitle('Husky Genie')
            .setDescription('Blessing the server with photos of huskies!')
            .setThumbnail(
              'https://www.clipartkey.com/mpngs/m/262-2623050_washington-huskies-logo-png-university-of-washington-husky.png'
            )
            .setImage(
              'https://static.seattletimes.com/wp-content/uploads/2018/03/dubs_tzr-780x501.jpg'
            )
            .addFields(
              {
                name: 'Commands',
                value: '`-husky` delivers a photo of a husky\n`-help` shows help and information about Husky Genie'
              }
            )

        message.channel.send(help)
    }
}