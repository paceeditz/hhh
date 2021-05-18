module.exports = {
    commands: '8ball',
    description: "measures ur pp",
    callback: (message, args, Discord) =>  {
        const member = message.mentions.users.first();
        const target = message.mentions.users.first();
        var list = [
            'Yes you will',
             'Why the fuck you asking me?',
             'Please leave me alone you cunt!',
             'No why ask? WHO SENT YOU HERE!!!',
             'Fuck off you batty fish',
             'Stop asking question just know black lives dont matter',
             'Beyond your wildest dreams!!'
            //etc 
        ];

        var rand = list[Math.floor(Math.random() * list.length)];
        if (!member) return message.channel.send(rand);
        else return message.channel.send(`${member} `+"pp size: "  +rand)
      
      

    }
}