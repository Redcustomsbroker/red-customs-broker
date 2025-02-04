require('dotenv').config();
const express = require('express');
const { Configuration, OpenAIApi } = require('openai'); // Import OpenAI
const app = express();
const PORT = process.env.5000;

// Middleware to parse JSON
app.use(express.json());

// OpenAI Configuration
const configuration = new Configuration({
  apiKey: , // Add your OpenAI API key here
});
const openai = new OpenAIApi(configuration);

// Example API route for tracking
app.get('/api/tracking', (req, res) => {
  const trackingData = [
    { id: 1, status: 'In Transit', location: 'New York' },
    { id: 2, status: 'Delivered', location: 'Los Angeles' },
  ];
  res.json(trackingData);
});

// Chatbot API route
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    // Send the user's message to OpenAI
    const response = await openai.createChatCompletion({
      model: 'gpt-4', // Use GPT-4 or GPT-3.5
      messages: [{ role: 'user', content: message }],
    });

    // Extract the bot's response
    const botMessage = response.data.choices[0].message.content;

    // Send the bot's response back to the client
    res.json({ message: botMessage });
  } catch (error) {
    console.error('OpenAI Error:', error);
    res.status(500).json({ error: 'Failed to get response from AI' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
