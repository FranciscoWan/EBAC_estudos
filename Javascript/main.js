const form = document.getElementById("form")
const button = document.getElementById("button")

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtém os valores dos campos
    const botao_a = parseFloat(document.getElementById('botao_a').value);
    const botao_b = parseFloat(document.getElementById('botao_b').value);

    // Obtém a div da mensagem
    const messageDiv = document.getElementById('message');

    // Valida o formulário
    if (botao_b > botao_a) {
        messageDiv.textContent = 'O formulário é válido! Campo B é maior que Campo A.';
        messageDiv.className = 'message success';
    } else {
        messageDiv.textContent = 'O formulário é inválido! Campo B deve ser maior que Campo A.';
        messageDiv.className = 'message error';
    }
});