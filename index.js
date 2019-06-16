const token = 'NTg4MzA5MzkyMDQzMTQ3Mjc2.XQDR-A.ECAE6VNSTiUp9GlGMVheKq6BcKs';
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const ms = require('parse-ms');
const prefix = '.';
const db = require('quick.db');


bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message => {

    let user = message.mentions.users.first() || message.author;
    let msg = message.content.toUpperCase();
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();
    let ColorEmbed = '0xDF30D7';
    
    if (message.author.bot) return;
    if (!msg.startsWith(prefix)) return;

    try {
        let commandFile = require(`./Command/${cmd}.js`);
        commandFile.run(bot, message, args);
    } catch(e) {
        console.log(e.message);
    } finally {
        console.log(`${message.author.username} ran the command ${cmd}`)
    }
    let xp0 = db.fetch(`xp0_${user.id}`);
    let level0 = db.fetch(`level0_${user.id}`)
    let nxtR = db.fetch(`nxtR_${user.id}`);

    if (!xp0) {
        xp0 = {
            xp: 0,
            level: 1
        }
    }
    
    let nxtLvl = level0 * 200;
    let gemsreward = Math.floor (Math.random() * 10 ) + 1;
    let curxp = xp0;
    let curlvl = level0;
    
    
    if (nxtLvl <= xp0){
        level0 = db.add(`level0_${user.id}`, curlvl + 1);
        console.log(`${user} Level is ${level0} and xp is ${xp0}`);
        let lvlup = new Discord.RichEmbed()
        .setTitle("Level Up!")
        .setColor(ColorEmbed)
        .addField("New Level", curlvl + 1)
        .setFooter("You get " + gemsreward + " as reward!")
        .setTimestamp();
        message.channel.send(lvlup)
        db.add(`gems_${user.id}`, gemsreward)
    }
    
    
    
    
   
        
})
bot.login(token);