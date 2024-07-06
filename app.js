const { App } = require("@slack/bolt");
require("dotenv").config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

// Listens to incoming messages that contain "hello"
app.message("hello", async ({ message, say }) => {
  await say(`Hey there <@${message.user}>!`);
});

// Listens for a slash command called "/ping"
app.command("/ping", async ({ command, ack, respond }) => {
  // Acknowledge command request
  await ack();

  await respond("Pong! 🏓");
});

(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Bolt app is running!");
})();
