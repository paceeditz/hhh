module.exports = {
    commands: 'payment',
    description: "measures ur pp",
    callback: (message, args, Discord) =>  {
        const member = message.mentions.users.first();
        const target = message.mentions.users.first();
        var list = [
            'Please follow the steps, **SEND THE MONEY TO THIS PAYPAL AND THIS PAYPAL ONLY rakishgfx@gmail.com** Make sure to send friends and family Please provide a screenshot when you have sent the money https://cdn.discordapp.com/attachments/828874700226166785/839569219891888128/unknown.png https://cdn.discordapp.com/attachments/828874700226166785/839569284686807050/unknown.png ',
            //etc 
        ];

        var rand = list[Math.floor(Math.random() * list.length)];
        if (!member) return message.channel.send(rand);
        else return message.channel.send(`${member} `+"pp size: "  +rand)
      
      

    }
}