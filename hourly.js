const Discord = require('discord.js');
const db = require('quick.db');
const ColorEmbed = '0xDF30D7';
const ms = require('parse-ms');

exports.run =  (bot, message, args) => {
        let msg = message.content.toUpperCase();
        let timeHourly = 3600000 
        let amountHourly = Math.floor (Math.random() * (5 - 1 + 1)) + 1;
        let hourly = db.fetch(`hourly_${message.author.id}`);
        if (hourly !== null && timeHourly - (Date.now() - hourly) > 0) {
            let timed = ms(timeHourly - (Date.now() - hourly));
            let embed = new Discord.RichEmbed()
            .setAuthor('Hourly', message.author.displayAvatarURL)
            .setColor(ColorEmbed)
            .addField(`Collected`, `You already collected Hourly Reward, you can comeback and collect in **${timed.hours}h ${timed.minutes}m ${timed.seconds}s**!`);
            message.channel.send(embed)
        } else {
            let embed = new Discord.RichEmbed()
            .setAuthor('Hourly', message.author.displayAvatarURL)
            .setColor(ColorEmbed)
            .setDescription('**Hourly Reward**')
            .addField('Collected', amountHourly)
            
            message.channel.send(embed)
            db.add(`gems_${message.author.id}`, amountHourly)
            db.set(`hourly_${message.author.id}`, Date.now())
    }
}