//-----------------------------------------------------------------//
//-------------The main file required to run the bot---------------//
//------------------Made By NightcoreATDZO#3550--------------------//
//---------------------------OtakuBot------------------------------//
//-----------------------------------------------------------------//

const {Collection, Client, Discord} = require('discord.js')
const config = require('./config.json');
const fs = require('fs');
const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
});

module.exports = client;

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

// ---- [ Check steps1.html ] ---- //
// ----- [ Command | Event ] ----- //
// ------------REQUIRED------------//

["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login(config.token)