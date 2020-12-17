module.exports = {
    name: "ping",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        const aA = await message.channel.send(`PInging....`);

        aA.edit(`Pong!
Latency is ${Math.floor(aA.createdTimestamp - message.createdTimestamp)}ms
API Latency is ${Math.round(client.ping)}ms`)
    } 
}