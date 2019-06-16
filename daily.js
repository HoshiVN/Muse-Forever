const Discord = require('discord.js');
const db = require('quick.db');
const botconfig = require("./botconfig.json");
const ColorEmbed = botconfig.color;
const ms = require('parse-ms');

exports.run =  (bot, message, args) => {
    let msg = message.content.toUpperCase();
    let timeDaily = 86400000 
    let amountDaily = Math.floor (Math.random() * (20 - 1 + 1)) + 5;
    let daily = db.fetch(`daily_${message.author.id}`);
    if (daily !== null && timeDaily - (Date.now() - daily) > 0) {
        let timed = ms(timeDaily - (Date.now() - daily));
        let embed = new Discord.RichEmbed()
        .setAuthor('Daily', message.author.displayAvatarURL)
        .setColor(ColorEmbed)
        .addField(`Collected`, `You already collected Daily Reward, you can comeback and collect in **${timed.hours}h ${timed.minutes}m ${timed.seconds}s**!`);
        message.channel.send(embed)
    } else {
        let embed = new Discord.RichEmbed()
        .setAuthor('Daily', message.author.displayAvatarURL)
        .setColor(ColorEmbed)
        .setDescription('**Daily Reward**')
        .addField('Collected', amountDaily)
        
        message.channel.send(embed)
        db.add(`gems_${message.author.id}`, amountDaily)
        db.set(`daily_${message.author.id}`, Date.now())
    }
    }