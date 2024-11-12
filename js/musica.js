// Array com os nomes dos arquivos das 10 músicas favoritas

const musicasFavoritas = [
    "Adele_-_Easy_On_Me(lyrics)(256k).mp3",
    "Afrotraction_-_For_the_Lovers_(feat._Neo_Molamo)(256k).mp3",
    "Afrotraction_-_Mnike(256k).mp3",
    "Black_Coffee_-_Your_Eyes_ft._Shekhinah(128k).mp3",
    "Lloyiso_-_Speak(256k).mp3",
    "Meddy_-_Slowly_[Official_Video](128k).mp3",
    "Muni Long  Butterfly Effect Audio.mp3",
    "Muni_Long_-_Made_For_Me__Audio_(128k).mp3",
    "y2mate.com - Luan Santana  A Dor Desse Amor Vídeo Oficial.mp3",
    "Kabza De Small  Mthunzi  Imithandazo FT Young Stunna DJ Maphorisa Sizwe Alakine  UmthakathiKush.mp3"
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

// Função para abrir o modal e tocar a música selecionada
function tocarMusica(index) {
    musicaAtual = index;  // Atualiza a música atual
    const modalMusica = document.getElementById("modal-musica");
    const audioPlayer = document.getElementById("audio-player");
    const audioSource = document.getElementById("audio-source");
    const tituloMusica = document.getElementById("titulo-musica");

    const musicaSelecionada = musicasFavoritas[musicaAtual];
    
    // Define o título da música
    tituloMusica.textContent = formatarNomeMusica(musicaSelecionada);

    // Define o src do áudio para a música selecionada e carrega o player
    audioSource.src = `musica/${musicaSelecionada}`;
    audioPlayer.load();

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
