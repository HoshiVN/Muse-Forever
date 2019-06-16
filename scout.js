const Discord = require('discord.js');
const db = require('quick.db');
const ColorEmbed = '0x1682EE';


exports.run =  (bot, message, args) => {
    const channel = bot.channels.get('589098559840714753');

    let msg = message.content.toUpperCase();
    let user = message.author || message.mentions.users.first() ;
    let gems =  db.get(`gems_${user.id}`)
    let xp = db.fetch(`xp1_${user.id}`);
    let curxp = xp;
    let level = db.fetch(`level1_${user.id}`)
    let scoutstat = db.fetch(`scoutstat_${message.author.id}`);
    if (gems < 5) {message.channel.send(`${user}, <:nicoicon:589038016358514698> You don't have enough gem <:Gems:584947389459333142>!`)
        } else {
            number = 2060;
            imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            db.subtract(`gems_${message.author.id}`, 5);
            db.add(`scoutstat_${message.author.id}`, 1);
            xpscout = Math.floor (Math.random() * (10 - 1 + 1)) + 1;
            db.add(`xp1_${message.author.id}`, xpscout + curxp)
            let embed = new Discord.RichEmbed()
            .setAuthor('Scout', message.author.displayAvatarURL)
            .setTitle("You has scout the **#" + imageNumber + "** card!")
            .setColor(ColorEmbed)
            .attachFiles(['../Honoka BOT/Card/' + imageNumber + '.png'])
            .setImage('attachment://' + imageNumber + '.png');
            message.channel.send(embed)
            let embed1 = new Discord.RichEmbed()
            .setAuthor('Scout', message.author.displayAvatarURL)
            .setTitle( `${user.username} has scout the **#` + imageNumber + "** card!")
            .setColor(ColorEmbed)
            .attachFiles(['../Honoka BOT/Card/' + imageNumber + '.png'])
            .setImage('attachment://' + imageNumber + '.png');
            channel.send(embed1);


        }
    }