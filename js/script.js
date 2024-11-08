// Função para ocultar todas as seções e exibir apenas a selecionada
function mostrarSecao(secaoId) {
    // Oculta todas as seções
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => {
        secao.classList.remove('conteudo-visivel');  // Remove a classe para ocultar
        secao.style.display = 'none'; // Esconde a seção
    });

    // Exibe a seção com o id passado
    const secao = document.getElementById(secaoId);
    if (secao) {
        secao.classList.add('conteudo-visivel');  // Adiciona a classe para mostrar
        secao.style.display = 'block'; // Exibe a seção
    }
}
