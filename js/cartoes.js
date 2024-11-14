// cartoes.js



// Função para gerar o conteúdo HTML dos cartões virtuais
function gerarConteudoCartoes() {
    return `
        <h2>Cartões Virtuais</h2>
        ${gerarCartoes()}
    `;
}

// Função auxiliar para gerar cada cartão individualmente
function gerarCartoes() {
    const cartoes = [
        { titulo: "Feliz Aniversário!", mensagem: "Que seu dia seja repleto de alegria e amor.", imagem: "img/c1.png" },
        { titulo: "Parabéns!", mensagem: "Que todos os seus desejos se realizem hoje.", imagem: "img/c2.png" },
        { titulo: "Comemore!", mensagem: "Hoje é um dia especial, aproveite cada momento!", imagem: "img/c3.png" },
        { titulo: "Boas Festas!", mensagem: "Desejamos a você um fim de ano cheio de paz.", imagem: "img/c4.png" },
        { titulo: "Sucesso!", mensagem: "Que este novo caminho seja brilhante e próspero.", imagem: "img/c5.png" },
        { titulo: "Felicidades!", mensagem: "Que a sua jornada seja sempre abençoada.", imagem: "img/c6.png" },
        { titulo: "Novo Começo!", mensagem: "Que esta nova fase traga muita realização.", imagem: "img/c7.png" },
        { titulo: "Obrigado!", mensagem: "Agradecemos por estar ao nosso lado.", imagem: "img/c8.png" },
        { titulo: "Gratidão!", mensagem: "Nossa eterna gratidão por tudo que você faz.", imagem: "img/c10.png" },
        { titulo: "Bons Ventos!", mensagem: "Que o futuro traga ainda mais conquistas.", imagem: "img/c11.png" },
        { titulo: "Viva!", mensagem: "Celebre cada momento com alegria e gratidão.", imagem: "img/c12.png" },
        { titulo: "Saúde!", mensagem: "Que a sua vida seja sempre plena de saúde.", imagem: "img/c13.png" },
        { titulo: "Alegria!", mensagem: "Que cada dia traga novas razões para sorrir.", imagem: "img/c14.png" },
        { titulo: "Coragem!", mensagem: "Enfrente cada desafio com determinação.", imagem: "img/c15.png" },
        { titulo: "Esperança!", mensagem: "Que nunca falte fé para seguir em frente.", imagem: "img/c16.png" },
        { titulo: "Boas Novas!", mensagem: "Que boas notícias cheguem sempre até você.", imagem: "img/c17.png" },
        { titulo: "Força!", mensagem: "Tenha coragem para realizar todos os seus sonhos.", imagem: "img/c18.png" },
        { titulo: "Amizade!", mensagem: "A amizade é um tesouro que guardamos com carinho.", imagem: "img/c19.png" },
        { titulo: "Gratidão!", mensagem: "Agradecemos por sua presença especial em nossas vidas.", imagem: "img/c20.png" },
        { titulo: "Carinho!", mensagem: "Um abraço cheio de carinho para você.", imagem: "img/c21.png" },
        { titulo: "Saudade!", mensagem: "Que possamos nos encontrar novamente em breve.", imagem: "img/c22.png" }
    ];

    return cartoes.map(cartao => `
        <div class="cartao">
            <img src="${cartao.imagem}" alt="${cartao.titulo}" class="cartao-imagem"/>
            <div class="cartao-texto">
                <h3>${cartao.titulo}</h3>
                <p>${cartao.mensagem}</p>
            </div>
        </div>
    `).join('');
}
