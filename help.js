const Discord = require('discord.js');
const db = require('quick.db');
const fs = require('fs');
const prefix = '.';
const ColorEmbed = '0x1682EE';
 exports.run =  (bot, message, args) => {
     if (!args[0]) {
        let embed = new Discord.RichEmbed()
        .setAuthor('Hourly', message.author.displayAvatarURL)
        .setColor(ColorEmbed)
        .addField('**Main Command**', "`.scout` `.idolize` `.daily` `.hourly` `.profile` `.gems` `.event`")
        .addField('Game command', "`.dice`")
        .addField('Other Command', "`.help`")
        .setFooter('Press .help <command> to know more!', message.author.displayAvatarURL);
        message.channel.send(embed)
     } else {
         switch (args[0]) {
             case "scout": {
             let embedscout = new Discord.RichEmbed()
             .setTitle('.scout')
             .setColor(ColorEmbed)
             .setDescription('Scout a new card! Lose 5 gems and get a new girl!');
             message.channel.send(embedscout);
             break; }
         
            case "idolize": {
            let embedidolize = new Discord.RichEmbed()
            .setTitle('.idolize')
            .setColor(ColorEmbed)
            .setDescription('Idolize your scouted card! Lose 50 gems and get a new beautiful girl!');
            message.channel.send(embedidolize);
            break; }

            case "daily": {
            let embeddaily = new Discord.RichEmbed()
            .setTitle('.daily')
            .setColor(ColorEmbed)
            .setDescription('Get random 10 ~ 20 gems every 24 hours');
             
            message.channel.send(embeddaily);
            break; }


            case "hourly": {
            let embedhourly = new Discord.RichEmbed()
            .setTitle('.hourly')
            .setColor(ColorEmbed)
            .setDescription('Get random 1~5 gems every 60 minutes!');
            message.channel.send(embedhourly);
            break; }

            case "profile": {
            let embedprofile = new Discord.RichEmbed()
            .setTitle('.profile')
            .setColor(ColorEmbed)
            .setDescription('See your profile!');
            message.channel.send(embedprofile);
            break; }

            case "gems": {
            let embedg = new Discord.RichEmbed()
            .setTitle('.gems')
            .setColor(ColorEmbed)
            .setDescription('See your gems');
            message.channel.send(embedg);
            break; }

            case "event":{
            let embedgem = new Discord.RichEmbed()
            .setTitle('.event')
            .setColor(ColorEmbed)
            .setDescription('Join event anh get lots of gems!!!!');
            message.channel.send(embedgem);
            break;}

            case "dice": {
            let embedd = new Discord.RichEmbed()
            .setTitle('.dice <dice number> <gems>')
            .setColor(ColorEmbed)
            .setDescription('Guess a dice number! If you win, get random 1~<gems>, else, lose your <gems>');
            message.channel.send(embedd);
            break;
            }

         }
     }
 }