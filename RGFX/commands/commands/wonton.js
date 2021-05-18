module.exports = {
    commands: 'wonton',
    description: "measures ur pp",
    callback: (message, args, Discord) =>  {
        const member = message.mentions.users.first();
        const target = message.mentions.users.first();
        var list = [
            'whos that he sounds unknown',
            //etc 
        ];

        var rand = list[Math.floor(Math.random() * list.length)];
        if (!member) return message.channel.send(rand);
        else return message.channel.send(`${member} `+"pp size: "  +rand)
      
      

    }
}