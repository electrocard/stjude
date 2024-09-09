document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const messageForm = document.getElementById('message-form');
    const userNameInput = document.getElementById('user-name');
    const messageInput = document.getElementById('message-input');

    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const userName = userNameInput.value.trim();
        const message = messageInput.value.trim();
        
        if (userName && message) {
            const messageElement = document.createElement('p');
            messageElement.textContent = `${userName}: ${message}`;
            chatBox.appendChild(messageElement);
            
            // Faire défiler vers le bas pour voir le nouveau message
            chatBox.scrollTop = chatBox.scrollHeight;
            
            // Réinitialiser le champ de message
            messageInput.value = '';
        }
    });
});
