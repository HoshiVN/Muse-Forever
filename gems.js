const Discord = require('discord.js');
const db = require('quick.db');
const fs = require('fs');
const prefix = '.';
const ColorEmbed = '0xDF30D7';
 exports.run =  (bot, message, args) => {
    let msg = message.content.toUpperCase();
    let user = message.author || message.mentions.users.first() ;
    let gems =  db.get(`gems_${user.id}`)
    if (gems === null) gems = 0;
    let embed = new Discord.RichEmbed()
        .setTitle('Gems')
        .addField('User', user)
        .setColor(ColorEmbed)
        .setThumbnail('https://66.media.tumblr.com/eb622eb223a8b84212bf7736671b07f2/tumblr_ozhf0gsFul1ubcx5fo2_250.png')
        .setFooter('Happy Birthday, Mari Ohara (13/6)')
        .addField('Your Gems', gems + '<:Gems:584947389459333142>');
    message.channel.send(embed);
    
}
