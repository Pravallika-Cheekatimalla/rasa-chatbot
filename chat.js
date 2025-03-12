// Open the chat box
function openChat() {
  document.querySelector('.chat-box').style.display = 'flex'; // Show the chat box
  document.querySelector('.chat-button').style.display = 'none'; // Hide the button
}

// Close the chat box
function closeChat() {
  document.querySelector('.chat-box').style.display = 'none'; // Hide the chat box
  document.querySelector('.chat-button').style.display = 'block'; // Show the button again
}

// Send message logic
function sendMessage() {
  let userInput = document.getElementById('user_input').value;
  
  if (userInput.trim() === "") return; // Ignore empty input

  // Add the user's message to the chat
  let userMessage = document.createElement('div');
  userMessage.classList.add('chat-box-body-send');
  userMessage.innerHTML = `<p>${userInput}</p><span>${getCurrentTime()}</span>`;
  document.getElementById('messages').appendChild(userMessage);

  // Clear the input field after sending the message
  document.getElementById('user_input').value = "";

  // Send message to Rasa backend
  fetch('http://localhost:5005/webhooks/rest/webhook', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: userInput })
  })
  .then(response => response.json())
  .then(data => {
    data.forEach(response => {
      let botResponse = document.createElement('div');
      botResponse.classList.add('chat-box-body-receive');
      botResponse.innerHTML = `<p>${response.text}</p><span>${getCurrentTime()}</span>`;
      document.getElementById('messages').appendChild(botResponse);
    });
  })
  .catch(error => console.error("Error:", error));
}

// Function to get the current time in HH:MM format
function getCurrentTime() {
  let now = new Date();
  return now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
}
