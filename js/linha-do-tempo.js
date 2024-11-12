let eventoAtual = 0; // Inicia no primeiro evento (index 0)
let totalEventos = 22; // Total de eventos

// Variável para armazenar a seção que está aberta atualmente


const eventos = [
    { data: "01/01/2000", descricao: "Primeira lembrança...", imagem: "img/1.png" },
    { data: "01/01/2001", descricao: "Evento especial no ano 2001", imagem: "img/2.png" },
    { data: "01/01/2002", descricao: "Evento memorável em 2002", imagem: "img/3.png" },
    { data: "01/01/2003", descricao: "Acontecimento em 2003", imagem: "img/4.png" },
    { data: "01/01/2004", descricao: "Grande evento de 2004", imagem: "img/5.png" },
    { data: "01/01/2005", descricao: "Marcante em 2005", imagem: "img/6.png" },
    { data: "01/01/2006", descricao: "Início de algo novo em 2006", imagem: "img/7.png" },
    { data: "01/01/2007", descricao: "Recordação de 2007", imagem: "img/8.png" },
    { data: "01/01/2008", descricao: "Ano de mudanças em 2008", imagem: "img/9.png" },
    { data: "01/01/2009", descricao: "Evento de 2009", imagem: "img/10.png" },
    { data: "01/01/2010", descricao: "Novo marco em 2010", imagem: "img/11.png" },
    { data: "01/01/2011", descricao: "Lembrança de 2011", imagem: "img/12.png" },
    { data: "01/01/2012", descricao: "Acontecimento em 2012", imagem: "img/13.png" },
    { data: "01/01/2013", descricao: "Momentos de 2013", imagem: "img/14.png" },
    { data: "01/01/2014", descricao: "Recordações de 2014", imagem: "img/15.png" },
    { data: "01/01/2015", descricao: "Evento marcante em 2015", imagem: "img/16.png" },
    { data: "01/01/2016", descricao: "Ano especial de 2016", imagem: "img/17.png" },
    { data: "01/01/2017", descricao: "Marcos de 2017", imagem: "img/18.png" },
    { data: "01/01/2018", descricao: "Novidades de 2018", imagem: "img/19.png" },
    { data: "01/01/2019", descricao: "Eventos de 2019", imagem: "img/20.png" },
    { data: "01/01/2020", descricao: "Recomeço em 2020", imagem: "img/21.png" },
    { data: "01/01/2022", descricao: "Evento final com uma surpresa!", imagem: "img/22.png", video: "video/Natalia.mp4" } // Evento 22 com vídeo
];


// Função para ocultar todas as seções
function ocultarTodasAsSecoes() {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => {
        secao.classList.remove('conteudo-visivel');
    });
}

