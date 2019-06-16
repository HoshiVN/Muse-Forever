const Discord = require('discord.js');
const db = require('quick.db');
const botconfig = require("./botconfig.json");
const ColorEmbed = botconfig.color;
const ms = require('parse-ms');

exports.run =  (bot, message, args) => {
        let msg = message.content.toUpperCase();
        let timeChallenge = 1800000 
        let amountChallenge = Math.floor (Math.random() * (10 - 1 + 1)) + 0;
        let challenge = db.fetch(`challenge_${message.author.id}`);
        if (challenge !== null && timeChallenge - (Date.now() - challenge) > 0) {
            let timec = ms(timeChallenge - (Date.now() - challenge));
            let embed = new Discord.RichEmbed()
            .setAuthor('Challenge Festival ', message.author.displayAvatarURL)
            .setColor(ColorEmbed)
            .addField(`Collected`, `You already collected Challenge Festival Reward, you can comeback and collect in ** ${timec.minutes}m ${timec.seconds}s**!`);
            message.channel.send(embed)
        } else {
            let embed = new Discord.RichEmbed()
            .setAuthor('Challenge Festival', message.author.displayAvatarURL)
            .setColor(ColorEmbed)
            .setDescription('**Challenge Reward**')
            .addField('Collected', amountChallenge)
            
            message.channel.send(embed)
            db.add(`gems_${message.author.id}`, amountChallenge)
            db.set(`challenge_${message.author.id}`, Date.now())
        }
} 
