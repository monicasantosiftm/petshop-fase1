// Relógio Digital em tempo real (Requisito Dinamismo)
function atualizarRelogio() {
    const agora = new Date();
    const elemento = document.getElementById('relogioDigital');
    if (elemento) {
        elemento.innerText = "Acesso em: " + agora.toLocaleDateString() + " - " + agora.toLocaleTimeString();
    }
}
setInterval(atualizarRelogio, 1000);

// Alerta de formulário (Dinamismo JavaScript)
const form = document.getElementById('formPet');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Agendamento concluído! Verifique o e-mail de confirmação.");
        form.reset();
    });
}