// Função para mostrar a linha do tempo e o primeiro evento
function mostrarLinhaDoTempo() {
    ocultarTodasAsSecoes();

    const linhaDoTempoWrapper = document.getElementById('linha-do-tempo-wrapper');
    if (linhaDoTempoWrapper) {
        linhaDoTempoWrapper.classList.add('conteudo-visivel');

        // Adiciona o botão "Fechar" no topo da seção
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


// Função para mostrar um evento específico
function mostrarEvento(indice) {
    // Esconde o evento anterior
    const eventoAnterior = document.getElementById(`evento-${eventoAtual + 1}`);
    if (eventoAnterior) {
        eventoAnterior.style.display = 'none'; // Oculta o evento anterior
    }

    // Exibe o evento atual
    const evento = document.getElementById(`evento-${indice + 1}`);
    if (evento) {
        evento.style.display = 'flex'; // Torna o evento visível
        evento.classList.add('aberto');
    }

    // Esconde o botão "Próximo" e o conteúdo abaixo do evento 22
    if (indice === 21) { // Evento 22 (index 21)
        document.getElementById("botao-proximo").style.display = 'none'; // Esconde o botão "Próximo"
        document.getElementById("conteudo-abaixo").style.display = 'none'; // Oculta o conteúdo abaixo
    } else {
        document.getElementById("botao-proximo").style.display = 'block'; // Exibe o botão "Próximo"
        document.getElementById("conteudo-abaixo").style.display = 'block'; // Exibe o conteúdo abaixo
    }
}

// Função para mostrar o modal com os detalhes do evento
function exibirDetalhes(indice) {
    eventoAtual = indice; // Atualiza o evento atual
    const evento = eventos[indice];
    const modal = document.getElementById("modal-evento");
    
    // Preenche o modal com os detalhes do evento
    document.getElementById("modal-data").innerText = `Data: ${evento.data}`;
    document.getElementById("modal-descricao").innerText = evento.descricao;
    document.getElementById("modal-imagem").src = evento.imagem;  // Carrega a imagem
    
    // Verifica se o evento tem um vídeo associado e exibe-o
    const modalVideo = document.getElementById("modal-video");
    const videoPlayer = document.getElementById("video-player");
    
    if (evento.video) {
        modalVideo.style.display = "block"; // Exibe o vídeo
        videoPlayer.src = evento.video; // Define a fonte do vídeo
        videoPlayer.play(); // Inicia a reprodução do vídeo
    } else {
        modalVideo.style.display = "none"; // Esconde o vídeo se não houver
    }

    // Exibe o modal
    modal.style.display = "block";
}
// Função para esconder o botão "Próximo" de todas as seções
function esconderBotaoProximo() {
    const botaoProximo = document.getElementById('botao-proximo');
    if (botaoProximo) {
        botaoProximo.style.display = 'none';
    }
}

// Função para mostrar o botão "Próximo" quando a seção Linha do Tempo estiver visível
function mostrarBotaoProximo() {
    const botaoProximo = document.getElementById('botao-proximo');
    if (botaoProximo) {
        botaoProximo.style.display = 'block';
    }
}
// Função para exibir o modal com o vídeo
function exibirVideo(urlDoVideo) {
    const modalVideo = document.getElementById("modal-video");
    const videoPlayer = document.getElementById("video-player");
    const videoSource = document.getElementById("video-source");

    // Define a URL do vídeo
    videoSource.src = urlDoVideo;

    // Atualiza o src do vídeo para garantir que ele seja carregado corretamente
    videoPlayer.load();

    // Exibe o modal
    modalVideo.style.display = "block";

    // Reproduz o vídeo automaticamente
    videoPlayer.play();
}

// Função para fechar o modal e parar o vídeo
function fecharModal() {
    const modalVideo = document.getElementById("modal-video");
    const videoPlayer = document.getElementById("video-player");

    // Pausa o vídeo
    videoPlayer.pause();

    // Reseta o tempo do vídeo para 0
    videoPlayer.currentTime = 0;

    // Esconde o modal
    modalVideo.style.display = "none";
}
// Função para fechar o modal
function fecharEvento() {
    const modal = document.getElementById("modal-evento");
    modal.style.display = "none";
}

// Função para avançar para o próximo evento no modal
function proximoEventoModal() {
    if (eventoAtual < eventos.length - 1) {
        eventoAtual++;
        exibirDetalhes(eventoAtual);
    }
}

// Função para voltar para o evento anterior no modal
function eventoAnteriorModal() {
    if (eventoAtual > 0) {
        eventoAtual--;
        exibirDetalhes(eventoAtual);
    }
}

// Função para atualizar os botões "Próximo" e "Anterior"
function atualizarBotoesModal() {
    const botaoProximo = document.getElementById("botao-proximo-modal");
    const botaoAnterior = document.getElementById("botao-anterior-modal");

    // Mostra ou esconde os botões com base no evento atual
    if (eventoAtual === 0) {
        botaoAnterior.style.display = "none";
    } else {
        botaoAnterior.style.display = "inline-block";
    }

    if (eventoAtual === eventos.length - 1) {
        botaoProximo.style.display = "none";
    } else {
        botaoProximo.style.display = "inline-block";
    }
}

// Função para avançar para o próximo evento na linha do tempo
function proximoEvento() {
    if (eventoAtual < eventos.length - 1) {
        eventoAtual++;
        mostrarEvento(eventoAtual);
    }
}

// Função para voltar para o evento anterior na linha do tempo
function eventoAnterior() {
    if (eventoAtual > 0) {
        eventoAtual--;
        mostrarEvento(eventoAtual);
    }
}



// Adiciona o evento de clique no botão de fechar do vídeo
document.getElementById("fechar-video").addEventListener("click", fecharModal);

// Chama a função para exibir a linha do tempo assim que o DOM estiver pronto
document.addEventListener("DOMContentLoaded", mostrarLinhaDoTempo);
