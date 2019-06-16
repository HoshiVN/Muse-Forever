const Discord = require('discord.js');
const db = require('quick.db');
const ColorEmbed = '0xDF30D7';
const ms = require('parse-ms');

exports.run =  (bot, message, args) => {
        let msg = message.content.toUpperCase();

        let timeMeley = 600000 
        let amountMeley = Math.floor (Math.random() * (3 - 1 + 1)) + 0;
        let meley = db.fetch(`meley_${message.author.id}`);
        if (meley !== null && timeMeley - (Date.now() - meley) > 0) {
            let timeml = ms(timeMeley - (Date.now() - meley));
            let embed = new Discord.RichEmbed()
            .setAuthor('Meley Festival ', message.author.displayAvatarURL)
            .setColor(ColorEmbed)
            .addField(`Collected`, `You already collected Meley Festival Reward, you can comeback and collect in ** ${timeml.minutes}m ${timeml.seconds}s**!`);
            message.channel.send(embed)
        } else {
            let embed = new Discord.RichEmbed()
            .setAuthor('Meley Festival', message.author.displayAvatarURL)
            .setColor(ColorEmbed)
            .setDescription('**Meley Reward**')
            .addField('Collected', amountMeley)
            
            message.channel.send(embed)
            db.add(`gems_${message.author.id}`, amountMeley)
            db.set(`meley_${message.author.id}`, Date.now())
        }
} 
