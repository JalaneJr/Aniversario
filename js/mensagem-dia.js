function mostrarMensagemDia() {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => secao.classList.remove('conteudo-visivel'));
    
    // Encontra a seção "mensagem-dia" e a exibe, caso exista
    const secaoMensagem = document.getElementById('mensagem-dia');
    if (secaoMensagem) {
        // Adiciona a classe para mostrar a seção
        secaoMensagem.classList.add('conteudo-visivel');
        secaoMensagem.style.display = 'block'; // Exibe a seção
    } else {
        console.error('Seção "Mensagem do Dia" não encontrada.');
    }
}

// Função para garantir que a seção "mensagem-dia" comece oculta
document.addEventListener('DOMContentLoaded', () => {
    const secaoMensagem = document.getElementById('mensagem-dia');
    if (secaoMensagem) {
        secaoMensagem.style.display = 'none'; // Inicialmente oculta
    }
});
