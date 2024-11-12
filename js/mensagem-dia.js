function mostrarMensagemDia() {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => secao.classList.remove('conteudo-visivel'));

    // Encontra a seção "mensagem-dia" e a exibe
    const secaoMensagem = document.getElementById('mensagem-dia');
    if (secaoMensagem) {
        secaoMensagem.classList.add('conteudo-visivel');
        secaoMensagem.style.display = 'block';
    } else {
        console.error('Seção "Mensagem do Dia" não encontrada.');
    }

    // Carrega e exibe as mensagens
    carregarMensagens();
}

function carregarMensagens() {
    const mensagens = JSON.parse(localStorage.getItem('mensagens')) || [];
    const containerMensagens = document.getElementById('mensagens-enviadas');

    // Limpa as mensagens existentes
    containerMensagens.innerHTML = '';

    // Exibe as mensagens armazenadas
    mensagens.forEach(mensagem => {
        const divMensagem = document.createElement('div');
        divMensagem.classList.add('mensagem');
        divMensagem.innerHTML = `<strong>${mensagem.nome}:</strong> ${mensagem.mensagem}`;
        containerMensagens.appendChild(divMensagem);
    });
}