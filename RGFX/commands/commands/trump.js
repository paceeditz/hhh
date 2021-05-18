const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    commands: 'trump',
    minArgs: 1,
    expectedArgs: ['Text to Trump tweet.'],
    callback: async (message, arguments, text, client) => {
        if (message.author.bot === false) {
            const result = arguments.join('+')
            const url = `https://api.no-api-key.com/api/v2/trump?message=${result}`;

            const embed = new MessageEmbed().setImage(url).setColor("RANDOM");

            await message.channel.send(embed);
        }

    }
}