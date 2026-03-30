
let produtos = [
    {
        id: 1,
        nome: 'Creatina Monohidratada',
        preco: 'R$ 79,90',
        imagem: 'https://images.tcdn.com.br/img/img_prod/920697/tasty_whey_3w_900g_adaptogen_837_1_b6f504579c487c3def19678b05c70098.jpeg',
        fabricante: 'Adaptogen Science',
        descricao: 'Suplemento muito usado para melhorar forca, explosao muscular e desempenho em treinos intensos.'
    },
    {
        id: 2,
        nome: '100% Whey Protein',
        preco: 'R$ 99,90',
        imagem: 'https://images.tcdn.com.br/img/img_prod/920697/tasty_whey_3w_900g_adaptogen_837_1_b6f504579c487c3def19678b05c70098.jpeg',
        fabricante: 'Max Titanium',
        descricao: 'Proteina indicada para auxiliar na recuperacao muscular e no ganho de massa magra.'
    },
    {
        id: 3,
        nome: 'Pre-Treino Insano',
        preco: 'R$ 89,90',
        imagem: 'https://images.tcdn.com.br/img/img_prod/920697/tasty_whey_3w_900g_adaptogen_837_1_b6f504579c487c3def19678b05c70098.jpeg',
        fabricante: 'New Millen',
        descricao: 'Ideal para aumentar foco, energia e disposicao antes do treino.'
    },
    {
        id: 4,
        nome: 'BCAA 2400',
        preco: 'R$ 54,90',
        imagem: 'https://images.tcdn.com.br/img/img_prod/920697/tasty_whey_3w_900g_adaptogen_837_1_b6f504579c487c3def19678b05c70098.jpeg',
        fabricante: 'Integralmedica',
        descricao: 'Aminoacidos que ajudam na recuperacao muscular e reducao do catabolismo.'
    },
    {
        id: 5,
        nome: 'Glutamina Powder',
        preco: 'R$ 64,90',
        imagem: 'https://images.tcdn.com.br/img/img_prod/920697/tasty_whey_3w_900g_adaptogen_837_1_b6f504579c487c3def19678b05c70098.jpeg',
        fabricante: 'Growth Supplements',
        descricao: 'Suplemento muito usado para apoiar a recuperacao e o sistema imunologico.'
    },
    {
        id: 6,
        nome: 'Hipercalorico Mass Gainer',
        preco: 'R$ 119,90',
        imagem: 'https://images.tcdn.com.br/img/img_prod/920697/tasty_whey_3w_900g_adaptogen_837_1_b6f504579c487c3def19678b05c70098.jpeg',
        fabricante: 'Black Skull',
        descricao: 'Produto indicado para quem quer aumentar a ingestao calorica e ganhar peso.'
    },
    {
        id: 7,
        nome: 'Termogenico Black Burn',
        preco: 'R$ 69,90',
        imagem: 'https://images.tcdn.com.br/img/img_prod/920697/tasty_whey_3w_900g_adaptogen_837_1_b6f504579c487c3def19678b05c70098.jpeg',
        fabricante: 'Dark Lab',
        descricao: 'Suplemento focado em energia e apoio em estrategias de emagrecimento.'
    },
    {
        id: 8,
        nome: 'Multivitaminico Daily',
        preco: 'R$ 49,90',
        imagem: 'https://images.tcdn.com.br/img/img_prod/920697/tasty_whey_3w_900g_adaptogen_837_1_b6f504579c487c3def19678b05c70098.jpeg',
        fabricante: 'Dux Nutrition',
        descricao: 'Combina vitaminas e minerais para complementar a rotina alimentar.'
    }
];
    const produtosContainer = document.getElementById("produtos-container")
    function mostrarProdutos(produtos){
    produtos.forEach((produto) => {
        const card = document.createElement("div")
        card.classList.add("produto-card")
        const cardA = document.createElement("a")
        card.innerHTML=`
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome.toUpperCase()} - 
        ${produto.fabricante.toUpperCase()}</h3>
        <p>${produto.preco}</p>
        `
        cardA.append(card)
        produtosContainer.appendChild(cardA)

    });
}
mostrarProdutos(produtos)
