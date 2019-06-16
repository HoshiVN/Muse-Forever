const Discord = require('discord.js');
const db = require('quick.db');
const ColorEmbed = '0x1682EE';

exports.run =  (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setTitle('**EVENT**')
        .setColor(ColorEmbed)
        .setThumbnail('https://66.media.tumblr.com/eb622eb223a8b84212bf7736671b07f2/https://d2jcw5q7j4vmo4.cloudfront.net/WGFyx2PNQkEYFxGtSodPpifBpFIu7nqlikBIXjHdrh9XZfUge35q5lwZAD7mx07NXvpv=w300.')
        .addField("Challenge Festival Round 18", "Press `.challenge` every 30 minutes to have chance get gems! Time left 13h 15/6")
        .addField("Round 16 MEDLEY FESTIVAL", "Press `.meley` every 10 minutes to have chance get gems! Time left: 15h 19/6")
        .setImage("https://cdn.discordapp.com/attachments/536546154364534794/589030700091572224/Event1.png");
        message.channel.send(embed);
    }