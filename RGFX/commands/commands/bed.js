const canvacord = require('canvacord')
const Canvas = require ('canvacord')
const discord = require('discord.js')

module.exports = {
    commands: ['bed', 'cama'],
    example: '[@user]',
    minArgs: 1,
    callback: async(message,args,text,client,errorembed) => {
        let user1 = message.mentions.users.first()
        if (!user1) return message.reply('Invalid User')
        let user2 = message.author
        let avatar1 = user1.displayAvatarURL({format: 'png', dynamic: false})
        let avatar2 = user2.displayAvatarURL({format: 'png', dynamic: false})
        let face = await canvacord.Canvas.bed(avatar2, avatar1)
        let attachment = new discord.MessageAttachment(face, "bed.png");
        return message.channel.send(attachment);
    }
}