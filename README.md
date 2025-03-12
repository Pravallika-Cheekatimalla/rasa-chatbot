Chatbot with Rasa Backend

This is a simple web-based chatbot interface that connects to a Rasa backend. The chatbot allows users to send messages, receive responses from Rasa, and manage the chat window.

Features

- Open and close the chat window dynamically.

- Send user messages and display them in the chat UI.

- Fetch responses from a Rasa chatbot backend.

- Display timestamps for each message.

Prerequisites

- Ensure you have Rasa installed and running.

- A web server to serve the frontend (optional for local development).

Project Structure

rasa-chatbot/
├── actions.py             # Custom actions for the bot
├── config.yml             # Rasa pipeline and policies configuration
├── credentials.yml        # Third-party integration credentials
├── data/
│   ├── nlu.yml            # Intent and training data
│   ├── rules.yml          # Conversation rules
│   ├── stories.yml        # Dialogue training data
├── domain.yml             # Define intents, entities, and responses
├── endpoints.yml          # Endpoint configurations
├── index.html      # Chat UI structure
├── style.css       # Chat UI styling
├── script.js       # JavaScript logic for chat interactions
├── README.md       # Project documentation

Setup and Usage

1. Start the Rasa Server

Ensure your Rasa chatbot server is running:

rasa run --enable-api

This will start the Rasa server at http://localhost:5005.

2. Open the Chatbot UI

- Open index.html in a web browser.

- Click the chat button to open the chat window.
 
- Type a message and press Enter to send.

3. Sending Messages

The sendMessage() function in script.js sends user input to the Rasa backend via a REST API request and displays the response.

4. Close the Chat

Click the close button to hide the chat window.

API Endpoint

- Endpoint: http://localhost:5005/webhooks/rest/webhook

- Method: POST

- Payload: { "message": "your message" }

- Response: { "text": "bot's response" }

Example Request and Response

// Request:
{
  "message": "Hello"
}

// Response:
[
  {
    "text": "Hi! How can I help you?"
  }
]

Customization

- Modify style.css to change the chatbot appearance.

- Update script.js to add more features like avatars or animations.

- Adjust Rasa responses in your Rasa training data.

Troubleshooting

- Ensure Rasa is running on localhost:5005.

- Check browser console for any JavaScript errors.



