const Discord = require('discord.js');
const db = require('quick.db');
const botconfig = require("./botconfig.json");
const ColorEmbed = botconfig.color;
const ms = require('parse-ms');

exports.run =  (bot, message, args) => {
        let msg = message.content.toUpperCase();
        let user = message.author || message.mentions.users.first() ;
        let gems =  db.get(`gems_${user.id}`)
        let xp = db.fetch(`xp0_${message.author.id}`);
        let scoutstat = db.fetch(`scoutstat_${message.author.id}`);
        let level = db.fetch(`level0_${message.author.id}`);
        let embed = new Discord.RichEmbed()
            .setTitle('PROFILE', message.author.displayAvatarURL)
            .addField('**User**', user)
            .addBlankField()
            .addField('**Level**', level , true)
            .addField('**XP**', xp, true)
            .addField('**Scout Stat**', scoutstat, true) .addField('**Gems**', gems + '<:Gems:584947389459333142>', true)
            .setColor(ColorEmbed)
            .setTimestamp()
            .setThumbnail(message.author.displayAvatarURL);
        message.channel.send(embed);
    }       