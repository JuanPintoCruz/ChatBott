document.getElementById("start-btn").addEventListener("click", function() {
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("chat-container").style.display = "block"; // Mostrar el chat

    // Saludo inicial del chatbot
    var chatMessages = document.getElementById("chat-messages");
    var welcomeMessage = document.createElement("div");
    welcomeMessage.textContent = "Bienvenido! ¿Qué operación desea realizar? (sumar, restar, multiplicar o dividir)";
    welcomeMessage.classList.add("message");
    chatMessages.appendChild(welcomeMessage);
});

document.querySelector(".chat-close").addEventListener("click", function() {
    document.getElementById("chat-container").style.display = "none"; // Ocultar el chat al hacer clic en el botón de cerrar
});

document.getElementById("send-btn").addEventListener("click", function() {
    sendMessage();
});

document.getElementById("message-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var messageText = messageInput.value.trim();
    if (messageText === "") {
        return;
    }

    var chatMessages = document.getElementById("chat-messages");
    var messageDiv = document.createElement("div");
    messageDiv.textContent = messageText;
    messageDiv.classList.add("message");
    chatMessages.appendChild(messageDiv);

    // Respuesta del chatbot basada en la operación solicitada
    var replyMessage = document.createElement("div");
    var operation = messageText.toLowerCase();
    var result;
    switch (operation) {
        case "sumar":
            result = "Ingrese los dos números que desea sumar:";
            break;
        case "restar":
            result = "Ingrese los dos números que desea restar:";
            break;
        case "multiplicar":
            result = "Ingrese los dos números que desea multiplicar:";
            break;
        case "dividir":
            result = "Ingrese los dos números que desea dividir:";
            break;
        default:
            result = "Lo siento, no entendí. Por favor, escriba 'sumar', 'restar', 'multiplicar' o 'dividir'.";
    }
    replyMessage.textContent = result;
    replyMessage.classList.add("message");
    chatMessages.appendChild(replyMessage);

    // Agregar campos de entrada para los números
    if (operation === "sumar" || operation === "restar" || operation === "multiplicar" || operation === "dividir") {
        var num1Input = document.createElement("input");
        num1Input.type = "number";
        num1Input.placeholder = "Primer número";
        num1Input.classList.add("message-input");
        chatMessages.appendChild(num1Input);

        var num2Input = document.createElement("input");
        num2Input.type = "number";
        num2Input.placeholder = "Segundo número";
        num2Input.classList.add("message-input");
        chatMessages.appendChild(num2Input);

        // Agregar botón para enviar los números
        var sendNumbersButton = document.createElement("button");
        sendNumbersButton.textContent = "Enviar";
        sendNumbersButton.classList.add("message-input");
        chatMessages.appendChild(sendNumbersButton);

        sendNumbersButton.addEventListener("click", function() {
            var num1 = parseFloat(num1Input.value);
            var num2 = parseFloat(num2Input.value);
            var operationResult;
            switch (operation) {
                case "sumar":
                    operationResult = num1 + num2;
                    break;
                case "restar":
                    operationResult = num1 - num2;
                    break;
                case "multiplicar":
                    operationResult = num1 * num2;
                    break;
                case "dividir":
                    if (num2 !== 0) {
                        operationResult = num1 / num2;
                    } else {
                        operationResult = "Error: No se puede dividir por cero.";
                    }
                    break;
            }
            var resultMessage = document.createElement("div");
            resultMessage.textContent = "El resultado es: " + operationResult;
            resultMessage.classList.add("message");
            chatMessages.appendChild(resultMessage);
        });
    }

    messageInput.value = "";
    messageInput.focus();
}