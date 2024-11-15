// Array com os nomes dos arquivos das 10 músicas favoritas

const musicasFavoritas = [
    "Adele_-_Easy_On_Me.mp3",
    "Afrotraction_-_For_the_Lovers_(feat._Neo_Molamo)(256k).mp3",
    "y2mate.com - Afrotraction  Mnike.mp3",
    "Black_Coffee_-_Your_Eyes_ft._Shekhinah(128k).mp3",
    "Meddy_-_Slowly_[Official_Video](128k).mp3",
    "Muni Long  Butterfly Effect Audio.mp3",
    "Muni_Long_-_Made_For_Me__Audio_(128k).mp3",
    "Kabza De Small  Mthunzi  Imithandazo FT Young Stunna DJ Maphorisa Sizwe Alakine  UmthakathiKush.mp3",
    "y2mate.com - Billie Eilish  Ocean Eyes.mp3",
    "y2mate.com - Billie Eilish Khalid  lovely.mp3",
    "y2mate.com - Cynthia Erivo  Stand Up.mp3",
    "y2mate.com - Elmiene  Mad At Fire.mp3",
    "y2mate.com - Like You  Tatiana Manaois OFFICIAL MUSIC VIDEO.mp3",
    "y2mate.com - Muni Long  Hrs  Hrs.mp3",
    "y2mate.com - Muni Long USHER  Hrs  Hrs Remix  Audio.mp3",
    "Tsunela-Papai.mp3",
    "y2mate.com - James Arthur  Say You Wont Let Go Audio.mp3"
];

// Variável para armazenar o índice da música atual
let musicaAtual = 0;

// Função para formatar o nome da música para exibição
function formatarNomeMusica(nomeArquivo) {
    return nomeArquivo
        .replace(/_/g, " ")
        .replace(/\.mp3$/i, "")
        .replace(/-/g, " - ");
}

// Função para mostrar a seção de músicas e criar a lista de músicas dinamicamente
function mostrarMusica() {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => secao.classList.remove('conteudo-visivel'));
    
    const secaoMusica = document.getElementById('musica');
    if (secaoMusica) {
        secaoMusica.classList.add('conteudo-visivel');

        // Exibe a mensagem inicial
        secaoMusica.innerHTML = "<h2>Músicas Favoritas</h2><p>Escolha uma música para ouvir!</p><ul id='lista-musicas'></ul>";

        // Adiciona cada música da lista ao HTML com o nome formatado
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
// Função para alternar a visibilidade do menu dropdown
function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show");
}

function tocarMusica(index) {
    musicaAtual = index;
    const modalMusica = document.getElementById("modal-musica");
    const audioPlayer = document.getElementById("audio-player");
    const audioSource = document.getElementById("audio-source");
    const tituloMusica = document.getElementById("titulo-musica");

    const musicaSelecionada = musicasFavoritas[musicaAtual];
    tituloMusica.textContent = formatarNomeMusica(musicaSelecionada);

    // Usa encodeURIComponent para garantir que o caminho esteja correto
    audioSource.src = `musica/${encodeURIComponent(musicaSelecionada)}`;
    audioPlayer.load();

    audioPlayer.onerror = function() {
        console.error(`Erro ao carregar a música: ${musicaSelecionada}`);
        alert(`Não foi possível tocar a música: ${formatarNomeMusica(musicaSelecionada)}`);
    };

    // Aguarda o evento 'canplaythrough' para evitar o AbortError
    audioPlayer.oncanplaythrough = function() {
        audioPlayer.play();
    };


    // Define o link de download com a música atual
    const downloadLink = document.getElementById("download-link");
    downloadLink.href = `musica/${musicaSelecionada}`;
    downloadLink.download = musicaSelecionada;

    // Exibe o modal e inicia a reprodução da música
    modalMusica.style.display = "block";
    audioPlayer.play();

    // Adicionar evento de término de música para tocar a próxima automaticamente
    audioPlayer.removeEventListener('ended', tocarMusicaProxima);  // Remove qualquer listener existente para evitar duplicação
    audioPlayer.addEventListener('ended', tocarMusicaProxima);

    // Atualiza a barra de progresso e aplica o efeito de cores
    audioPlayer.ontimeupdate = function() {
        const progresso = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        const barraProgresso = document.getElementById("barra-progresso");
        barraProgresso.style.width = `${progresso}%`;
        barraProgresso.style.background = `linear-gradient(to right, #ff8a00, #e52e71, #007aff)`;
    };
}

// Fecha o dropdown ao clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.more-options')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};



// Função para alternar entre play e pause
function togglePlay() {
    const audioPlayer = document.getElementById("audio-player");
    const btnPlay = document.getElementById("btn-play");

    if (audioPlayer.paused) {
        audioPlayer.play();
        btnPlay.innerHTML = "⏸️";  // Troca o ícone para pausa
    } else {
        audioPlayer.pause();
        btnPlay.innerHTML = "▶️";  // Troca o ícone para play
    }
}

// Função para tocar a música anterior
function tocarMusicaAnterior() {
    musicaAtual = (musicaAtual === 0) ? musicasFavoritas.length - 1 : musicaAtual - 1;
    tocarMusica(musicaAtual);
}

// Função para tocar a próxima música
function tocarMusicaProxima() {
    musicaAtual = (musicaAtual === musicasFavoritas.length - 1) ? 0 : musicaAtual + 1;
    tocarMusica(musicaAtual);
}

// Função para fechar o modal e interromper a música
function fecharModalMusica() {
    const modalMusica = document.getElementById("modal-musica");
    const audioPlayer = document.getElementById("audio-player");

    // Pausa e reseta a música
    audioPlayer.pause();
    audioPlayer.currentTime = 0;

    // Fecha o modal e remove o efeito
    modalMusica.style.display = "none";
}
