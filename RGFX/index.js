
const fs = require('fs')
const path = require('path')

const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const loadCommands = require('./commands/load-commands')
const command = require('./command')
const prefix = require('./config.json');
const keepAlive = require("./keepAlive");
const canvacord = require("canvacord");
const snpm = require('sakuranpm');
const moment = require("moment");
const fetch = require('node-fetch');
const cheerio = require("cheerio");
const animeQuotes = require('animequotes');
const db = require('quick.db');
const roleClaim = require('./commands/role-claim')
const poll = require('./commands/poll')

client.once('ready', async () => {
    console.log('[✅ ] EDITZ bot is online!');
    client.user.setActivity(`watching rakish sleep`, { type: "WATCHING"})
        .then(presense => console.log (`Activity set to ${presense.activities[0].name}`))
        .catch(console.error);


  loadCommands(client)
  roleClaim(client)
  poll(client)
})
 client.on('message', message => {
  const db = require('quick.db')
  if (message.channel.type === 'dm' || message.author.bot) return
  db.add(`messages_${message.guild.id}_${message.author.id}`, 1)
  let fetchMessages = db.fetch(`messages_${message.guild.id}_${message.author.id}`)

  let messages
  if (fetchMessages == 25) messages = 25
  if (fetchMessages == 50) messages = 50
  if (fetchMessages == 100) messages = 100
  if (fetchMessages == 300) messages = 300
  if (fetchMessages == 500) messages = 500
  if (fetchMessages == 800) messages = 800
  if (fetchMessages == 1300) messages = 1300
  if (fetchMessages == 1700) messages = 1700
  if (fetchMessages == 2500) messages = 2500
  if (fetchMessages == 4000) messages = 4000
  if (fetchMessages == 5100) messages = 5100
  if (fetchMessages == 6300) messages = 6300
  if (fetchMessages == 7700) messages = 7700
  if (fetchMessages == 9000) messages = 9000
  if (fetchMessages == 11100) messages = 11100
  if (fetchMessages == 13000) messages = 13000
  if (fetchMessages == 16000) messages = 16000

  if(!isNaN(messages)) {
    db.add(`level_${message.guild.id}_${message.author.id}`, 1)
    let fetchLevel = db.fetch(`level_${message.guild.id}_${message.author.id}`)

    message.channel.send(`<@${message.author.id}> leveled up to ${fetchLevel}!`)
  }
 }
)

//triggered
client.on("message", async (message) => {
    if (message.author.bot) return;
    if (message.content === "^triggered") {
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send(attachment);
    }
});
 
//sniper
  client.on('message', message => {
    const user = message.author.id
    if (message.content === '^tiktok'){
      message.author.send(`
Tiktok Viewbot
https://ketuy.com/`)
  }
})

//pinger
  client.on('message', message => {
    const user = message.author.id
    if (message.content === '^pinger'){
      message.author.send(`
Custom Pinger
https://mega.nz/file/s7w3TSpY#srfUQCztZ0t6S80JK_Zi94fhKZW-SaC7DCL4ikttddkg`)
  }
})


// ban
command(client, 'ban', message => {
  const { member, mentions } = message

  const tag = `<@${member.id}>`

  if (
  member.hasPermission('ADMINISTATOR') ||
  member.hasPermission('BAN_MEMBERS')
  ) {
    const target = mentions.users.first()
    if (target) { 
      const targetMember = message.guild.members.cache.get(target.id)
      targetMember.ban()
      message.channel.send(`you just threw your coom socks on this members face :3`)
            message.channel.send("https://media1.giphy.com/media/U71eMhPzj5XYcWyTDx/giphy.mp4")
    } else {
      message.channel.send(`${tag} Who would you like to ban?`)

    }
  } else {
        message.channel.send(
          `${tag}You do not have permission to use this command dumdum`
    )
  }
})

// kick
command(client, 'kick', message => {
  const { member, mentions } = message

  const tag = `<@${member.id}>`

  if (
  member.hasPermission('ADMINISTATOR') ||
  member.hasPermission('KICK_MEMBERS')
  ) {
    const target = mentions.users.first()
    if (target) { 
      const targetMember = message.guild.members.cache.get(target.id)
      targetMember.kick()
      message.channel.send(`Damn that felt good!`)
            message.channel.send("https://media.discordapp.net/attachments/810033804931498004/812801397652586546/14722-dragon-ball-z-gogeta-flip-kick_1.gif")
    } else {
      message.channel.send(`${tag} What gobby cunt is getting kicked?`)

    }
  } else {
        message.channel.send(
          `${tag}You do not have permission to use this command`
    )
  }
})


