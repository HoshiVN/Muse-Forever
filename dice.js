const Discord = require('discord.js');
const db = require('quick.db');
const ColorEmbed = '0x1682EE';
const ms = require('parse-ms');

exports.run =  (bot, message, args) => {
    let msg = message.content.toUpperCase();
    let user = message.author || message.mentions.users.first() ;
    let gems =  db.get(`gems_${user.id}`);
  if (!args[0] || args[0] < 2 || args[0] > 12 || !args[1] ) {message.channel.send('<:nicoicon:589038016358514698> Please send right number! ')
} else {
    if (gems < args[1] || args[1] < 1) {message.channel.send("<:nicoicon:589038016358514698> You don't have enough gems, Or you have to bet at least 1 gems! You only have " + gems + " Gem(s)!")} else { 
    let dicenumber = Math.floor (Math.random() * 12) + 2;
    if (args[0] == dicenumber) {
        let randomrewarddice2 = Math.floor (Math.random() * args[1]) + 1;
        db.add(`gems_${message.author.id}`, randomrewarddice2) 
        message.channel.send(`${user}, Your dice is **` + dicenumber + `** and you get **` + randomrewarddice2 + `** <:Gems:584947389459333142>!`)
        } else {
            db.subtract(`gems_${user.id}`, args[1])
            message.channel.send(`${user}, Your dice is **` + dicenumber + `** and you lose ` + args[1] + `<:Gems:584947389459333142>!`)
        }
    
        
    }
}
}