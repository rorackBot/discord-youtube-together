const Discord = require('discord.js');
const client = new Discord.Client();
const DiscordTogether = require('discord-together');

client.discordTogether = new DiscordTogether(client);

client.on('message', async message => {
        if (message.content.startsWith(`youtube`)) {
            if(message.member.voice.channel) {
                client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
                    return message.channel.send(`${invite.code}`);
                });
            };
        };
});

client.on('token');