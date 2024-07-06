import Slack from "@slack/bolt";
import dotenv from "dotenv";

dotenv.config();

const app = new Slack.App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

const blocks = [
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: "*BrainStorm* ⚡",
    },
  },
  {
    type: "divider",
  },
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: "Brainstorm!",
    },
  },
  {
    type: "actions",
    elements: [
      {
        type: "button",
        text: {
          type: "plain_text",
          text: "⚡",
          emoji: true,
        },
        value: "lightning_1",
        action_id: "lightning_button_1",
      },
    ],
  },
];

await app.client.chat.postMessage({
  token: process.env.SLACK_BOT_TOKEN,
  channel: process.env.SLACK_CHANNEL,
  text: "this is a test",
  blocks: blocks,
});
