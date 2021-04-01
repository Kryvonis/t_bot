/* eslint-disable prefer-arrow-callback */
import { config } from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';

const dev = process.env.NODE_ENV !== 'production';

/**
 * This example demonstrates setting up webhook
 * on the Heroku platform.
 */
const TOKEN = process.env.TELEGRAM_TOKEN || '551431067:AAHcuQ2u0RFykDYgHYRz9huelryCsHTx9to';
const options = {
  webHook: {
    port: process.env.PORT,
  },
};
const url = process.env.APP_URL || 'https://<app-name>.herokuapp.com:443';
const bot = new TelegramBot(TOKEN, options as any);

// This informs the Telegram servers of the new webhook.
// Note: we do not need to pass in the cert, as it already provided
bot.setWebHook(`${url}/bot${TOKEN}`);

// Just to ping!
bot.on('message', function onMessage(msg) {
  bot.sendMessage(msg.chat.id, 'I am alive on Heroku!');
});