// help
command(client, 'prices', (message) => {
  const { guild } = message

  const { name } = guild
  const icon = guild.iconURL()

  const embed = new Discord.MessageEmbed()
    .setTitle(`Server info for "${name}"`)
    .setThumbnail(icon)
    .setColor('RANDOM')
    .addFields(
      {
        name: '┏► animated',
        value: `𝐒𝐈𝐌𝐏𝐋𝐄 𝐃𝐈𝐒𝐂𝐎𝐑𝐃 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 𝐏𝐈𝐂𝐓𝐔𝐑𝐄 - £𝟑 𝐎𝐑 (𝟏𝟓 𝐈𝐍𝐕𝐈𝐓𝐄𝐒) 𝐀𝐃𝐕𝐀𝐍𝐂𝐄𝐃 𝐃𝐈𝐒𝐂𝐎𝐑𝐃 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 𝐏𝐈𝐂𝐓𝐔𝐑𝐄 - £𝟓 (𝟐𝟎 𝐈𝐍𝐕𝐈𝐓𝐄𝐒) 𝐒𝐈𝐌𝐏𝐋𝐄 𝐁𝐀𝐍𝐍𝐄𝐑 - £𝟏𝟎 (𝟏𝟓 𝐈𝐍𝐕𝐈𝐓𝐄𝐒) 𝐀𝐃𝐕𝐀𝐍𝐂𝐄𝐃 𝐁𝐀𝐍𝐍𝐄𝐑 - £𝟏𝟓 (𝟑𝟎 𝐈𝐍𝐕𝐈𝐓𝐄𝐒)`,
      },
      {
        name: '┠► NON - ANIMATED GRAPHICS',
        value: '𝐒𝐈𝐌𝐏𝐋𝐄 𝐃𝐈𝐒𝐂𝐎𝐑𝐃 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 𝐏𝐈𝐂𝐓𝐔𝐑𝐄 - £𝟐 (𝟏𝟎 𝐈𝐍𝐕𝐈𝐓𝐄𝐒)𝐀𝐃𝐕𝐀𝐍𝐂𝐄𝐃 𝐃𝐈𝐒𝐂𝐎𝐑𝐃 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 𝐏𝐈𝐂𝐓𝐔𝐑𝐄 - £𝟑 (𝟏𝟓 𝐈𝐍𝐕𝐈𝐓𝐄𝐒)𝐒𝐈𝐌𝐏𝐋𝐄 𝐁𝐀𝐍𝐍𝐄𝐑 - £𝟓 (𝟏𝟎 𝐈𝐍𝐕𝐈𝐓𝐄𝐒)𝐀𝐃𝐕𝐀𝐍𝐂𝐄𝐃 𝐁𝐀𝐍𝐍𝐄𝐑 - £𝟕 (𝟐𝟎 𝐈𝐍𝐕𝐈𝐓𝐄𝐒)',
      },
      {
        name: '┗► FIVEM BUNDLE - £35',
        value: '𝐅𝐈𝐕𝐄𝐌 𝐂𝐋𝐎𝐓𝐇𝐈𝐍𝐆 (𝐍𝐎 𝐂𝐄𝐑𝐓𝐀𝐈𝐍 𝐒𝐄𝐓 𝐏𝐑𝐈𝐂𝐄𝐒 𝐂𝐑𝐄𝐀𝐓𝐄 𝐀 𝐓𝐈𝐂𝐊𝐄𝐓)',
      }, 
    )

  message.channel.send(embed)
})


// Embed


command(client, 'embed', (message) => {
  const embed = new Discord.MessageEmbed()
  .setTitle('Example Embed')
  .setAuthor(message.author.username)
  .setFooter('George Floyds pavement')
  .setColor('RANDOM')
  .addFields({
      name: 'Field 1',
      value: 'Example',
      inline: true,
    },
    {
      name: 'Field 2',
      value: 'Example',
      inline: true,
    },
    {
      name: 'Field 3',
      value: 'Example',
      inline: true,
    },
    {
      name: 'Field 4',
      value: 'Example',
    })

message.channel.send(embed)
})

// end of embed
//info
 command(client, 'info', (message) => {
    const { guild } = message

    const { name, region, memberCount, owner, afkTimeout } = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info for "${name}"`)
      .setThumbnail(icon)
      .setColor('RANDOM')
      .addFields(
        {
          name: 'Region',
          value: region,
        },
        {
          name: 'Members',
          value: memberCount,
        },
        {
          name: 'Owner',
          value: owner.user.tag,
        },
        {
          name: 'AFK Timeout',
          value: afkTimeout / 60,
        }
      )

    message.channel.send(embed)
  })

// end of info
// embed command
// end of embed command

command(client, 'rules', (message) => {
  const { guild } = message

  const { name } = guild
  const icon = guild.iconURL()

  const embed = new Discord.MessageEmbed()
    .setTitle(`George Floyd's rules`)
    .setThumbnail(icon)
    .setColor('#000000')
    .setDescription(`1. Posting any type of harmful links/files will result in a permanent ban.
2. Scamming will result in a permanent ban.
3. No advertising of your own discord server as it will result in a permanent ban.
4. No posting spam or anyone's personal information without consent.
5. Do not tag people repeatedly or unnecessarily
6. Don't speak anything related to 𝕔𝕒𝕣𝕕𝕚𝕟𝕘/𝕔𝕣𝕒𝕔𝕜𝕚𝕟𝕘/𝕙𝕒𝕔𝕜𝕚𝕟𝕘 or it will result to a warn !
7. Be respectful
8. Mentioning the moderators or a specific person without proper reason is prohibited.
9. Post content in the correct channels.
10. Don't post someone's personal information without permission.
11. Listen to what Staff says.
12. You are not allowed to promote anything.
13. Don't trade any accounts/stuff in my server!
14. No dms advertising
15. Follow the discord terms of service: https://discord.com/terms `)

  message.channel.send(embed)
})

//Purge command
command(client, ['nuke'], message => {
  if (message.member.hasPermission('ADMINISTRATOR')) {
    message.channel.messages.fetch().then((results) => {
      message.channel.bulkDelete(results)

    })
  }
})
command(client, ['purge'], message => {
  if (message.member.hasPermission('ADMINISTRATOR')) {
    message.channel.messages.fetch().then((results) => {
      message.channel.bulkDelete(results)

    })
  }
})
keepAlive();

client.login(config.token)
