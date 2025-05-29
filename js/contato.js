
document.getElementById("contatoForm").addEventListener("submit", function (e) {
e.preventDefault();  // Impede o envio do formulário em branco

// Pega os valores dos campos
const nome = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const comentarios = document.getElementById("comentarios").value.trim();

// Verifica se todos os campos estão preenchidos
if (nome === "" || email === "" || comentarios === "") {
    alert("Por favor! Preencha todos os campos antes de enviar o Email.");
    return;
}

// Você pode adicionar validação de email aqui também, se quiser
if (!email.includes("@") || !email.includes(".")) {
    alert("Por favor! Insira um email válido.");
    return;
}

// Se tudo estiver certo ao clicar no botao enviar mostra email enviado
alert("Email enviado com sucesso!");
// aqui somente vai mostrar uma alerta para o usuario informando que o email foi enviado 
// mas isso nao esta acontecento ainda
});