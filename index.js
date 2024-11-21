const { Client, GatewayIntentBits } = require("discord.js");
const token ="";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.once("ready", () => {
  console.log("Botが起動しました");
});
client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  message.reply(`あなたのメッセージ: ${message.content}`);
});
client.login(token);
