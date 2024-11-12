// Função para ocultar todas as seções
function ocultarTodasAsSecoes() {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => {
        secao.classList.remove('conteudo-visivel');
    });
}

// Função para mostrar a seção de Músicas
function mostrarMusica() {
    ocultarTodasAsSecoes();

    const secaoMusica = document.getElementById('musica');
    if (secaoMusica) {
        secaoMusica.classList.add('conteudo-visivel');
        secaoMusica.innerHTML = `
            <button onclick="ocultarTodasAsSecoes()" class="btn-fechar">Fechar</button>
            <h2>Músicas Favoritas</h2>
            <p>Escolha uma música para ouvir!</p>
            <ul id="lista-musicas"></ul>
        `;

        const listaMusicas = document.getElementById('lista-musicas');
        musicasFavoritas.forEach((musica, index) => {
            const li = document.createElement("li");
            li.innerHTML = `<button onclick="tocarMusica(${index})">${formatarNomeMusica(musica)}</button>`;
            listaMusicas.appendChild(li);
        });
    } else {
        console.error('Seção "Musica" não encontrada.');
    }
}

// Função para mostrar a seção de Cartões
function mostrarCartoes() {
    ocultarTodasAsSecoes();

    const secaoCartoes = document.getElementById('cartoes-notificacao');
    if (secaoCartoes) {
        secaoCartoes.classList.add('conteudo-visivel');
        secaoCartoes.innerHTML = `
            <button onclick="ocultarTodasAsSecoes()" class="btn-fechar">Fechar</button>
            ${gerarConteudoCartoes()}
        `;
    } else {
        console.error('Seção "Cartões" não encontrada.');
    }
}

// Função para mostrar a linha do tempo e o primeiro evento
function mostrarLinhaDoTempo() {
    ocultarTodasAsSecoes();

    const linhaDoTempoWrapper = document.getElementById('linha-do-tempo-wrapper');
    if (linhaDoTempoWrapper) {
        linhaDoTempoWrapper.classList.add('conteudo-visivel');

        // Limpa o conteúdo da seção para evitar duplicações
        linhaDoTempoWrapper.innerHTML = `
            <button onclick="fecharLinhaDoTempo()" class="btn-fechar">Fechar</button>
            <h2>Linha do Tempo</h2>
        `;

        // Gera os eventos da linha do tempo
        eventos.forEach((evento, index) => {
            const eventoDiv = document.createElement('div');
            eventoDiv.classList.add('linha-do-tempo-evento');
            eventoDiv.id = `evento-${index + 1}`;
            eventoDiv.style.display = 'none';  // Inicialmente oculta os eventos

            eventoDiv.innerHTML = `
                <div class="evento-imagem">
                    <img src="${evento.imagem}" alt="Evento ${index + 1}">
                </div>
                <div class="evento-descricao">
                    <p class="data">${evento.data}</p>
                    <p class="descricao">${evento.descricao}</p>
                    <button onclick="exibirDetalhes(${index})">Ver Detalhes</button>
                </div>
            `;
            linhaDoTempoWrapper.appendChild(eventoDiv);
        });

        // Torna o primeiro evento visível
        mostrarEvento(0);  // Exibe o primeiro evento
    } else {
        console.error('Seção "Linha do Tempo" não encontrada.');
    }
}

// Função para fechar a seção de Linha do Tempo
function fecharLinhaDoTempo() {
    const linhaDoTempoWrapper = document.getElementById('linha-do-tempo-wrapper');
    if (linhaDoTempoWrapper) {
        linhaDoTempoWrapper.classList.remove('conteudo-visivel');
    }
}

// Função para exibir a seção de "Mensagem do Dia"
function mostrarMensagemDia() {
    ocultarTodasAsSecoes();

    const secaoMensagem = document.getElementById('mensagem-dia');
    if (secaoMensagem) {
        secaoMensagem.classList.add('conteudo-visivel');
        secaoMensagem.innerHTML = `
            <button onclick="ocultarTodasAsSecoes()" class="btn-fechar">Fechar</button>
            <h2>Mensagem do Dia</h2>
            <div id="mensagens-enviadas"></div>
        `;
        carregarMensagens();
    } else {
        console.error('Seção "Mensagem do Dia" não encontrada.');
    }
}
