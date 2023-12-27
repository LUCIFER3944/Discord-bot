require('dotenv/config');
const { Client, IntentsBitField } = require('discord.js');
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// Array of quotes
const quotes = [
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Do not wait to strike till the iron is hot, but make it hot by striking.",
  "In three words I can sum up everything I've learned about life: it goes on.",
   "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "Your time is limited, don't waste it living someone else's life.",
  "Strive not to be a success, but rather to be of value.",
  "The journey of a thousand miles begins with one step.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Change your thoughts and you change your world.",
  "In the middle of difficulty lies opportunity.",
  "You miss 100% of the shots you don't take.",
  "Don't watch the clock; do what it does. Keep going.",
  "The only person you are destined to become is the person you decide to be.",
  "It always seems impossible until it's done.",
  "If you want to lift yourself up, lift up someone else.",
  "Success is stumbling from failure to failure with no loss of enthusiasm.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Life is what happens when you're busy making other plans.",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "Do not wait to strike till the iron is hot, but make it hot by striking.",
  "The best way to predict the future is to create it."
  // Add more quotes as needed
];

client.on('ready', () => {
  console.log('The bot is online!');
});

client.on('messageCreate', (message) => {
  // Check if the message is from a bot or not in the designated channel
  if (message.author.bot || message.channel.id !== process.env.CHANNEL_ID || message.content.startsWith('!')) {
    return;
  }

  // Your custom commands and responses
  if (message.content.toLowerCase() === 'hello') {
    message.reply('Hi there! How can I help you today?');
  } else if (message.content.toLowerCase() === 'goodbye') {
    message.reply('Goodbye!');
  } else if (message.content.toLowerCase() === 'quote') {
    // Shuffle the quotes array
    const shuffledQuotes = quotes.sort(() => Math.random() - 0.5);

    // Respond with a random quote from the shuffled array
    const randomQuote = shuffledQuotes[0];
    message.reply(randomQuote);
  } else {
    // Handle other commands or respond to messages as needed
    message.reply('I did not understand that command.');
  }
});

client.login(process.env.TOKEN);
