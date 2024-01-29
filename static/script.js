function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userText = inputField.value;
    inputField.value = '';
    addMessageToChat('User', userText);

    fetch('/send_message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userText }),
    })
    .then(response => response.json())
    .then(data => addMessageToChat('Bot', data.reply));
}

function addMessageToChat(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const msgDiv = document.createElement('div');
    msgDiv.textContent = `${sender}: ${message}`;
    chatBox.appendChild(msgDiv);
}
