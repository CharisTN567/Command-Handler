const { DiscordAPIError } = require("discord.js")

const Discord = require('discord.js')

module.exports = {
    name: "help",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        const aA = message.author.username

        const aB = new Discord.MessageEmbed()
        .setTitle("Command for me")
        .setColor("RANDOM")
        .setDescription(aA + " what you need")
        .addField('command', '`!help`', true)
        .addField('Command', '`!help`', true)

        message.channel.send(aB)
    }
}