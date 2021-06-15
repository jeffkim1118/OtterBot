require("dotenv").config();
const open = require('open');

const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "$";

(function wakeup() {
  require('open')('https://otterbot-1.herokuapp.com/', (err) => {
    if (err) throw err;
    console.log('Woke up!');
    setTimeout(wakeup, 1000); //29m
  });
})()

client.on('ready', () => {
  console.log('I am online!');
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
  if (!channel) return;
  channel.send(`welcome to the Otter's server, ${member}`);
});


client.on('message', async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)){
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);  

    if(CMD_NAME === "ping"){
      return message.reply('pong!')};

    if(CMD_NAME === "kick"){
      if (!message.member.hasPermission('KICK_MEMBERS'))
        return message.reply('You do not have permission to kick!')
      if(args.length===0)
        return message.reply('Please provide an ID');
        const member = message.guild.members.cache.get(args[0]);
        if(member){
          member
          .kick()
          .then((member) => message.channel.send(`${member} was kicked.`))
          .catch((err) => message.channel.send('I cannot kick that user!('));
        } else {
          message.channel.send('Invalid member');
        }

    } else if (CMD_NAME === "ban"){
      if (!message.member.hasPermission('BAN_MEMBERS'))
        return message.reply('You do not have permission to Ban!');
      if(args.length===0) return message.reply('Please provide an ID');

      try {
        const user = await message.guild.member.ban(args[0]);
        message.channel.send("User was banned successfully");
      } catch(err) {
        message.channel.send("User was not found!");
      } 
    } 

  }
});


client.login(process.env.TOKEN);