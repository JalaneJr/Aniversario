// Definindo credenciais com URLs de redirecionamento específicas
const validCredentials = [
    { name: "Natalia", contact: "863913234", showCounter: true, redirectUrl: "index.html" },
    { name: "Jalane", contact: "852574127", showCounter: false, redirectUrl: "happy birtday.html" },
    { name: "Cacilda", contact: "879841434", showCounter: false, redirectUrl: "happy birtday.html" },
    { name: "Genesis", contact: "823741592", showCounter: false, redirectUrl: "principal.html" }
];

// Função de login
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;

    // Verificar se as credenciais são válidas
    const user = validCredentials.find(u => u.name === name && u.contact === contact);

    if (user) {
        document.getElementById("loginSection").style.display = "none"; // Ocultar a seção de login

        if (user.showCounter) {
            // Verificar se é o dia 20 de novembro de 2024 ou posterior
            const currentDate = new Date();
            const targetDate = new Date('2024-11-20');
            
            if (currentDate >= targetDate) {
                // Redirecionar para a página específica se o contador tiver terminado
                window.location.href = user.redirectUrl;
            } else {
                // Mostrar o painel do contador e iniciar a contagem regressiva
                document.getElementById("counterSection").style.display = "block";
                startCountdown(targetDate); // Passa a data de destino para a contagem regressiva
            }
        } else {
            // Se não é para mostrar o contador, redirecionar diretamente para a página específica
            window.location.href = user.redirectUrl;
        }
    } else {
        document.getElementById("errorMsg").innerText = "Credenciais inválidas!";
    }
});


function updateCounter() {
    const now = new Date();
    const targetDate = new Date('November 20, 2024 10:00:00');
    const remainingTime = targetDate - now;

    if (remainingTime <= 0) {
        // O contador terminou, mostre o botão "Entrar"
        document.getElementById('enterButton').style.display = 'block';
    }

    const weeks = Math.floor(remainingTime / (7 * 24 * 60 * 60 * 1000));
    const days = Math.floor((remainingTime % (7 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    const hours = Math.floor((remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

    document.getElementById('weeks').textContent = weeks < 10 ? '0' + weeks : weeks;
    document.getElementById('days').textContent = days < 10 ? '0' + days : days;
    document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
}

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);
